import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '../components/common/EntityManager';

const BuildingPage = ({ data }) => {
    const { t } = useTranslation();

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'address', label: 'Address' }
    ];

    const formFields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'address', label: 'Address', type: 'text' }
    ];

    const handleAdd = (formData) => {
        console.log('Added new building:', formData);
    };

    const handleEdit = (id, formData) => {
        console.log(`Edited building ${id}:`, formData);
    };

    const handleDelete = (id) => {
        console.log(`Deleted building ${id}`);
    };

    return (
        <EntityManager
            entityName="Building"
            data={data}
            columns={columns}
            formFields={formFields}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};

export default BuildingPage;