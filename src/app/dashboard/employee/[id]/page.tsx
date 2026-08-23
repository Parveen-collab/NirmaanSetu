import EmployeeDetails from "@/src/components/features/employee/EmployeeDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div>
      <EmployeeDetails employeeId={id} />
    </div>
  );
}