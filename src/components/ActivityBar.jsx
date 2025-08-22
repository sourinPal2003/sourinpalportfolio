import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { 
  FaFolder, 
  FaSearch, 
  FaGithub, 
  FaLinkedin, 
  FaCog,
  FaChevronLeft 
} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
//import { useLocation } from 'wouter';

const ActivityBar = () => {
  const { activeSidebar, setActiveSidebar, isMobileSidebarOpen, toggleMobileSidebar } = useContext(AppContext);
  //const [, setLocation] = useLocation();

  const toggleSidebar = (sidebarId) => {
    if (sidebarId === activeSidebar) {
      setActiveSidebar(null);
    } else {
      setActiveSidebar(sidebarId);
    }
  };

  const handleSettings = () => {
//    setLocation('/admin');
    alert("⚠️ You are not an admin. Please contact the site administrator for access.");
    console.log("/admin");
  };

  const isActive = (sidebarId) => activeSidebar === sidebarId;

  return (
    <div className="bg-[#333333] w-12 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center pt-2">
        {/* Mobile close button - only visible on mobile when sidebar is open */}
        <button
          onClick={toggleMobileSidebar}
          className={`
            w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1E1E1E] md:hidden
            transition-all duration-300 ease-in-out
            ${isMobileSidebarOpen ? 'opacity-100 max-h-12' : 'opacity-0 max-h-0 overflow-hidden pointer-events-none'}
          `}
          aria-label="Close sidebar"
        >
          <FaChevronLeft className="h-4 w-4" />
        </button>
        
        <button
          onClick={() => toggleSidebar('explorer')}
          className={`w-12 h-12 flex items-center justify-center hover:text-white hover:bg-[#1E1E1E] ${
            isActive('explorer')
              ? 'text-white bg-[#1E1E1E] border-l-2 border-[#007ACC]'
              : 'text-gray-400'
          }`}
          aria-label="Explorer"
        >
          <FaFolder className="h-5 w-5" />
        </button>

        <button
          onClick={() => toggleSidebar('search')}
          className={`w-12 h-12 flex items-center justify-center hover:text-white hover:bg-[#1E1E1E] ${
            isActive('search')
              ? 'text-white bg-[#1E1E1E] border-l-2 border-[#007ACC]'
              : 'text-gray-400'
          }`}
          aria-label="Search"
        >
          <FaSearch className="h-5 w-5" />
        </button>

        <button
          onClick={() => toggleSidebar('github')}
          className={`w-12 h-12 flex items-center justify-center hover:text-white hover:bg-[#1E1E1E] ${
            isActive('github')
              ? 'text-white bg-[#1E1E1E] border-l-2 border-[#007ACC]'
              : 'text-gray-400'
          }`}
          aria-label="GitHub"
        >
          <FaGithub className="h-5 w-5" />
        </button>

        <button
          onClick={() => toggleSidebar('linkedin')}
          className={`w-12 h-12 flex items-center justify-center hover:text-white hover:bg-[#1E1E1E] ${
            isActive('linkedin')
              ? 'text-white bg-[#1E1E1E] border-l-2 border-[#007ACC]'
              : 'text-gray-400'
          }`}
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-5 w-5" />
        </button>

        <button
          onClick={() => toggleSidebar('leetcode')}
          className={`w-12 h-12 flex items-center justify-center hover:text-white hover:bg-[#1E1E1E] ${
            isActive('leetcode')
              ? 'text-white bg-[#1E1E1E] border-l-2 border-[#007ACC]'
              : 'text-gray-400'
          }`}
          aria-label="leetcode"
        >
          <SiLeetcode className="h-5 w-5" />
        </button>
        
        <button
          onClick={() => toggleSidebar('pdf-resume')}
          className={`w-12 h-12 flex items-center justify-center hover:text-white hover:bg-[#1E1E1E] ${
            isActive('pdf-resume')
              ? 'text-white bg-[#1E1E1E] border-l-2 border-[#007ACC]'
              : 'text-gray-400'
          }`}
          aria-label="pdf-resume"
        >
          <FaFilePdf className="h-5 w-5" />
        </button>
        
      </div>

      <div className="mb-4">
        <button
          onClick={handleSettings}
          className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1E1E1E]"
          aria-label="Settings"
        >
          <FaCog className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;
