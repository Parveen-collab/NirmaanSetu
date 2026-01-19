'use client'
export default function LeftInfo() {
    return (
        <div className="hidden md:flex flex-col justify-center px-12 bg-primary text-black">
            <h1 className="text-4xl font-bold mb-6">NirmaanSetu</h1>
            <p className="text-lg mb-8">
                A single platform for construction workers, contractors, and material suppliers.
            </p>
            <ul className="space-y-4 text-sm">
                <li>✔ Employees can find jobs nearby</li>
                <li>✔ Employers can post and manage jobs</li>
                <li>✔ Shopkeepers can sell construction materials</li>
            </ul>
        </div>
    )
}