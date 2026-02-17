Based on my analysis of the NirmaanSetu project structure, here are my suggestions to improve organization, maintainability, and adherence to Next.js best practices:


4. Remove Dead Code/Files
Several files in src/types/ are empty (e.g., index.ts, shop.ts, user.ts).

Suggestion: Either implement the types or remove the files to avoid confusion during development.

5. Asset Management
You have an empty src/image/ folder and a populated public/ folder.

Suggestion: If src/image/ is intended for React-wrapped SVG icons, rename it to src/components/icons/. For static assets (JPG, PNG, SVG), strictly use the public/ directory.
6. Logic Grouping
In src/hooks/, you have a logic/ subfolder.

Suggestion: Unless you have dozens of hooks, it's often better to keep them flat in src/hooks/ for easier discovery.
7. Global Providers
Check app/layout.tsx and ensure that common logic (like ProfileContext.tsx) is wrapped at the highest necessary level to avoid prop drilling or redundant declarations in nested layouts (app/home/layout.tsx, etc.).

8. Routing Strategy
The root route app/page.tsx currently renders AuthPage, while the landing page is at /home.

Suggestion: If this is a public-facing site, the landing page should ideally be at the root (/) and auth pages at /login or /register, unless the app is strictly behind an authentication wall by design.





# 🏗️ NirmaanSetu

[![Next.js](https://img.shields.io/badge/Next.js-15.1.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**NirmaanSetu** is a specialized platform designed to bridge the gap in the construction industry. It serves as a comprehensive hub connecting employers and employees, streamlining project management, and providing a marketplace for industry-specific needs.

---

## API List
1. mobile otp verification api (public)
2. login api
3. registration api
4. change/forgot password api (click on chnage/forgot/reset=>resetpassword screen=>mobile/email otp verification=>type 5. 5. password=>retype password=>done)
5. create work api
6. send enquiry api
7. send feedback api
8. get all employees
9. get employee by id
10. get all employers
11. get employer by id
12. get all shops
13. get shop by id
14. get all projects
15. get project by id
16. get profile
17. edit profile
18. get all notifications
19. get notification by id
20. get all summary of payment from the day of registration
21. get all transactions
22. payment api
23. get all orders
24. get order by id
25. Hire api
26. apply work api
27. add material api
28. apply for material api


## 🚀 Key Features

### 👥 Dual-Role Platform
- **Employer Dashboard**: Post work, manage projects, and find qualified labor.
- **Employee Dashboard**: Find jobs, manage profiles, and track earnings.

### 💼 Project Management
- **Centralized Tracking**: Monitor project progress and milestones.
- **Efficient Matching**: Connecting the right skills with the right projects.

### 🛒 Marketplace (Shop)
- **Industry Supplies**: Integrated shopping module for construction materials and tools.
- **Order Tracking**: Manage and track all purchases directly within the platform.

### 🔐 Secure Authentication
- Robust login and registration flows for all user types.
- Secure password reset and profile management.

### 📄 Information & Support
- **Blogs & Media**: Stay updated with industry news and company announcements.
- **Help Center**: Comprehensive FAQ and support resources.
- **Contact Channels**: Direct communication with the support team.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.1.1](https://nextjs.org/) (App Router)
- **Library**: [React 19.0.0](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)

---

## 📁 Project Structure

```text
nirmaansetu/
├── app/                  # Next.js App Router
│   ├── dashboard/        # Main user dashboards (Employer/Employee)
│   ├── home/             # Public landing pages & Auth flows
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Entry point
├── src/
│   ├── components/       # Reusable React components
│   │   ├── common/       # Atomic UI components (Button, Input)
│   │   ├── features/     # Feature-specific components
│   │   └── layout/       # Global components (Header, Footer)
│   ├── config/           # Application configuration
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # External library integrations
│   ├── types/            # TypeScript interfaces & types
│   └── utils/            # Helper functions
├── public/               # Static assets (images, fonts, etc.)
└── tailwind.config.ts    # Tailwind CSS configuration
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nirmaansetu.git
   cd nirmaansetu
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root and add necessary configurations:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License.

---

## 🏗️ Future Roadmap

- [ ] Redux Toolkit for advanced state management.
- [ ] Prisma ORM integration for database management.
- [ ] NextAuth.js for enhanced security.
- [ ] Advanced data visualization with ApexCharts.
- [ ] Mobile application integration.
