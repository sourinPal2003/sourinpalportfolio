import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export const processCommand = (command) => {
  // Process the command and return an action object
  const [cmd, ...args] = command.split(' ');
  
  switch (cmd.toLowerCase()) {
    case 'open':
      if (args.length === 0 || args.length > 1) {
        return { error: true, message: 'Error: Missing file name or invalid number of arguments' };
      }
      return { error: false, action: 'open', fileName: args[0] };
    
    case 'run':
      if (args.length === 0  || args.length > 1) {
        return { error: true, message: 'Error: Missing file name or invalid number of arguments' };
      }
      return { error: false, action: 'run', fileName: args[0] };
    
    case 'clear':
      return { error: false, action: 'clear' };
    
    case 'help':
      return { 
        error: false, 
        message: 'Available commands:\n- open [filename] : Opens a file (e.g: open about)\n- run [filename] : Runs/previews a file (e.g: run about)\n- clear : Clears the terminal\n- help : Shows this help message' 
      };
    
    default:
      return { error: true, message: `Command not found: ${command}` };
  }
};

// Helper function to standardize file names
// This function will not be used may be removed!!!
// function cleanFileName(fileName) {
//   // If no extension is provided, add .js as default
//   if (!fileName.includes('.')) {
//     fileName = `${fileName}.js`;
//   }
  
//   // Remove any leading / or ./ if present
//   fileName = fileName.replace(/^[\.\/]+/, '');
  
//   return fileName;
// }

// This is a hook to execute terminal commands using the context
export const useTerminalCommands = () => {
  const context = useContext(AppContext);
  
  const executeCommand = (command) => {
    const result = processCommand(command);
    
    if (result.error) {
      return result;
    }
    
    switch (result.action) {
      case 'open':
        // Try to find the file in fileData, checking different variations of file name
        const fileToOpen = findFileInContext(context, result.fileName);
        
        if (fileToOpen) {
          context.openFile(fileToOpen);
          return { error: false, message: `Opening ${fileToOpen}...` };
        } else {
          return { error: true, message: `Error: File '${result.fileName}' not found` };
        }
      
      case 'run':
        // Try to find the file in fileData, checking different variations of file name
        const fileToRun = findFileInContext(context, result.fileName);
        
        if (fileToRun) {
          // First ensure the file is open in a tab
          if (!context.openedTabs.includes(fileToRun)) {
            context.openFile(fileToRun);
          }
          
          // Then set it as active and enter preview mode
          context.setActiveTab(fileToRun);
          context.setIsPreviewMode(true);
          return { error: false, message: `Running ${fileToRun}...` };
        } else {
          return { error: true, message: `Error: File '${result.fileName}' not found` };
        }
      
      case 'clear':
        // The App context might have a different method for managing terminal history
        // Instead of directly setting the history, we'll return a clear action
        // and let the terminal component handle it
        return { 
          error: false, 
          action: 'clear',
          message: 'Terminal cleared.' 
        };
      
      default:
        return result;
    }
  };
  
  return executeCommand;
};

// Helper function to find a file in the context
function findFileInContext(context, fileName) {
  // Check if the file exists exactly as specified
  if (context.fileData[fileName]) {
    return fileName;
  }
  
  return null; // File not found
}
