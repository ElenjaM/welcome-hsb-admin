import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '../components/common/EntityManager';
import { roomData, universityMemberData } from '../data/mockData';

const RoomUsagePage = ({ data }) => {
    const { t } = useTranslation();

    const columns = [
        {
            key: 'roomId',
            label: 'Room',
            render: (item) => {
                const room = roomData.find(r => r.id === item.roomId);
                return room ? room.name : `Room ${item.roomId}`;
            }
        },
        {
            key: 'memberId',
            label: 'Member',
            render: (item) => {
                const member = universityMemberData.find(m => m.id === item.memberId);
                return member ? member.name : `Member ${item.memberId}`;
            }
        }
    ];

    const formFields = [
        {
            name: 'roomId',
            label: 'Room',
            type: 'select',
            options: roomData.map(room => ({
                value: room.id,
                label: room.name
            }))
        },
        {
            name: 'memberId',
            label: 'Member',
            type: 'select',
            options: universityMemberData.map(member => ({
                value: member.id,
                label: member.name
            }))
        }
    ];

    const handleAdd = (formData) => {
        console.log('Added new room usage:', formData);
    };

    const handleEdit = (id, formData) => {
        console.log(`Edited room usage ${id}:`, formData);
    };

    const handleDelete = (id) => {
        console.log(`Deleted room usage ${id}`);
    };

    return (
        <EntityManager
            entityName="RoomUsage"
            data={data}
            columns={columns}
            formFields={formFields}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};

export default RoomUsagePage;