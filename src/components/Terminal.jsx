import { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinus } from 'react-icons/fa';
import { FaArrowsUpDown } from "react-icons/fa6";
import { useTerminalCommands } from '../utils/terminalCommands';

const Terminal = () => {
  const {terminalHistory,setTerminalHistory, addTerminalMessage} = useContext(AppContext);
  
  const [inputValue, setInputValue] = useState('');
  const [terminalHeight, setTerminalHeight] = useState(160);
  const terminalRef = useRef(null);
  const contentRef = useRef(null);
  const headerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Auto scroll to the bottom when terminal history changes
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Initialize dragging functionality
  useEffect(() => {
    let isDragging = false;
    let startY, startHeight;

    const handleMouseDown = (e) => {
      // Check if the click is on the terminal header
      const headerElement = headerRef.current;
      if (headerElement && headerElement.contains(e.target)) {
        isDragging = true;
        startY = e.clientY;
        startHeight = terminalRef.current ? terminalRef.current.offsetHeight : 160;
        document.body.style.cursor = 'ns-resize';
        e.preventDefault();
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      // Calculate new height (moving up makes terminal larger, down makes smaller)
      const deltaY = startY - e.clientY;
      const newHeight = Math.max(40, Math.min(600, startHeight + deltaY));
      setTerminalHeight(newHeight);
    };

    const handleMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        document.body.style.cursor = 'default';
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  // Create a local version of addTerminalMessage


  const executeCommand = useTerminalCommands();

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (inputValue.trim()) {
        // Add the command to terminal history first
        addTerminalMessage(`$ ${inputValue}`);
        
        // Execute the command using our hook
        const result = executeCommand(inputValue.trim());
        
        // Handle the clear action specially
        if (result.action === 'clear') {
          // Reset the terminal to initial state via the context
          const initialMessages = [
            { message: 'portfolio@1.0.0', isError: false }
          ];
          
          // Replace the terminal history with initial messages
          setTerminalHistory([...initialMessages]);
        }
        
        // Display any returned messages
        if (result.error) {
          addTerminalMessage(result.message, true);
        } else if (result.message && result.action !== 'clear') {
          addTerminalMessage(result.message);
        }
        
        setInputValue('');
      }
    }
  };

  const toggleTerminalSize = () => {
    if (terminalHeight <= 40) {
      setTerminalHeight(160);
    } else {
      setTerminalHeight(40);
    }
  };

  const contentHeight = terminalHeight > 40 ? terminalHeight - 28 : 0;

  return (
    <div 
      ref={terminalRef} 
      className="bg-[#1E1E1E] border-t border-[#474747] overflow-hidden"
      style={{ height: `${terminalHeight}px` }}
    >
      <div 
        id="terminal-header" 
        ref={headerRef}
        className="bg-[#252526] px-4 py-1 cursor-pointer border-b border-[#474747]"
      >
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">TERMINAL</div>
          <div className="flex space-x-2">
            <button 
              onClick={toggleTerminalSize}
              className="text-gray-400 hover:text-white"
              aria-label="Minimize Terminal"
            >
              <FaArrowsUpDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
      
      <div 
        ref={contentRef}
        onClick={handleTerminalClick}
        className="font-mono text-sm p-2 overflow-auto bg-[#1E1E1E] text-gray-300"
        style={{ height: `${contentHeight}px`, display: contentHeight > 0 ? 'block' : 'none' }}
      >
        {terminalHistory.map((item, index) => (
          <div key={index} className={`mb-1 ${item.isError ? 'text-red-500' : ''}`}>
            {item.message}
          </div>
        ))}
        <div className="flex">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className="flex-1 bg-transparent text-gray-300 outline-none"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
