import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '../components/common/EntityManager';
import { buildingData } from '../data/mockData';

const RoomPage = ({ data }) => {
    const { t } = useTranslation();

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'floor', label: 'Floor' },
        { key: 'type', label: 'Type' },
        {
            key: 'buildingId',
            label: 'Building',
            render: (item) => {
                const building = buildingData.find(b => b.id === item.buildingId);
                return building ? building.name : `Building ${item.buildingId}`;
            }
        }
    ];

    const formFields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'floor', label: 'Floor', type: 'number' },
        { name: 'type', label: 'Type', type: 'text' },
        {
            name: 'buildingId',
            label: 'Building',
            type: 'select',
            options: buildingData.map(building => ({
                value: building.id,
                label: building.name
            }))
        }
    ];

    const handleAdd = (formData) => {
        console.log('Added new room:', formData);
    };

    const handleEdit = (id, formData) => {
        console.log(`Edited room ${id}:`, formData);
    };

    const handleDelete = (id) => {
        console.log(`Deleted room ${id}`);
    };

    return (
        <EntityManager
            entityName="Room"
            data={data}
            columns={columns}
            formFields={formFields}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};

export default RoomPage;