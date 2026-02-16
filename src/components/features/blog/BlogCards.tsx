'use client'

import Button from "@/src/components/common/Button"

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

export default function BlogCards(){
    return(
        <div>
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

                <Button>
                    Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
        </div>
    )
}