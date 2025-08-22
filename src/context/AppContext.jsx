import { createContext, useState, useCallback } from 'react';
import aboutData from '../data/about.json';
import skillsData from '../data/skills.json';
import projectsData from '../data/projects.json';
import experienceData from '../data/experience.json';
import contactData from '../data/contact.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // State for sidebar management
  const [activeSidebar, setActiveSidebar] = useState('explorer');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // State for editor
  const [fileData, setFileData] = useState({});
  const [openedTabs, setOpenedTabs] = useState(['about', 'skills', 'projects', 'education', 'contact']);
  const [activeTab, setActiveTab] = useState('about');
  const [isPreviewMode, setIsPreviewMode] = useState(true);
  
  // State for terminal
  const [terminalHistory, setTerminalHistory] = useState([
    { message: '$ npm run dev', isError: false },
    { message: '[INFO] Portfolio launched successfully at localhost:3000', isError: false },
    { message: 'Ready for connections...', isError: false },
    { message: 'portfolio@1.1.0', isError: false }
  ]);

  // Load file data
  const loadFileData = useCallback(() => {
    setFileData({
      'about': aboutData,
      'skills': skillsData,
      'projects': projectsData,
      'education': experienceData,
      'contact': contactData
    });
  }, []);

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Open a file in the editor
  const openFile = (fileName) => {
    if (!openedTabs.includes(fileName)) {
      setOpenedTabs([...openedTabs, fileName]);
    }
    setActiveTab(fileName);
    setIsPreviewMode(false);
  };

  // Close a tab
  const closeTab = (fileName) => {
    const newTabs = openedTabs.filter(tab => tab !== fileName);
    setOpenedTabs(newTabs);
    
    // If we closed the active tab
    if (activeTab === fileName) {
      if (newTabs.length > 0) {
        // Set the last tab as active
        setActiveTab(newTabs[newTabs.length - 1]);
      } else {
        // No tabs left
        setActiveTab(null);
        setIsPreviewMode(false);
      }
    }
  };

  // Add message to terminal
  const addTerminalMessage = (message, isError = false) => {
    setTerminalHistory(prev => [...prev, { message, isError }]);
  };

  return (
    <AppContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        isMobileSidebarOpen,
        toggleMobileSidebar,
        fileData,
        loadFileData,
        openedTabs,
        activeTab,
        setActiveTab,
        isPreviewMode,
        setIsPreviewMode,
        openFile,
        closeTab,
        terminalHistory,
        setTerminalHistory,
        addTerminalMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
