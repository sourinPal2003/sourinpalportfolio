import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ActivityBar from '../components/ActivityBar';
import ExplorerSidebar from '../components/ExplorerSidebar';
import SearchSidebar from '../components/SearchSidebar';
import SocialPanel from '../components/SocialPanel';
import EditorTabs from '../components/EditorTabs';
import EditorContent from '../components/EditorContent';
import Terminal from '../components/Terminal';
import MobileMenuButton from '../components/MobileMenuButton';

const Home = () => {
  const { 
    activeSidebar, 
    isMobileSidebarOpen,
    activeTab,
    loadFileData
  } = useContext(AppContext);

  // Load file data on component mount
  useEffect(() => {
    loadFileData();
  }, [loadFileData]);

  // Determine which sidebar to show
  const renderSidebar = () => {
    if (!activeSidebar) return null;

    switch (activeSidebar) {
      case 'explorer':
        return <ExplorerSidebar />;
      case 'search':
        return <SearchSidebar />;
      case 'github':
      case 'linkedin':
      case 'leetcode':
      case 'pdf-resume':
        return <SocialPanel type={activeSidebar} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#1E1E1E] text-[#CCCCCC] h-screen overflow-hidden font-mono">
      <div className="flex h-screen">
        {/* Left sidebar section (Activity Bar + Sidebar) */}
        <div 
          className={`
            md:flex fixed md:relative w-[280px] md:w-auto z-10 h-full bg-[#1E1E1E]
            transform transition-transform duration-300 ease-in-out
            ${isMobileSidebarOpen ? 'flex translate-x-0' : '-translate-x-full md:translate-x-0 hidden md:flex'}
          `}
        >
          {/* Activity Bar - Always visible even on mobile */}
          <div className="h-full">
            <ActivityBar />
          </div>

          {/* Sidebar panel */}
          <div className="h-full">
            {renderSidebar()}
          </div>
        </div>

        {/* Main Content Area - Adjusted for mobile and desktop */}
        <div className={`flex-1 flex flex-col overflow-hidden w-full ${isMobileSidebarOpen ? 'md:ml-0' : 'ml-0'}`}>
          <EditorTabs />
          <EditorContent />
          <Terminal />
        </div>
      </div>

      {/* Mobile Menu Button - Always visible on mobile */}
      <MobileMenuButton />
    </div>
  );
};

export default Home;
