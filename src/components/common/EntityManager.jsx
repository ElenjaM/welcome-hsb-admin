import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PencilIcon, TrashIcon, PlusIcon, XIcon } from 'lucide-react';

const EntityManager = ({
                           entityName,
                           data,
                           columns,
                           formFields,
                           onAdd,
                           onEdit,
                           onDelete
                       }) => {
    const { t } = useTranslation();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({});
    const [filterText, setFilterText] = useState('');

    const initForm = (item = null) => {
        if (item) {
            setFormData({ ...item });
            setEditingId(item.id);
        } else {
            const emptyForm = {};
            formFields.forEach(field => {
                emptyForm[field.name] = '';
            });
            setFormData(emptyForm);
            setEditingId(null);
        }
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setEditingId(null);
    };

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        if (editingId) {
            onEdit && onEdit(editingId, formData);
        } else {
            onAdd && onAdd(formData);
        }
        closeForm();
    };

    const confirmDelete = (id) => {
        if (window.confirm(t(`${entityName.toLowerCase()}.deleteConfirm`))) {
            onDelete && onDelete(id);
        }
    };

    const filteredData = data.filter(item => {
        return Object.values(item).some(
            value => value && value.toString().toLowerCase().includes(filterText.toLowerCase())
        );
    });

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {t(`${entityName.toLowerCase()}.title`)}
                    </h1>
                    <button
                        onClick={() => initForm()}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center"
                    >
                        <PlusIcon size={16} className="mr-2" />
                        {t(`${entityName.toLowerCase()}.createNew`)}
                    </button>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder={t('common.search')}
                        className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {t(`${entityName.toLowerCase()}.${column.key.toLowerCase()}`)}
                                </th>
                            ))}
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {t('common.actions')}
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item.id}>
                                    {columns.map((column) => (
                                        <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                                            {column.render ? column.render(item) : item[column.key]}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button
                                            onClick={() => initForm(item)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                                        >
                                            <PencilIcon size={16} />
                                        </button>
                                        <button
                                            onClick={() => confirmDelete(item.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <TrashIcon size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="px-6 py-4 text-center text-gray-500"
                                >
                                    {t('common.noData')}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">
                                {editingId ? t(`${entityName.toLowerCase()}.edit`) : t(`${entityName.toLowerCase()}.createNew`)}
                            </h2>
                            <button onClick={closeForm} className="text-gray-500 hover:text-gray-700">
                                <XIcon size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {formFields.map((field) => (
                                <div key={field.name}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t(`${entityName.toLowerCase()}.${field.label.toLowerCase()}`)}
                                    </label>
                                    {field.type === 'select' ? (
                                        <select
                                            value={formData[field.name] || ''}
                                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                                            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">-- {t('common.select')} --</option>
                                            {field.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type || 'text'}
                                            value={formData[field.name] || ''}
                                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                                            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    )}
                                </div>
                            ))}

                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    onClick={closeForm}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    {t('common.cancel')}
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                >
                                    {t('common.save')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EntityManager;