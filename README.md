<!-- 
## Problem Statement
The construction sector faces major challenges due to the lack of a unified digital platform connecting workers, contractors, suppliers, and customers. Communication gaps, unverified labor availability, inefficient material procurement, delayed project coordination, and limited transparency create difficulties for all stakeholders involved in construction projects.

Skilled workers such as masons, carpenters, plumbers, electricians, and helpers often struggle to find consistent employment opportunities, while builders, contractors, and homeowners face challenges in finding reliable and skilled labor on time. Similarly, suppliers and shopkeepers dealing with construction materials like cement, bricks, sand, steel, paint, and hardware have limited digital reach and inefficient methods for managing customer connections and deliveries.

Existing solutions are fragmented and do not provide an integrated ecosystem that combines workforce hiring, supplier management, service discovery, communication, and project coordination in one place. This results in increased project delays, higher operational costs, reduced productivity, and lack of trust among stakeholders.

To address these issues, **NirmaanSetu** aims to develop a centralized digital platform that connects all aspects of the construction sector by enabling seamless interaction between employees, employers, suppliers, and customers. The platform will simplify hiring, improve accessibility to construction materials and services, enhance transparency, and create a more efficient and organized construction ecosystem.


## inspiration
1. Upwork
2. Fiverr

## Users 
## for phase 1 
   Employees = Mistry, Helper, Engineers, Carpenter and many more), 
   Employers(Any Common man, Contractors, Builders), 
   Shopkeepers/Suppliers(cement, gitti, balu, chhar, paint, water-related, pipe-related and many more)


# NirmaanSetu
**NirmaanSetu** is a comprehensive platform designed to bridge the gap between various stakeholders in the construction sector. It connects employees (skilled labor like engineers, masons, and carpenters), employers (builders, contractors, and individual homeowners), and suppliers (shopkeepers providing construction materials).

## 🚀 Key Features
- **Multi-Stakeholder Ecosystem**: Integrated platform for Employees, Employers, and Suppliers.
- **Secure Authentication**: Robust security implementation using JWT (JSON Web Tokens) and Twilio for OTP-based verification.
- **ELK Stack Integration**: Centralized logging and monitoring using Elasticsearch, Logstash, and Kibana.
- **Real-time Data Management**: Optimized performance with Redis caching.
- **Automated Cleanup**: Scheduled tasks for managing soft-deleted records and data retention.

## 🛠 Tech Stack
- **Framework**: Spring Boot 3.x
- **Language**: Java 17
- **Database**: MySQL (Persistence), Redis (Caching)
- **Search Engine**: Elasticsearch (Vector Store)
- **Monitoring**: ELK Stack (Elasticsearch, Logstash, Kibana), Prometheus, Actuator
- **Communication**: Twilio SMS API
- **Documentation**: Swagger/OpenAPI 3.0
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites
- JDK 17 or higher
- Maven 3.6+
- Docker & Docker Compose
- Twilio Account (for SMS features)

## Architecture
For the **Architecture** section in your README, you should explain how the system is structured, what technologies are used, and how different parts of the platform interact with each other.

A large-scale construction ecosystem platform's architecture section can include:
* Frontend
* Backend
* Database
* Authentication
* APIs
* User Roles
* Deployment/Scalability
* Future AI integrations (optional)
---

# Architecture
NirmaanSetu follows a modern full-stack web architecture designed to support scalability, modularity, and real-time interaction between stakeholders in the construction sector.

### Frontend
The frontend is built using:
* Next.js
* React.js
* TypeScript
* Tailwind CSS
* Material UI (MUI)

The frontend provides responsive and user-friendly interfaces for:
* Employees
* Employers
* Suppliers
* Admins

### Backend
The backend is responsible for:
* Authentication & Authorization
* Job Management
* Supplier Listings
* User Management
* Notifications
* API Handling

Technologies used:
* Node.js
* Express.js / Next.js API Routes
* REST APIs

### Database
The platform uses a relational database for storing:
* User Information
* Job Listings
* Material Listings
* Orders
* Reviews & Ratings
* Project Data

Database & ORM:
* MySQL / PostgreSQL
* Prisma ORM

### Authentication
Authentication system includes:
* Secure Login & Registration
* Role-Based Access Control (RBAC)
* JWT / Session-based Authentication

