import React from 'react'
import Link from "next/link";

export const metadata = {
  title: "Blogs & Articles | NirmaanSetu",
  description:
    "Read articles, guides, and insights related to construction labour, jobs, skills, and industry updates.",
};

const blogs = [
  {
    id: 1,
    title: "How Digital Platforms Are Transforming Construction Labour",
    excerpt:
      "Technology is reshaping how workers and contractors connect. Learn how digital platforms are improving transparency and access to jobs.",
    category: "Industry Insights",
    date: "March 2025",
  },
  {
    id: 2,
    title: "Top Skills in Demand in the Construction Sector",
    excerpt:
      "From masonry to electrical work, discover the most in-demand construction skills and how workers can prepare themselves.",
    category: "Worker Guide",
    date: "February 2025",
  },
  {
    id: 3,
    title: "How Contractors Can Hire Faster and Smarter",
    excerpt:
      "Hiring delays cost money. Here’s how contractors can streamline hiring using digital workforce platforms.",
    category: "Contractor Guide",
    date: "February 2025",
  },
  {
    id: 4,
    title: "Why Verified Workforce Matters in Construction",
    excerpt:
      "Trust and safety are critical on worksites. Learn why verification benefits both workers and employers.",
    category: "Safety & Trust",
    date: "January 2025",
  },
];

const Blogs = () => {
  return (
        <div className="min-h-screen bg-background text-foreground p-8 max-w-6xl mx-auto animate-fade">
      
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Blogs & Articles
        </h1>
        <p className="text-muted max-w-2xl">
          Insights, guides, and updates on construction labour, workforce
          management, and industry trends.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <input
          type="text"
          placeholder="Search articles…"
          className="flex-1 border rounded-lg px-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none"
        />

        <select className="border rounded-lg px-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none">
          <option>All Categories</option>
          <option>Worker Guide</option>
          <option>Contractor Guide</option>
          <option>Industry Insights</option>
          <option>Safety & Trust</option>
        </select>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-2xl p-6 hover:shadow-md transition animate-fade flex flex-col"
          >
            <div className="mb-3">
              <span className="text-xs font-medium text-primary">
                {blog.category}
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-3">
              {blog.title}
            </h2>

            <p className="text-muted text-sm leading-6 mb-4 flex-1">
              {blog.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-muted">
              <span>{blog.date}</span>

              <Link
                href={`/blogs/${blog.id}`}
                className="text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-16">
        <button className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition cursor-pointer">
          Load More Articles
        </button>
      </div>

    </div>
  )
}

export default Blogs