import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaFileCode } from "react-icons/fa";

const ExplorerSidebar = () => {
  const { openFile, addTerminalMessage } = useContext(AppContext);
  
  const files = [
    'about',
    'skills',
    'projects',
    'education',
    'contact'
  ];

  const handleFileClick = (fileName) => {
    openFile(fileName);
    addTerminalMessage(`$ open ${fileName}`);

  };

  return (
    <div className="w-56 bg-[#252526] border-r border-[#474747] overflow-y-auto">
      <div className="px-4 py-2 font-bold text-sm uppercase tracking-wide text-gray-400">Explorer</div>
      <div className="mt-2">
        <div className="px-4 py-1 text-sm font-semibold text-gray-300">PORTFOLIO</div>
        <div className="file-list">
          {files.map((file) => (
            <div 
              key={file}
              className="file py-1 px-6 hover:bg-[#2A2D2E] cursor-pointer transition-colors duration-100"
              onClick={() => handleFileClick(file)}
            >
              <div className="flex items-center">
                <FaFileCode className="h-4 w-4 mr-2 text-blue-400" />
                {file}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorerSidebar;
