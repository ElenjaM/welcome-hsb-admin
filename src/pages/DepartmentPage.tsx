import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '@components/common/EntityManager';

interface Department {
    id: string | number;
    name: string;
    description: string;
}

interface Column {
    key: string;
    label: string;
}

interface FormField {
    name: string;
    label: string;
    type: string;
}

interface DepartmentPageProps {
    data: Department[];
}

const DepartmentPage: React.FC<DepartmentPageProps> = ({ data }) => {
    useTranslation();

    const columns: Column[] = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' }
    ];

    const formFields: FormField[] = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' }
    ];

    const handleAdd = (formData: Omit<Department, 'id'>): void => {
        console.log('Added new department:', formData);
    };

    const handleEdit = (id: string | number, formData: Omit<Department, 'id'>): void => {
        console.log(`Edited department ${id}:`, formData);
    };

    const handleDelete = (id: string | number): void => {
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