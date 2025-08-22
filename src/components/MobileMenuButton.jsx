import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaBars } from 'react-icons/fa';

const MobileMenuButton = () => {
  const { isMobileSidebarOpen, toggleMobileSidebar } = useContext(AppContext);

  return (
    <div 
      className={`
        fixed top-2 left-2 z-20 md:hidden
        transition-opacity duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <button 
        onClick={toggleMobileSidebar}
        className="w-8 h-8 bg-[#1E1E1E] border border-[#474747] rounded flex items-center justify-center text-gray-400 hover:text-white"
        aria-label="Open sidebar"
      >
        <FaBars className="h-5 w-5" />
      </button>
    </div>
  );
};

export default MobileMenuButton;
