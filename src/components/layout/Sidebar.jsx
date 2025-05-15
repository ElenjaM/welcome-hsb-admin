import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';

const Sidebar = ({ navItems, sidebarOpen, toggleSidebar }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = React.useState('dashboard');

    return (
        <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-indigo-800 text-white transition-all duration-300 ease-in-out`}>
            <div className="p-4 flex items-center justify-between">
                {sidebarOpen && <h1 className="text-xl font-bold">AdminPanel</h1>}
                <button onClick={toggleSidebar} className="p-2 rounded hover:bg-indigo-700">
                    <Menu size={20} />
                </button>
            </div>
            <nav className="mt-8">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id} className="mb-2">
                            <a
                                href={item.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(item.id);
                                    // Ein echter Router würde hier zur angegebenen Seite navigieren
                                }}
                                className={`flex items-center w-full p-3 ${
                                    activeTab === item.id ? 'bg-indigo-700' : 'hover:bg-indigo-700'
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