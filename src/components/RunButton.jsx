import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlay, FaCode } from 'react-icons/fa';

const RunButton = () => {
  const { 
    activeTab, 
    isPreviewMode, 
    setIsPreviewMode, 
    addTerminalMessage 
  } = useContext(AppContext);

  const handleRunButtonClick = () => {
    if (!activeTab) return;
    
    if (isPreviewMode) {
      // Switch back to code view
      setIsPreviewMode(false);
    } else {
      // Switch to preview mode
      setIsPreviewMode(true);
      addTerminalMessage(`$ run ${activeTab}`);
    }
  };

  if (!activeTab) return null;

  return (
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
  );
};

export default RunButton;
