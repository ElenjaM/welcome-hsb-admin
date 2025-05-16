import React from "react";
import { useTranslation } from "react-i18next";
import EntityManager from "@components/common/EntityManager.tsx";
import { roomData } from "@data/mockData";

// Define interfaces for our data types
interface Room {
  id: string | number;
  name: string;
}

interface Event {
  id: string | number;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  roomId: string | number;
}

interface EventPageProps {
  data: Event[];
}

const EventPage: React.FC<EventPageProps> = ({ data }) => {
  useTranslation();

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    {
      key: "date",
      label: "Date",
      render: (item: Event) => formatDate(item.date),
    },
    { key: "startTime", label: "StartTime" },
    { key: "endTime", label: "EndTime" },
    {
      key: "roomId",
      label: "Room",
      render: (item: Event) => {
        const room = roomData.find((r: Room) => r.id === item.roomId);
        return room ? room.name : `Room ${item.roomId}`;
      },
    },
  ];

  const formFields = [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "startTime", label: "StartTime", type: "time" },
    { name: "endTime", label: "EndTime", type: "time" },
    {
      name: "roomId",
      label: "Room",
      type: "select",
      options: roomData.map((room: Room) => ({
        value: room.id,
        label: room.name,
      })),
    },
  ];

  const handleAdd = (formData: Omit<Event, "id">): void => {
    console.log("Added new event:", formData);
  };

  const handleEdit = (id: string | number, formData: Partial<Event>): void => {
    console.log(`Edited event ${id}:`, formData);
  };

  const handleDelete = (id: string | number): void => {
    console.log(`Deleted event ${id}`);
  };

  return (
    <EntityManager<Event>
      entityName="Event"
      data={data}
      columns={columns}
      formFields={formFields}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default EventPage;
