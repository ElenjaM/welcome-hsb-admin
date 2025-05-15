import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '../components/common/EntityManager';

const DepartmentPage = ({ data }) => {
    const { t } = useTranslation();

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' }
    ];

    const formFields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' }
    ];

    const handleAdd = (formData) => {
        console.log('Added new department:', formData);
    };

    const handleEdit = (id, formData) => {
        console.log(`Edited department ${id}:`, formData);
    };

    const handleDelete = (id) => {
        console.log(`Deleted department ${id}`);
    };

    return (
        <EntityManager
            entityName="Department"
            data={data}
            columns={columns}
            formFields={formFields}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};

export default DepartmentPage;