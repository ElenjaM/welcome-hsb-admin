import {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "@/i18n/i18n";
import "@i18n/i18n";

// Layout components
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

// Page components
import Dashboard from "./pages/Dashboard";
import DepartmentPage from "./pages/DepartmentPage";
import UniversityMemberPage from "./pages/UniversityMemberPage";
import EventPage from "./pages/EventPage";
import RoomPage from "./pages/RoomPage";
import BuildingPage from "./pages/BuildingPage";
import RoomUsagePage from "./pages/RoomUsagePage";
import SettingsPage from "./pages/SettingsPage";

import {
    Home,
    Building,
    Users,
    Calendar,
    DoorOpen,
    MapPin,
    BookOpen,
    Settings
} from "lucide-react";

// Mock data
import {
    departmentData,
    universityMemberData,
    eventData,
    roomData,
    buildingData,
    roomUsageData,
} from "./data/mockData";

const App = () => {
    const {t} = useTranslation();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Navigation items based on ERD entities
    const navItems = [
        {name: t("sidebar.dashboard"), icon: <Home size={20}/>, path: "/", id: "dashboard"},
        {
            name: t("sidebar.department"),
            icon: <Building size={20}/>,
            path: "/department",
            id: "department",
        },
        {
            name: t("sidebar.universityMember"),
            icon: <Users size={20}/>,
            path: "/university-member",
            id: "universityMember",
        },
        {name: t("sidebar.event"), icon: <Calendar size={20}/>, path: "/event", id: "event"},
        {name: t("sidebar.room"), icon: <DoorOpen size={20}/>, path: "/room", id: "room"},
        {
            name: t("sidebar.building"),
            icon: <MapPin size={20}/>,
            path: "/building",
            id: "building",
        },
        {
            name: t("sidebar.roomUsage"),
            icon: <BookOpen size={20}/>,
            path: "/room-usage",
            id: "roomUsage",
        },
        {
            name: t("sidebar.settings"),
            icon: <Settings size={20}/>,
            path: "/settings",
            id: "settings",
        },
    ];

    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <div className="flex h-screen bg-gray-100">
                    <Sidebar
                        navItems={navItems}
                        sidebarOpen={sidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>

                        <main className="flex-1 overflow-y-auto p-6">
                            <Routes>
                                <Route path="/" element={<Dashboard/>}/>
                                <Route
                                    path="/department"
                                    element={<DepartmentPage data={departmentData}/>}
                                />
                                <Route
                                    path="/university-member"
                                    element={<UniversityMemberPage data={universityMemberData}/>}
                                />
                                <Route path="/event" element={<EventPage data={eventData}/>}/>
                                <Route path="/room" element={<RoomPage data={roomData}/>}/>
                                <Route
                                    path="/building"
                                    element={<BuildingPage data={buildingData}/>}
                                />
                                <Route
                                    path="/room-usage"
                                    element={<RoomUsagePage data={roomUsageData}/>}
                                />
                                <Route path="/settings" element={<SettingsPage/>}/>
                                <Route path="*" element={<Navigate to="/"/>}/>
                            </Routes>
                        </main>
                    </div>
                </div>
            </Router>
        </I18nextProvider>
    );
};

export default App;