### User Roles
The platform supports multiple user roles:
1. Employee
2. Employer
3. Supplier
4. Admin
Each role has separate dashboards and permissions.

### Platform Workflow
1. Employers post construction-related work.
2. Employees apply for available jobs.
3. Suppliers list construction materials and services.
4. Customers can search and connect with workers or suppliers.
5. Admin manages platform activities and verification.

### Scalability & Future Scope
The architecture is designed to support:
* AI-based recommendations
* Real-time communication
* Geo-location services
* Multi-language support
* Cloud deployment
* Large-scale concurrent users
---
![img_1.png](src/main/resources/screenshots/img_1.png)

![img.png](src/main/resources/screenshots/img.png)

## Screenshots
1. Landing/Home Page
![img_2.png](src/main/resources/screenshots/img_2.png)
![img_3.png](src/main/resources/screenshots/img_3.png)
2. Login Page
![img_4.png](src/main/resources/screenshots/img_4.png)
3. Dashboard Screens
![img_5.png](src/main/resources/screenshots/img_5.png)
4. Employer Dashboard
![img_6.png](src/main/resources/screenshots/img_6.png)
5. Supplier Dashboard
![img_7.png](src/main/resources/screenshots/img_7.png)
6. Job Listing Page
![img_8.png](src/main/resources/screenshots/img_8.png)
7. Material Marketplace
![img_9.png](src/main/resources/screenshots/img_9.png)
8. Worker Profile Page
![img_10.png](src/main/resources/screenshots/img_10.png)
9. Notification system 
![img_11.png](src/main/resources/screenshots/img_11.png)

## Live Demo

🚀 Main Application:  
https://nirmaan-setu.vercel.app/

🛠️ Admin Panel:  
The Admin project deployment is in progress.
Live demo link will be added soon.

📱 Responsive Design Supported for:
- Mobile
- Tablet
- Desktop

## ⚙️ Installation & Setup
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Environment Variables**:
   Create a `.env` file or set the following environment variables:
   ```env
   TWILIO_ACCOUNT_SID=your_sid
   TWILIO_AUTH_TOKEN=your_token
   TWILIO_PHONE_NUMBER=your_number
   OPENAI_API_KEY=your_openai_key
   ENCRYPTION_SECRET=your_encryption_secret
   JWT_SECRET=your_jwt_secret
   ```

3. **Spin up Infrastructure**:
   Use Docker Compose to start the ELK stack and other services:
   ```bash
   docker-compose up -d
   ```

4. **Build and Run**:
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```

## 🧪 Testing & Verification
Run the following commands to ensure code quality:
- **Build without tests**: `.\mvnw clean install -DskipTests`
- **Run Unit Tests**: `.\mvnw test`
- **Full Verification**: `mvn verify` (This also updates `swagger-docs.json`)

## 📖 API Documentation
Once the application is running, you can access the Swagger UI at:
`http://localhost:8080/swagger-ui.html` (or the configured port)

## 🏗 Project Structure
- `src/main/java`: Backend source code.
- `src/main/resources`: Configuration files (`application.properties`, logback config).
- `logstash/`: Logstash pipeline configurations.
- `.zencoder/`: Project-specific AI rules and documentation.
- `docker-compose.yml`: Infrastructure orchestration.
---

## Performance
### Frontend Optimization
* Server-side rendering (SSR) and static rendering using Next.js
* Optimized component rendering
* Lazy loading and code splitting
* Image optimization using Next.js Image component
* Responsive UI for mobile, tablet, and desktop devices

### Backend Performance
* Efficient REST API handling
* Optimized database queries
* Scalable backend architecture
* API response optimization

### Database Optimization
* Indexed database queries
* Relational schema optimization
* Efficient data fetching using Prisma ORM

### Scalability
* Modular architecture for easy scaling
* Supports large numbers of users and listings
* Cloud deployment ready

### User Experience
* Fast page navigation
* Smooth dashboard interactions
* Optimized loading states and error handling

### Security & Reliability
* Authentication and authorization handling
* Protected API routes
* Input validation and error management
---

