import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Bell,
  User,
  Search,
  ChevronDown,
  LogOut,
  Settings,
} from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, toggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center rounded-md bg-gray-100 p-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder={t("header.search")}
            className="bg-transparent border-none outline-none ml-2 w-64"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="p-2 rounded-md hover:bg-gray-100 flex items-center text-sm"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {i18n.language === "de" ? "🇩🇪 DE" : "🇬🇧 EN"}
              <ChevronDown size={16} className="ml-1" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-20">
                <button
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => changeLanguage("de")}
                >
                  🇩🇪 Deutsch
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => changeLanguage("en")}
                >
                  🇬🇧 English
                </button>
              </div>
            )}
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </button>
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                <User size={16} />
              </div>
              <div className="flex items-center">
                <span className="font-medium">Admin User</span>
                <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <a
                  href="#profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <User size={16} className="mr-2" />
                  {t("header.profile")}
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <Settings size={16} className="mr-2" />
                  {t("header.settings")}
                </a>
                <a
                  href="#logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut size={16} className="mr-2" />
                  {t("header.logout")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
