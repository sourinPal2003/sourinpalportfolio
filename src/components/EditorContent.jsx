import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlay, FaCode } from 'react-icons/fa';
import SkillsCode from './CodeModeContent/SkillsCode';
import ProjectsCode from './CodeModeContent/ProjectsCode';
import AboutCode from './CodeModeContent/AboutCode';
import ContactCode from './CodeModeContent/ContactCode';
import EducationCode from './CodeModeContent/EducationCode';
import AboutRun from './RunModeContent/AboutRun';
import SkillsRun from './RunModeContent/SkillsRun';
import ProjectsRun from './RunModeContent/ProjectsRun';
import EducationRun from './RunModeContent/EducationRun';
import ContactRun from './RunModeContent/ContactRun';

const EditorContent = () => {
  const { 
    activeTab, 
    fileData, 
    isPreviewMode, 
    setIsPreviewMode, 
    addTerminalMessage 
  } = useContext(AppContext);
  
  const [lineNumbers, setLineNumbers] = useState([]);
  
  useEffect(() => {
    if (!activeTab || isPreviewMode) return;
  
    setLineNumbers(Array.from({ length: 1000 }, (_, i) => i + 1));
  }, [activeTab, fileData, isPreviewMode]);

  // Helper function to add syntax highlighting
  // const formatCode = (code) => {
  //   if (!code) return '';
    
  //   return code
  //     .replace(/\/\/(.*)/g, '<span class="text-[#6A9955]">$&</span>') // Comments
  //     .replace(/import|from|export|const|let|var|return|if|else|function/g, '<span class="text-[#569CD6]">$&</span>') // Keywords
  //     .replace(/className="([^"]*)"/g, 'className="<span class="text-[#CE9178]">$1</span>"') // Classnames
  //     .replace(/'([^']*)'/g, '<span class="text-[#CE9178]">\'$1\'</span>') // Single quote strings
  //     .replace(/"([^"]*)"/g, '<span class="text-[#CE9178]">"$1"</span>') // Double quote strings
  //     .replace(/=&gt;/g, '<span class="text-[#DCDCAA]">=&gt;</span>'); // Arrow functions
  // };

  if (!activeTab) {
    return (
      <div className="flex-1 overflow-auto bg-[#1E1E1E] flex items-center justify-center text-gray-500 text-sm">
        <div className="text-center">
          <p>Welcome to Sourin Pal's Portfolio</p>
          <p>Select a file from the explorer to get started</p>
          <p className="mt-2 ">Use the terminal to run commands. Type 'help' in the terminal for more information</p>
        </div>
      </div>
    );
  }

  const handleRunButtonClick = () => {
    if (isPreviewMode) {
      setIsPreviewMode(false);
    } else {
      setIsPreviewMode(true);
      addTerminalMessage(`$ run ${activeTab}`);
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-[#1E1E1E] relative">
      {isPreviewMode ? (
        // Preview Mode
        <div className="h-full overflow-auto bg-[#1E1E1E]">
          <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-xl font-bold mb-4 border-b pb-2 border-gray-700">
              {fileData[activeTab]?.preview?.title}
            </h1>
            {{'about': <AboutRun />, 'skills': <SkillsRun />, 'projects': <ProjectsRun />, 'contact': <ContactRun />, 'education': <EducationRun />
            }[activeTab]}

          </div>
        </div>
      ) : (
        // Code Editor Mode
        <div className="font-mono text-sm p-4 h-full overflow-auto">
          <div className="flex">
            <div className="line-numbers text-gray-600 pr-4 text-right select-none">
              {lineNumbers.map(num => (
                <div key={num}>{num}</div>
              ))}
            </div>
            <div className="code-content flex-1">
            {{'about': <AboutCode />, 'skills': <SkillsCode />, 'projects': <ProjectsCode />, 'contact': <ContactCode />, 'education': <EducationCode />}[activeTab]}
              </div>
          </div>
        </div>
      )}

      {/* Run Button */}
      <div className="absolute bottom-4 right-4">
        <button 
          onClick={handleRunButtonClick}
          className="bg-[#007ACC] hover:bg-blue-600 text-white px-4 py-1 rounded flex items-center space-x-1 transition-colors duration-200"
          aria-label={isPreviewMode ? "Switch to Code View" : "Run Code"}
        >
          {isPreviewMode ? (
            <>
              <FaCode className="h-4 w-4" />
              <span>Code</span>
            </>
          ) : (
            <>
              <FaPlay className="h-4 w-4" />
              <span>Run</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default EditorContent;
