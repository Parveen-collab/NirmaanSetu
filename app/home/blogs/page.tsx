//Blogs page
import Button from '@/src/components/ui/Button';
import BlogCards from './blogComponent/BlogCards';
import SearchFilters from './blogComponent/SearchFilters';
import Header from './blogComponent/Header';

export const metadata = {
  title: "Blogs & Articles | NirmaanSetu",
  description:
    "Read articles, guides, and insights related to construction labour, jobs, skills, and industry updates.",
};


const Blogs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className='bg-background text-foreground'>
        {/* Header */}
        <Header/>

        {/* Search & Filter */}
        <SearchFilters/>

        {/* Blog Cards */}
        <BlogCards/>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button>
            Load More Articles
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Blogs