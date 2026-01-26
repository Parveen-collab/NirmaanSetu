import CopyrightFooter from '@/src/components/layout/CopyrightFooter'
import DashBoardHeader from './dashboardComponent/DashBoardHeader'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <DashBoardHeader/>

      <main className="flex-1">
        {children}
      </main>

      <CopyrightFooter/>
    </div>
  )
}
