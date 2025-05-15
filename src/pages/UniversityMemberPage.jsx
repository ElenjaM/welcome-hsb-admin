import React from 'react';
import { useTranslation } from 'react-i18next';
import EntityManager from '../components/common/EntityManager';
import { departmentData } from '../data/mockData';

const UniversityMemberPage = ({ data }) => {
    const { t } = useTranslation();

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        {
            key: 'departmentId',
            label: 'Department',
            render: (item) => {
                const department = departmentData.find(
                    dep => dep.id === item.departmentId
                );
                return department ? department.name : 'Unknown';
            }
        }
    ];

    const formFields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        {
            name: 'departmentId',
            label: 'Department',
            type: 'select',
            options: departmentData.map(dep => ({
                value: dep.id,
                label: dep.name
            }))
        }
    ];

    const handleAdd = (formData) => {
        console.log('Added new university member:', formData);
    };

    const handleEdit = (id, formData) => {
        console.log(`Edited university member ${id}:`, formData);
    };

    const handleDelete = (id) => {
        console.log(`Deleted university member ${id}`);
    };

    return (
        <EntityManager
            entityName="UniversityMember"
            data={data}
            columns={columns}
            formFields={formFields}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};

export default UniversityMemberPage;