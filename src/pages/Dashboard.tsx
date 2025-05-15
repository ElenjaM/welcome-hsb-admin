import React, { type JSX } from "react";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Users, Calendar, DoorOpen, Building } from "lucide-react";
import { eventData } from "@data/mockData.ts";

interface StatCard {
  id: string;
  value: number;
  change: string;
  icon: JSX.Element;
}

interface ChartData {
  name: string;
  value: number;
}

interface Event {
  id: string | number;
  title: string;
  description: string;
  date: string;
  startTime: string;
  roomId: string | number;
}

const statCards: StatCard[] = [
  {
    id: "departments",
    value: 5,
    change: "+20%",
    icon: <Building size={20} className="text-blue-600" />,
  },
  {
    id: "universityMembers",
    value: 126,
    change: "+5%",
    icon: <Users size={20} className="text-green-600" />,
  },
  {
    id: "events",
    value: 48,
    change: "+12%",
    icon: <Calendar size={20} className="text-purple-600" />,
  },
  {
    id: "rooms",
    value: 25,
    change: "+0%",
    icon: <DoorOpen size={20} className="text-orange-600" />,
  },
];

const monthlyEventData: ChartData[] = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 25 },
  { name: "Apr", value: 30 },
  { name: "May", value: 40 },
  { name: "Jun", value: 35 },
];

const roomUsageData: ChartData[] = [
  { name: "Lecture Hall", value: 40 },
  { name: "Seminar Room", value: 30 },
  { name: "Lab", value: 20 },
  { name: "Office", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const sortedEvents = [...eventData].sort((a: Event, b: Event) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {t("dashboard.title")}
        </h1>
        <p className="text-gray-600">{t("dashboard.welcome")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statCards.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-600 text-sm font-medium">
                {t(`dashboard.statsCards.${stat.id}`)}
              </h2>
              <div className="p-2 rounded-lg bg-gray-100">{stat.icon}</div>
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <span
                className={`ml-2 text-sm ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-800 text-lg font-medium mb-4">
            {t("dashboard.events")}
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyEventData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-gray-800 text-lg font-medium mb-4">
            {t("dashboard.rooms")}
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roomUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({
                    name,
                    percent,
                  }: {
                    name: string;
                    percent: number;
                  }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {roomUsageData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800 text-lg font-medium">
            {t("dashboard.recentEvents")}
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            {t("common.search")}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("event.title")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("event.date")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("event.startTime")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("event.room")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedEvents.slice(0, 5).map((event: Event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {event.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {event.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.startTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Room {event.roomId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
