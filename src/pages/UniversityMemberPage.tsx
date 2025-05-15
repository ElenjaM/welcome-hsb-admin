import React from "react";
import { useTranslation } from "react-i18next";
import EntityManager from "@components/common/EntityManager";
import { departmentData } from "@data/mockData.ts";

interface Department {
  id: string | number;
  name: string;
}

interface UniversityMember {
  id: string | number;
  name: string;
  email: string;
  departmentId: string | number;
}

interface Column {
  key: string;
  label: string;
  render?: (item: UniversityMember) => React.ReactNode;
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

interface UniversityMemberPageProps {
  data: UniversityMember[];
}

const UniversityMemberPage: React.FC<UniversityMemberPageProps> = ({
  data,
}) => {
  const { t } = useTranslation();

  const columns: Column[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "departmentId",
      label: "Department",
      render: (item) => {
        const department = departmentData.find(
          (dep) => dep.id === item.departmentId
        );
        return department ? department.name : "Unknown";
      },
    },
  ];

  const formFields: FormField[] = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    {
      name: "departmentId",
      label: "Department",
      type: "select",
      options: departmentData.map((dep) => ({
        value: dep.id,
        label: dep.name,
      })),
    },
  ];

  const handleAdd = (formData: Omit<UniversityMember, "id">): void => {
    console.log("Added new university member:", formData);
  };

  const handleEdit = (
    id: string | number,
    formData: Omit<UniversityMember, "id">
  ): void => {
    console.log(`Edited university member ${id}:`, formData);
  };

  const handleDelete = (id: string | number): void => {
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
