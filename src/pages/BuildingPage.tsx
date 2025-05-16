import React from "react";
import { useTranslation } from "react-i18next";
import EntityManager from "@components/common/EntityManager.tsx";

interface Building {
  id: string | number;
  name: string;
  address: string;
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

interface BuildingPageProps {
  data: Building[];
}

const BuildingPage: React.FC<BuildingPageProps> = ({ data }) => {
  useTranslation();

  const columns: Column[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "address", label: "Address" },
  ];

  const formFields: FormField[] = [
    { name: "name", label: "Name", type: "text" },
    { name: "address", label: "Address", type: "text" },
  ];

  const handleAdd = (formData: Omit<Building, "id">): void => {
    console.log("Added new building:", formData);
  };

  const handleEdit = (
    id: string | number,
    formData: Omit<Building, "id">
  ): void => {
    console.log(`Edited building ${id}:`, formData);
  };

  const handleDelete = (id: string | number): void => {
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
