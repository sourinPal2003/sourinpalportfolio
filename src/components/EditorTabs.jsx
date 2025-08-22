import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimes } from 'react-icons/fa';

const EditorTabs = () => {
  const { openedTabs, activeTab, setActiveTab, closeTab } = useContext(AppContext);

  const handleTabClick = (fileName) => {
    setActiveTab(fileName);
  };

  const handleCloseTab = (e, fileName) => {
    e.stopPropagation();
    closeTab(fileName);
  };

  if (openedTabs.length === 0) {
    return <div className="bg-[#1E1E1E] border-b border-[#474747] h-9"></div>;
  }

  return (
    <div className="bg-[#1E1E1E] border-b border-[#474747] overflow-x-auto whitespace-nowrap">
      {openedTabs.map((fileName) => (
        <div 
          key={fileName}
          className={`inline-flex items-center h-9 px-3 border-r border-[#474747] text-sm cursor-pointer transition-colors ${
            activeTab === fileName ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D] hover:bg-[#1E1E1E]'
          }`}
          onClick={() => handleTabClick(fileName)}
        >
          <span className="text-gray-300">{fileName}</span>
          <button 
            className="ml-2 text-gray-500 hover:text-white focus:outline-none"
            onClick={(e) => handleCloseTab(e, fileName)}
            aria-label={`Close ${fileName}`}
          >
            <FaTimes className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default EditorTabs;
