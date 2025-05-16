import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

interface NavItem {
  id: string;
  path: string;
  name: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  navItems: NavItem[];
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
                                           navItems,
                                           sidebarOpen,
                                           toggleSidebar,
                                         }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>("dashboard");

  useEffect(() => {
    const path = location.pathname;
    const currentItem = navItems.find(item => item.path === path);
    if (currentItem) {
      setActiveTab(currentItem.id);
    } else {
      setActiveTab("dashboard");
    }
  }, [location.pathname, navItems]);

  const handleNavigation = (e: React.MouseEvent, id: string, path: string) => {
    e.preventDefault();
    setActiveTab(id);
    navigate(path);
  };

  return (
      <div
          className={`${
              sidebarOpen ? "w-64" : "w-20"
          } bg-indigo-800 text-white transition-all duration-300 ease-in-out h-full`}
      >
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">AdminPanel</h1>}
          <button
              onClick={toggleSidebar}
              className="p-2 rounded hover:bg-indigo-700"
          >
            <Menu size={20} />
          </button>
        </div>
        <nav className="mt-8">
          <ul>
            {navItems.map((item) => (
                <li key={item.id} className="mb-2">
                  <a
                      href={item.path}
                      onClick={(e) => handleNavigation(e, item.id, item.path)}
                      className={`flex items-center w-full p-3 ${
                          activeTab === item.id
                              ? "bg-indigo-700"
                              : "hover:bg-indigo-700"
                      } rounded-lg transition-colors`}
                  >
                    <span className="mr-4">{item.icon}</span>
                    {sidebarOpen && <span>{item.name}</span>}
                  </a>
                </li>
            ))}
          </ul>
        </nav>
      </div>
  );
};

export default Sidebar;