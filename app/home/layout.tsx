import Header from '@/src/components/layout/Header'
import Footer from '@/src/components/layout/Footer'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}
