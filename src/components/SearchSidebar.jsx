import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { FaFileAlt } from 'react-icons/fa';

const SearchSidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { openFile, addTerminalMessage, fileData } = useContext(AppContext);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = Object.keys(fileData).filter(fileName => 
      fileName.toLowerCase().includes(query) ||
      fileData[fileName].code.toLowerCase().includes(query)
    );

    setSearchResults(results);
  }, [searchQuery, fileData]);

  const handleFileClick = (fileName) => {
    openFile(fileName);
    addTerminalMessage(`$ open ${fileName}`);
  };

  return (
    <div className="w-56 bg-[#252526] border-r border-[#474747] overflow-y-auto">
      <div className="px-4 py-2 font-bold text-sm uppercase tracking-wide text-gray-400">Search</div>
      <div className="p-2">
        <input 
          type="text" 
          placeholder="Search files..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-1 bg-[#3C3C3C] text-white border border-[#3C3C3C] rounded focus:outline-none focus:border-[#007ACC] text-sm"
        />
      </div>
      <div className="mt-2">
        {searchResults.length > 0 ? (
          searchResults.map((fileName) => (
            <div 
              key={fileName}
              className="py-1 px-6 hover:bg-[#2A2D2E] cursor-pointer transition-colors duration-100"
              onClick={() => handleFileClick(fileName)}
            >
              <div className="flex items-center">
                <FaFileAlt className="h-4 w-4 mr-2 text-yellow-400" />
                {fileName}
              </div>
            </div>
          ))
        ) : searchQuery.trim() !== '' ? (
          <div className="px-6 py-2 text-sm text-gray-400">No results found</div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchSidebar;
