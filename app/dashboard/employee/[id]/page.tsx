import EmployeeDetails from '@/src/components/features/employeeComponent/EmployeeDetails'

interface PageProps {
  params: {
    id: string
  }
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <EmployeeDetails employeeId={params.id} />
    </div>
  )
}
