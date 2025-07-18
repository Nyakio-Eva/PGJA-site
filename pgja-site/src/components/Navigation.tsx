import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", hasDropdown: false },
  { label: "Discover Who We Are", hasDropdown: true },
  { label: "Discover Pathways", hasDropdown: true },
  { label: "Discover Student Life", hasDropdown: true },
  { label: "Discover Talents", hasDropdown: true },
  { label: "Join Us", hasDropdown: true },
  { label: "Discover Friendly Fees", hasDropdown: true },
  { label: "Discover Our Location", hasDropdown: false },
  { label: "Get Access", hasDropdown: true },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <nav className="bg-[#f5f3f0] text-gray-800 shadow-lg">
      <div className="max-w-9xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-bold text-base text-gray-900 ml-4">
          <img src="/pgjalogo.webp" alt="logo" className="object-contain h-10 w-10"/>
          Pioneer Girls Junior Academy
        </div>

        {/* Nav links container */}
        <div className="flex items-center h-full">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative h-4 flex items-center border-l border-gray-400 first:border-l-0 last:border-r"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="px-4 py-2 hover:bg-[#ede9e4] cursor-pointer h-full flex items-center transition-colors duration-200">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-bold whitespace-nowrap">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </div>
              </div>

              {/* Dropdown */}
              {activeDropdown === index && item.hasDropdown && (
                <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-gray-200 min-w-48 z-50 rounded-sm">
                  <div className="p-4">
                    <p className="text-sm text-gray-700">Dropdown content for {item.label}</p>
                    <div className="mt-2 space-y-1">
                      <a href="#" className="block py-1 px-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Option 1</a>
                      <a href="#" className="block py-1 px-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Option 2</a>
                      <a href="#" className="block py-1 px-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Option 3</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}