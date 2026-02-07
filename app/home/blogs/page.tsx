//Blogs page
import Button from '@/src/components/common/Button';
import BlogCards from '../../../src/components/features/blogComponent/BlogCards';
import SearchFilters from '../../../src/components/features/blogComponent/SearchFilters';
import Header from '../../../src/components/features/blogComponent/Header';

export const metadata = {
  title: "Blogs & Articles | NirmaanSetu",
  description:
    "Read articles, guides, and insights related to construction labour, jobs, skills, and industry updates.",
};


const Blogs = () => {
  return (
    <main className='bg-background text-foreground'>
      <div className="mx-auto w-full max-w-7xl px-4">
        <Header />
        <SearchFilters />
        <BlogCards />

        {/* Load More */}
        <div className="text-center mt-16 mb-6">
          <Button className='inline-block'>
            Load More...
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Blogs