### Performance Techniques Used
- Caching strategies
- Optimized API calls

  
## Scalability
NirmaanSetu is designed with a scalable and modular architecture to support a growing number of users, services, suppliers, and construction projects across different regions.

### Modular System Design
The platform follows a modular architecture where frontend, backend, database, and services are separated for easier maintenance and future expansion.

### Multi-User Support
The system is built to handle multiple types of users simultaneously, including:
* Employees
* Employers
* Suppliers
* Admins

### Database Scalability
* Optimized relational database structure
* Efficient query handling using Prisma ORM
* Indexed data for faster search and retrieval
* Supports large volumes of users, jobs, and material listings

### Cloud Deployment Ready
The platform is designed for deployment on scalable cloud infrastructure such as:
* AWS
* Vercel
* Render

### Performance Optimization
* Lazy loading
* Code splitting
* Optimized API calls
* Server-side rendering with Next.js
* Efficient state management

### Future Scalability Goals
The architecture supports future integrations such as:
* AI-powered worker and supplier recommendations
* Real-time communication and notifications
* Geo-location and map services
* Multi-language support
* Mobile application integration
* Analytics and reporting systems

### Global Expansion Ready
NirmaanSetu is being designed to support large-scale adoption in the construction industry with the capability to expand across cities, states, and international markets.


## Security
NirmaanSetu follows modern web security practices to ensure secure access, protected user data, and reliable platform operations.

### Authentication & Authorization
* Secure user authentication system
* Role-Based Access Control (RBAC)
* Protected routes and APIs
* Session/JWT-based authentication

### Data Protection
* Secure handling of user information
* Input validation and sanitization
* Prevention of unauthorized data access
* Environment variable protection for sensitive credentials

### API Security
* Secure REST API communication
* Request validation and error handling
* Restricted access to protected endpoints
* Prevention of invalid or malicious requests

### Frontend Security
* Form validation
* Secure authentication flow
* Safe state and session management
* Protection against common frontend vulnerabilities

### Database Security
* ORM-based secure database queries using Prisma
* Reduced risk of SQL injection attacks
* Controlled database access permissions

### Infrastructure Security
* HTTPS-ready deployment
* Secure cloud deployment practices
* Scalable and maintainable backend architecture

### Future Security Enhancements
Planned security improvements include:
* Two-Factor Authentication (2FA)
* Rate limiting
* Activity logging and monitoring
* Email and phone verification
* Advanced admin moderation tools
---

# Optional Technical Additions
If implemented, you can also mention:
* CSRF protection
* XSS prevention
* Password hashing using bcrypt
* Secure cookies
* Content Security Policy (CSP)
* API throttling

Example:
```md id="h1t9p4"
### Additional Security Measures
- Password hashing using bcrypt
- Protection against XSS and CSRF attacks
- Secure API middleware
- Authentication token expiration handling
```
---
Since your project targets global-scale users, adding a strong Security section makes the README look much more professional and production-oriented.


## Future Improvements
NirmaanSetu is designed as a scalable construction ecosystem platform, and several advanced features are planned for future development.

### Planned Features
* Real-time chat between workers, employers, and suppliers
* Geo-location and nearby service discovery
* Multi-language support for regional and international users
* Mobile application for Android and iOS
* Push notifications and email alerts
* Digital payment integration
* Project tracking and progress monitoring
* Advanced analytics and reporting dashboard
* Worker verification and certification system
* Supplier inventory and stock management
* Review and rating system for trust building

### Technical Enhancements
* Microservices-based backend architecture
* Real-time updates using WebSockets
* Caching and CDN optimization
* Improved search and filtering system
* Advanced role-based access control
* Offline support and PWA features

### AI & Smart Features
* AI-powered hiring suggestions
* Smart material cost estimation
* Predictive demand analysis
* Construction project recommendation engine
* AI chatbot support system

### Scalability Goals
* Expansion to multiple cities and countries
* Support for large-scale concurrent users
* Cloud-native infrastructure deployment
* Enterprise-level construction management solutions

### Security Enhancements
* Two-Factor Authentication (2FA)
* Activity monitoring and audit logs
* Fraud detection mechanisms
* Advanced admin moderation system
---

# Optional Professional Ending
You can end the section with:
```md id="rzk8yu"
NirmaanSetu aims to become a complete digital ecosystem for the construction industry by continuously improving scalability, accessibility, security, and user experience.
```

     ## NirmaanSetu - Building Bridges in Construction. -->

     <div align="center">

