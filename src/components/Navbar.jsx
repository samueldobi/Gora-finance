// import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('free');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
    <header className="sticky top-0 mb-3 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-0 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a className="flex-none text-xl font-semibold" href="#">
              <img src="/Icons/favicon.png" alt="Logo" className="w-10 h-auto" />
            </a>

            <div className="ms-1 sm:ms-2">
              {/* Templates Dropdown */}
              <div className="relative inline-flex">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="group relative flex justify-center items-center size-13 text-xs hover:bg-gray-100 focus:bg-gray-100"
                >
                    <img src="/Icons/dropdown-icon.png" alt="Logo" className="w-10 " />
                  {/* <span className="size-4">▼</span> */}
                  {/* The red animated button, kept it there to copy the animate ping style */}
                  {/* <span className="absolute -top-0.5 -end-0.5">
                    <span className="relative flex">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 bg-green-500 rounded-full"></span>
                    </span>
                  </span> */}
                  {/* The red animated button, kept it there to copy the animate ping style */}

                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-[450px] border border-gray-200 bg-white rounded-xl shadow-lg">
                    {/* Tab Headers */}
                    <div className="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b border-gray-200">
                      <nav className="flex gap-x-1">
                        <button 
                          onClick={() => setActiveTab('pro')}
                          className={`px-2 py-1.5 mb-2 text-sm rounded-lg ${activeTab === 'pro' ? 'text-gray-800' : 'text-gray-500'}`}
                        >
                          Pro
                        </button>
                        <button 
                          onClick={() => setActiveTab('free')}
                          className={`px-2 py-1.5 mb-2 text-sm rounded-lg ${activeTab === 'free' ? 'text-gray-800' : 'text-gray-500'}`}
                        >
                          Free
                        </button>
                      </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-3">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <a key={item} className="p-3 flex flex-col items-center gap-y-3 rounded-xl hover:bg-gray-100">
                            <img src="/api/placeholder/112/84" alt={`Template ${item}`} className="w-28 rounded-lg shadow" />
                            <p className="text-sm text-gray-800">Template {item}</p>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-3 flex justify-center items-center gap-2 border-t border-gray-200">
                      <a className="text-sm text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md" href="#">
                        Main page
                      </a>
                      <a className="text-sm text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md" href="#">
                        Examples
                      </a>
                      <a className="text-sm text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md" href="#">
                        Templates
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200"
            >
              {isMobileMenuOpen ? '×' : '☰'}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800" href="#">
              Home
            </a>
            <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800" href="#">
              Projects
            </a>
            <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800" href="#">
              Work
            </a>
            <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800" href="#">
              Articles
            </a>
          </div>
        </div>
      </nav>
    </header>
  


    </>
  )
}

export default Navbar