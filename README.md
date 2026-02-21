
**NirmaanSetu** is a specialized platform designed to bridge the gap in the construction industry. It serves as a comprehensive hub connecting employers and employees, streamlining project management, and providing a marketplace for industry-specific needs.
---

TO DO
1.Create a System Design for the Frontend and Backend of Nirmaansetu
2.Create a UML Diagram
3.Create a High Level Design
4.Create a Low Level Design
5.Cretae a Schema for the Database
6.Think it as a Global Level Scalable Product

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