# 🏗️ NirmaanSetu

### Building India's Digital Construction Ecosystem

A scalable full-stack platform connecting skilled workers, employers, suppliers, and customers through a unified digital marketplace for the construction industry.

[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)]()
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-success?style=for-the-badge&logo=springboot)]()
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)]()
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)]()
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql)]()
[![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?style=for-the-badge&logo=redis)]()
[![JWT](https://img.shields.io/badge/JWT-Secure_Authentication-black?style=for-the-badge&logo=jsonwebtokens)]()
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)]()

[🌐 Live Demo](https://nirmaan-setu.vercel.app/) •
📖 API Documentation •
🚀 Backend •
💻 Frontend

</div>

---

# 📚 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [User Roles](#-user-roles)
- [Security](#-security)
- [Performance](#-performance)
- [API Documentation](#-api-documentation)
- [Installation](#-installation)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

# 📖 Overview

**NirmaanSetu** is a scalable construction ecosystem platform designed to digitize and simplify the way construction professionals connect, collaborate, and conduct business.

The platform serves as a centralized marketplace where skilled workers, contractors, builders, suppliers, and customers can interact through a secure and efficient digital ecosystem.

Unlike traditional fragmented solutions, NirmaanSetu brings workforce hiring, supplier discovery, communication, and construction service management together in a single platform.

The project follows a modern full-stack architecture using **Spring Boot**, **Next.js**, **MySQL**, **Redis**, and **JWT Authentication**, making it suitable for scalable cloud deployment and future enterprise expansion.

---

# ❗ Problem Statement

The construction industry remains one of the least digitized sectors despite employing millions of workers and involving numerous stakeholders.

Several challenges continue to impact productivity and project efficiency:

- Skilled workers struggle to find consistent employment opportunities.
- Contractors spend significant time searching for verified labor.
- Construction material suppliers have limited digital visibility.
- Customers lack a centralized platform to discover trusted workers and suppliers.
- Communication between stakeholders is fragmented.
- Manual coordination often leads to delays, higher operational costs, and reduced transparency.

Existing platforms typically solve only a single problem—such as job listings or e-commerce—without providing an integrated ecosystem tailored to the construction industry.

---

# 💡 Solution

NirmaanSetu addresses these challenges by providing a unified digital platform where multiple stakeholders can seamlessly collaborate.

The platform enables:

- Worker discovery and hiring
- Construction job management
- Supplier marketplace
- Secure authentication
- Role-based dashboards
- Notifications
- Digital business visibility
- Scalable backend infrastructure

By bringing these services together, NirmaanSetu simplifies the construction workflow while improving accessibility, transparency, and operational efficiency.

---

# ✨ Key Features

| Feature | Description |
|----------|-------------|
| 🔐 Secure Authentication | JWT-based authentication with OTP verification and refresh token support |
| 👷 Employee Portal | Create professional profiles, discover jobs, and manage applications |
| 🏢 Employer Portal | Post jobs, manage hiring, and connect with skilled workers |
| 🏪 Supplier Marketplace | Showcase construction materials and connect with customers |
| 👥 Multi-Role Access | Dedicated dashboards for Employees, Employers, Suppliers, and Administrators |
| 📢 Notification System | Real-time notifications for platform activities |
| 📊 Dashboard & Analytics | Role-specific dashboards with business insights |
| ⚡ Redis Integration | High-performance caching for improved response times |
| 📜 API Documentation | Interactive OpenAPI/Swagger documentation |
| 📈 Monitoring | Application monitoring using Spring Boot Actuator and ELK stack |
| 🔒 Role-Based Authorization | Secure access control for protected resources |
| 🐳 Docker Support | Containerized development and deployment |

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React Framework |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Material UI | UI Components |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Java 21 | Programming Language |
| Spring Boot 3.5 | Backend Framework |
| Spring Security | Authentication & Authorization |
| Spring Data JPA | Database Access |
| Hibernate | ORM |
| Maven | Build Tool |

---

## Database & Storage

| Technology | Purpose |
|------------|---------|
| MySQL | Primary Database |
| Redis | Caching & Performance |

---

## DevOps & Monitoring

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Docker Compose | Local Infrastructure |
| Elasticsearch | Search & Logging |
| Logstash | Log Processing |
| Kibana | Visualization |
| Prometheus | Monitoring |
| Spring Boot Actuator | Health Checks & Metrics |

---

## Authentication & Integrations

| Technology | Purpose |
|------------|---------|
| JWT | Stateless Authentication |
| Twilio | OTP Verification |
| Swagger/OpenAPI | API Documentation |

---

# 🏛️ System Architecture

NirmaanSetu follows a modern three-tier architecture consisting of a responsive frontend, a secure RESTful backend, and a scalable data layer. Each component has a clearly defined responsibility, making the application easier to maintain, extend, and deploy.

```text
                           Users
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
   Employees             Employers            Suppliers
        │                     │                     │
        └─────────────── Web Browser ───────────────┘
                              │
                     Next.js + React Frontend
                              │
                    HTTPS / REST APIs (JWT)
                              │
                Spring Boot Backend (Java 21)
                              │
      ┌─────────────┬──────────┼──────────────┬─────────────┐
      │             │          │              │             │
 Authentication   Business    Redis       Twilio OTP     Scheduler
 & Authorization   Logic      Cache          Service        Jobs
      │
      ▼
   MySQL Database
      │
      ▼
 ELK Stack + Prometheus
```

---

## 🧩 Architecture Overview

### Frontend Layer

The frontend provides an intuitive and responsive user experience for all platform users. It communicates with the backend exclusively through secure REST APIs and handles authentication, routing, state management, and UI rendering.

**Responsibilities**

- Responsive user interface
- Authentication flow
- Dashboard rendering
- Form validation
- API integration
- Role-based navigation

**Technologies**

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Material UI

---

### Backend Layer

The backend is responsible for implementing the platform's business logic and exposing secure REST APIs for all client applications.

Core responsibilities include:

- Authentication & Authorization
- User Management
- Job Management
- Supplier Management
- Notification Management
- OTP Verification
- Dashboard APIs
- File Handling
- Scheduled Tasks

The backend follows a layered architecture consisting of Controllers, Services, Repositories, DTOs, and Entities.

---

### Data Layer

Application data is stored in MySQL using Spring Data JPA and Hibernate.

Redis is used to improve performance through caching and temporary data storage.

The data layer manages:

- Users
- Roles
- Jobs
- Applications
- Suppliers
- Products
- Notifications
- OTP Requests

---

# 📂 Project Structure

```text
backend/
│
├── src/
│   ├── main/
│   │
│   ├── java/
│   │   └── com/nirmaansetu/
│   │
│   │       ├── config/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── entity/
│   │       ├── dto/
│   │       ├── mapper/
│   │       ├── security/
│   │       ├── scheduler/
│   │       ├── util/
│   │       ├── exception/
│   │       └── validation/
│   │
│   └── resources/
│       ├── application.properties
│       ├── static/
│       └── templates/
│
├── docker-compose.yml
├── Dockerfile
├── pom.xml
└── README.md
```

---

# 👥 User Roles

The platform supports multiple user roles with dedicated dashboards and permissions.

| Role | Responsibilities |
|------|------------------|
| 👷 Employee | Create profile, search jobs, apply for work, manage personal information |
| 🏢 Employer | Post jobs, manage applicants, hire workers, manage projects |
| 🏪 Supplier | Publish construction materials, manage inventory, receive customer inquiries |
| 👨‍💼 Administrator | Manage users, verify accounts, monitor platform activity, configure the system |

---

# 🧩 Core Modules

The backend is organized into independent business modules, making the application easier to maintain and scale.

| Module | Purpose |
|---------|---------|
| Authentication | Login, Registration, JWT, Refresh Token, OTP |
| User Management | Employee, Employer, Supplier profiles |
| Job Management | Job creation, updates, applications |
| Marketplace | Material listings and supplier management |
| Dashboard | Role-based analytics and statistics |
| Notification | Platform notifications |
| File Management | Image and document handling |
| Scheduler | Background maintenance tasks |
| Security | Authorization, authentication, access control |

---

# 🗄️ Database Design

The application uses a relational database designed to support multiple user roles and business entities.

### Core Entities

```text
User
 ├── Employee
 ├── Employer
 └── Supplier

Employer
      │
      ├────────────► Jobs
      │                 │
      │                 ▼
      │            Applications
      │                 ▲
      │                 │
Employee ───────────────┘

Supplier
      │
      ▼
Construction Materials

User
      │
      ▼
Notifications
```

---

## Primary Data Domains

- Users
- Roles
- Authentication
- Jobs
- Applications
- Construction Materials
- Suppliers
- Notifications
- OTP Verification

---

# 🔄 Application Workflow

```text
User Registration
        │
        ▼
OTP Verification
        │
        ▼
Account Activation
        │
        ▼
JWT Login
        │
        ▼
Role Identification
        │
        ▼
Dashboard
        │
 ┌──────┼─────────────┐
 │      │             │
 ▼      ▼             ▼
Employee Employer  Supplier
 │      │             │
 │      │             │
 ▼      ▼             ▼
Jobs   Hiring   Marketplace
```

---

# 🔀 Request Flow

Every request follows the same secure processing pipeline.

```text
Client Request
      │
      ▼
JWT Authentication
      │
      ▼
Authorization Filter
      │
      ▼
Controller
      │
      ▼
Service Layer
      │
      ▼
Repository Layer
      │
      ▼
MySQL Database
      │
      ▼
Response
```

---

# 📈 Scalability Considerations

The architecture has been designed with scalability in mind.

### Current Design

- Layered Architecture
- Stateless REST APIs
- JWT Authentication
- Modular Services
- Redis Caching
- Database Abstraction using JPA
- Docker-based deployment

### Future Enhancements

- Microservices architecture
- API Gateway
- Distributed caching
- Message queues
- WebSocket-based real-time communication
- Kubernetes deployment
- Cloud-native infrastructure

# 🔒 Security

Security is a core aspect of NirmaanSetu. The platform follows modern backend security practices to protect user data, secure API communication, and enforce role-based access control.

## Authentication

- JWT-based Authentication
- Refresh Token Support
- OTP Verification using Twilio
- Stateless Authentication
- Secure Password Storage (BCrypt)

---

## Authorization

The platform uses **Role-Based Access Control (RBAC)** to ensure users can only access resources permitted for their role.

Supported roles include:

- Employee
- Employer
- Supplier
- Administrator

Each API endpoint is protected using Spring Security authorization rules.

---

## API Security

- Protected REST APIs
- Request Validation
- DTO-based Request Handling
- Global Exception Handling
- Input Sanitization
- Secure Error Responses

---

## Credential Management

Sensitive configuration values are never hardcoded into the source code.

Configuration is managed using environment variables, including:

- Database Credentials
- JWT Secret
- Twilio Credentials
- Redis Configuration
- API Keys

---

## Production Security Checklist

| Security Feature | Status |
|------------------|:------:|
| JWT Authentication | ✅ |
| Refresh Tokens | ✅ |
| Role-Based Authorization | ✅ |
| Password Encryption | ✅ |
| OTP Verification | ✅ |
| Environment Variables | ✅ |
| Input Validation | ✅ |
| Global Exception Handling | ✅ |
| Secure REST APIs | ✅ |

---

# ⚡ Performance Optimizations

The application is designed to deliver fast response times while remaining scalable as the number of users grows.

## Backend Optimizations

- Layered Architecture
- Stateless REST APIs
- Optimized Database Queries
- Pagination Support
- DTO Mapping
- Connection Pooling
- Scheduled Background Jobs

---

## Redis Caching

Redis is used to improve application performance by reducing unnecessary database queries.

Typical use cases include:

- OTP Storage
- Frequently Accessed Data
- Temporary Session Data
- Rate Limiting Support

---

## Database Optimization

Performance improvements include:

- Indexed Database Tables
- Efficient Entity Relationships
- Hibernate Query Optimization
- Lazy Loading
- Optimized JPA Repositories

---

## Monitoring & Observability

Application health and runtime metrics are monitored using:

- Spring Boot Actuator
- Elasticsearch
- Logstash
- Kibana
- Prometheus

These tools help monitor application health, logs, and performance in production environments.

---

# 📖 API Documentation

The backend exposes RESTful APIs documented using **OpenAPI (Swagger)**.

After running the application, API documentation is available at:

```text
http://localhost:8080/swagger-ui/index.html
```

---

## API Modules

| Module | Description |
|---------|-------------|
| Authentication | Login, Registration, JWT, OTP |
| Users | User Profile Management |
| Employees | Employee Operations |
| Employers | Employer Operations |
| Suppliers | Marketplace Operations |
| Jobs | Job Posting & Applications |
| Notifications | User Notifications |
| Dashboard | Statistics & Analytics |

---

## Sample API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | User Login |
| POST | `/auth/send-otp` | Send OTP |
| POST | `/auth/verify-otp` | Verify OTP |
| GET | `/users/{id}` | Fetch User Profile |
| PUT | `/users/{id}` | Update User |
| DELETE | `/users/{id}` | Delete User |

---

# 🚀 Getting Started

## Prerequisites

Before running the project, ensure the following software is installed:

| Software | Version |
|-----------|----------|
| Java | 21+ |
| Maven | 3.9+ |
| MySQL | 8+ |
| Redis | Latest |
| Docker | Latest |
| Git | Latest |

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/nirmaansetu-backend.git

cd nirmaansetu-backend
```

---

## 2. Configure Environment Variables

Create the appropriate configuration file (or use environment variables) before starting the application.

Example:

```properties
DB_URL=
DB_USERNAME=
DB_PASSWORD=

JWT_SECRET=

REDIS_HOST=
REDIS_PORT=

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
```

---

## 3. Build the Project

```bash
./mvnw clean install
```

---

## 4. Run the Application

```bash
./mvnw spring-boot:run
```

Or

```bash
java -jar target/backend.jar
```

---

## 5. Verify the Application

Open

```text
http://localhost:8080
```

Swagger

```text
http://localhost:8080/swagger-ui/index.html
```

Actuator

```text
http://localhost:8080/actuator
```

---

# 🐳 Running with Docker

## Build Docker Image

```bash
docker build -t nirmaansetu-backend .
```

---

## Run Docker Container

```bash
docker run -p 8080:8080 nirmaansetu-backend
```

---

## Docker Compose

Start all required services:

```bash
docker compose up -d
```

Stop services:

```bash
docker compose down
```

---

# 💻 Local Development

## Development Workflow

```text
Clone Repository
        │
        ▼
Configure Database
        │
        ▼
Configure Environment Variables
        │
        ▼
Start Redis
        │
        ▼
Run Spring Boot
        │
        ▼
Open Swagger
        │
        ▼
Begin Development
```

---

## Useful Maven Commands

Build Project

```bash
./mvnw clean install
```

Run Tests

```bash
./mvnw test
```

Package Application

```bash
./mvnw package
```

Skip Tests

```bash
./mvnw clean install -DskipTests
```

---

# ✅ Health Checks

Spring Boot Actuator provides several useful endpoints.

| Endpoint | Purpose |
|-----------|----------|
| `/actuator/health` | Application Health |
| `/actuator/info` | Application Information |
| `/actuator/metrics` | Runtime Metrics |
| `/actuator/prometheus` | Prometheus Metrics |

---

# 📸 Screenshots

The following screenshots showcase the primary features and user interfaces of NirmaanSetu.

## 🏠 Landing Page

> Modern and responsive landing page introducing the platform and its services.

![Landing Page](src/main/resources/screenshots/img_2.png)

---

## 🔐 Authentication

Secure login with JWT authentication and OTP verification.

![Login](src/main/resources/screenshots/img_4.png)

---

## 📊 Dashboard

Role-based dashboards providing personalized insights and quick access to platform features.

![Dashboard](src/main/resources/screenshots/img_5.png)

---

## 🏢 Employer Dashboard

Employers can create jobs, manage applicants, and monitor hiring activities.

![Employer Dashboard](src/main/resources/screenshots/img_6.png)

---

## 🏪 Supplier Dashboard

Suppliers can manage products, marketplace listings, and customer inquiries.

![Supplier Dashboard](src/main/resources/screenshots/img_7.png)

---

## 💼 Job Marketplace

Employees can browse available opportunities and apply for construction jobs.

![Job Listing](src/main/resources/screenshots/img_8.png)

---

## 🧱 Material Marketplace

Browse and discover construction materials from verified suppliers.

![Marketplace](src/main/resources/screenshots/img_9.png)

---

## 👷 Worker Profile

Professional worker profiles with skills and experience.

![Worker Profile](src/main/resources/screenshots/img_10.png)

---

## 🔔 Notifications

Real-time notification system for important platform updates.

![Notifications](src/main/resources/screenshots/img_11.png)

---

# 🌍 Deployment

The application is designed for cloud deployment and production environments.

## Frontend

| Platform | Status |
|----------|--------|
| Vercel | ✅ |

---

## Backend

| Platform | Status |
|----------|--------|
| Railway | ✅ |

---

## Database

| Service | Status |
|----------|--------|
| MySQL | ✅ |

---

## Cache

| Service | Status |
|----------|--------|
| Redis | ✅ |

---

## Monitoring

| Service | Status |
|----------|--------|
| Elasticsearch | ✅ |
| Logstash | ✅ |
| Kibana | ✅ |
| Prometheus | ✅ |

---

# 🚀 Deployment Architecture

```text
                    Internet
                        │
                        ▼
              Next.js Frontend (Vercel)
                        │
                 HTTPS + REST APIs
                        │
                        ▼
         Spring Boot Backend (Railway)
            │           │           │
            │           │           │
            ▼           ▼           ▼
         MySQL       Redis      ELK Stack
```

---

# 🛣️ Roadmap

## Completed

- [x] User Authentication
- [x] JWT Authentication
- [x] OTP Verification
- [x] Role-Based Authorization
- [x] Employee Portal
- [x] Employer Portal
- [x] Supplier Portal
- [x] Job Marketplace
- [x] Dashboard
- [x] Notifications
- [x] Redis Integration
- [x] Docker Support
- [x] Swagger Documentation
- [x] ELK Integration
- [x] Responsive Frontend

---

## Planned

- [ ] Real-time Chat
- [ ] Payment Gateway
- [ ] Email Notifications
- [ ] Advanced Search Filters
- [ ] Push Notifications
- [ ] Mobile Application
- [ ] Progressive Web App (PWA)
- [ ] Multi-language Support
- [ ] Advanced Analytics
- [ ] Public REST API
- [ ] Admin Analytics Dashboard
- [ ] Cloud Object Storage

---

## Long-Term Vision

The long-term goal of NirmaanSetu is to become a comprehensive digital ecosystem for the construction industry by connecting workers, employers, suppliers, and customers on a single platform. Future iterations will focus on improved scalability, enhanced collaboration features, and enterprise-ready infrastructure.

---

# 🤝 Contributing

Contributions are welcome and appreciated.

If you would like to contribute:

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "Add your feature"
```

4. Push the branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

Please ensure your code follows the project's coding standards and passes all tests before submitting a pull request.

---

# 🧪 Testing

Run unit tests:

```bash
./mvnw test
```

Run all verification checks:

```bash
./mvnw verify
```

Build without tests:

```bash
./mvnw clean install -DskipTests
```

---

# 📚 Documentation

The project includes:

- REST API Documentation (Swagger/OpenAPI)
- Spring Boot Actuator Endpoints
- Docker Configuration
- Deployment Configuration
- Environment Variable Documentation

---

# 📄 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for more details.

---

# 🙌 Acknowledgements

Special thanks to the open-source community and the technologies that made this project possible.

- Spring Boot
- Spring Security
- Next.js
- React
- MySQL
- Redis
- Docker
- Elasticsearch
- Logstash
- Kibana
- Prometheus
- Twilio
- Swagger/OpenAPI

---

# 👨‍💻 Author

**Parveen Kumar**

**Backend Engineer | Full-Stack Developer**

- 🌐 Portfolio: https://your-portfolio-link
- 💼 LinkedIn: https://linkedin.com/in/parveen-kumar-664b8b24b
- 💻 GitHub: https://github.com/Parveen-collab
- 📧 Email: your-email@example.com

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

Your support helps improve the project and encourages future development.

---

<div align="center">

### 🏗️ NirmaanSetu

**Connecting the Construction Industry Through Technology**

Made with ❤️ using Spring Boot, Next.js, and Java.

</div>