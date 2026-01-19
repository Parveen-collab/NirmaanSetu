'use client'
export default function SearchFilters() {
    return (
        <div>
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
        </div>
    )
}