'use client'

import { useState } from 'react'
import EmployeePage from "./employee/employeeComponent/EmployeePage"
import EmployerPage from "./employer/employerComponent/EmployerPage"
import ProjectPage from "./project/projectComponent/ProjectPage"
import ShopPage from "./shop/shopComponent/ShopPage"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('employees')

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        <Tab label="Employees" active={activeTab === 'employees'} onClick={() => setActiveTab('employees')} />
        <Tab label="Employers" active={activeTab === 'employers'} onClick={() => setActiveTab('employers')} />
        <Tab label="Projects" active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
        <Tab label="Shop" active={activeTab === 'shop'} onClick={() => setActiveTab('shop')} />
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-4">
        {activeTab === 'employees' && <EmployeePage />}
        {activeTab === 'employers' && <EmployerPage />}
        {activeTab === 'projects' && <ProjectPage />}
        {activeTab === 'shop' && <ShopPage />}
      </div>
    </div>
  )
}

/* Reusable Tab Button */
const Tab = ({ label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-medium
      ${active 
        ? 'bg-black text-white dark:bg-white dark:text-black'
        : 'bg-zinc-200 dark:bg-zinc-800'}
    `}
  >
    {label}
  </button>
)
