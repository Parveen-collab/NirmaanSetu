import HomeHeader from '@/src/components/features/home/HomeHeader'
import HomeFooter from '@/src/components/features/home/HomeFooter'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <HomeHeader />

      <main className="flex-1">
        {children}
      </main>

      <HomeFooter />
    </div>
  )
}
