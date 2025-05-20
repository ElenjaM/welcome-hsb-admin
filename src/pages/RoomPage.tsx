import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '@components/common/EntityManager';
import { buildingData } from '@data/mockData.ts';

interface Building {
    id: string | number;
    name: string;
}

interface Room {
    id: string | number;
    name: string;
    floor: number;
    type: string;
    buildingId: string | number;
}

interface Column {
    key: string;
    label: string;
    render?: (item: Room) => React.ReactNode;
}

interface FormField {
    name: string;
    label: string;
    type: string;
    options?: Array<{
        value: string | number;
        label: string;
    }>;
}

interface RoomPageProps {
    data: Room[];
}

const RoomPage: React.FC<RoomPageProps> = ({ data }) => {
    const { t } = useTranslation();

    const columns: Column[] = [
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

    const formFields: FormField[] = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'floor', label: 'Floor', type: 'number' },
        { name: 'type', label: 'Type', type: 'text' },
        {
            name: 'buildingId',
            label: 'Building',
            type: 'select',
            options: buildingData.map((building: { id: any; name: any; }) => ({
                value: building.id,
                label: building.name
            }))
        }
    ];

    const handleAdd = (formData: Omit<Room, 'id'>): void => {
        console.log('Added new room:', formData);
    };

    const handleEdit = (id: string | number, formData: Omit<Room, 'id'>): void => {
        console.log(`Edited room ${id}:`, formData);
    };

    const handleDelete = (id: string | number): void => {
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