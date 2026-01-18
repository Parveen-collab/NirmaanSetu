# NirmaanSetu

NirmaanSetu is a comprehensive platform built with **Next.js 16**, designed to bridge the gap in the construction industry by connecting employers and employees.

## 🚀 Key Features

- **Dual-Role Platform**: Dedicated modules and dashboards for both **Employers** and **Employees**.
- **Project Management**: Centralized hub for tracking and managing construction projects.
- **Marketplace (Shop)**: Integrated shopping module for industry-related needs.
- **Authentication**: Secure login and registration flows for all user types.
- **Public Content**:
  - **Blogs & Media**: Industry updates and company news.
  - **FAQ & About Us**: Detailed information and support resources.
  - **Contact Us**: Direct communication channel with the NirmaanSetu team.

## 🚀 Competitors

**1.Labour Flex**
**2.Y-Junction**
**3.eFORCE (Captech Technologies)**
**4.Digital Labour Chowk**
**5.Infryo**
**6.RenoCrew**

## 🛠️ Tech Stack

### Core Framework & Language
- **Next.js 16.1.1**: Utilizing the App Router for optimized routing and server-side rendering.
- **React 19.2.3**: Latest features for building interactive user interfaces.
- **TypeScript 5**: Strong typing for better maintainability and developer experience.

### Frontend & Styling
- **Tailwind CSS 4**: Modern, utility-first CSS framework for rapid and responsive UI development.
- **Lucide React**: Scalable and clean vector icons.
- **PostCSS**: CSS transformation tool integrated with Tailwind.

### Tooling & Quality
- **ESLint 9**: Modern linting configuration for code quality.
- **TypeScript**: Ensuring type safety across the codebase.

## 📁 Project Structure

```text
nirmaansetu/
├── app/                # Next.js App Router (Pages and Layouts)
│   ├── dashboard/      # General user dashboard
│   ├── employee/       # Employee-specific modules
│   ├── employer/       # Employer-specific modules
│   ├── home/           # Public pages (Landing, Login, Register, etc.)
│   ├── project/        # Project management views
│   └── shop/           # Marketplace/Shop module
├── src/
│   └── components/     # Reusable React components
│       ├── layout/     # Header, Footer, and navigation
│       ├── ui/         # Base UI components (Button, Input, Modals)
│       └── logic/      # Business logic specific components
├── public/             # Static assets (logos, images)
└── config files/       # next.config.ts, tsconfig.json, etc.
```

## 🚀 Getting Started

Follow these steps to set up the project locally:

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
   Create a `.env.local` file in the root directory and add the necessary environment variables (see `.env.example` if available).

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the results.

## 🔐 Environment Variables

The following environment variables may be required (depending on implemented features):
- `NEXT_PUBLIC_API_URL`: Base URL for the backend API.
- `DATABASE_URL`: Connection string for the database (Prisma).
- `NEXTAUTH_SECRET`: Secret used for authentication encryption.

## 🚢 Deployment

The easiest way to deploy this Next.js app is via [Vercel](https://vercel.com/new).

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into Vercel.
3. Configure your environment variables in the Vercel dashboard.
4. Deploy!

## 🤝 Contribution

Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🏗️ Future Implementation (Planned Stack)
The project aims to integrate the following technologies as it scales:
- **State Management**: Redux Toolkit
- **Database & ORM**: Prisma
- **Authentication**: NextAuth.js
- **Form Handling**: React Hook Form & Zod
- **UI Components**: Material UI (MUI) & Radix UI
- **Visualizations**: ApexCharts & Recharts
