import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '../components/common/EntityManager';
import { roomData } from '../data/mockData';

const EventPage = ({ data }) => {
    const { t } = useTranslation();

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' },
        {
            key: 'date',
            label: 'Date',
            render: (item) => formatDate(item.date)
        },
        { key: 'startTime', label: 'StartTime' },
        { key: 'endTime', label: 'EndTime' },
        {
            key: 'roomId',
            label: 'Room',
            render: (item) => {
                const room = roomData.find(r => r.id === item.roomId);
                return room ? room.name : `Room ${item.roomId}`;
            }
        }
    ];

    const formFields = [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' },
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'startTime', label: 'StartTime', type: 'time' },
        { name: 'endTime', label: 'EndTime', type: 'time' },
        {
            name: 'roomId',
            label: 'Room',
            type: 'select',
            options: roomData.map(room => ({
                value: room.id,
                label: room.name
            }))
        }
    ];

    const handleAdd = (formData) => {
        console.log('Added new event:', formData);
    };

    const handleEdit = (id, formData) => {
        console.log(`Edited event ${id}:`, formData);
    };

    const handleDelete = (id) => {
        console.log(`Deleted event ${id}`);
    };

    return (
        <EntityManager
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