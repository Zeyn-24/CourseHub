# CourseHub

This project is an online course management system where instructors can create and manage courses, and students can enroll, track their progress, and complete evaluations. The application is built with Node.js and React using TypeScript and follows the Screaming Architecture principles.

---

## Overview

The CourseHub Platform is designed to provide a complete ecosystem for e-learning. It offers:
- **User Authentication & Role Management:** Secure registration, login, and role assignment (Instructor, Student, Admin) with firebase authentication.
- **Course Management:** Instructors can create, update, and delete courses, upload multimedia content, and organize courses by categories.
- **Student Enrollment & Progress Tracking:** Students can enroll in courses, view content, track their progress, and receive certifications upon completion.
- **Evaluations & Feedback:** Integrated quiz functionality with automatic grading, along with a system for course reviews and feedback.
- **Admin Panel:** A dashboard for managing users, approving courses, and monitoring platform statistics.

---

## Features

### Authentication and User Management
- **Registration & Login:** Secure email-based registration and login.
- **Firebase Authentication:** Use Firebase Authentication for greater security and application integrity.
- **Role Management:** Different experiences for Instructors, Students, and Admins.
- **Password Recovery:** Secure password reset functionality.

### Course Management
- **CRUD Operations:** Instructors can create, edit, and delete courses.
- **Content Upload:** Support for videos, documents, and external resource links.
- **Categorization:** Courses can be filtered by topics and difficulty levels.

### Student Enrollment & Progress Tracking
- **Enrollment:** Easy course enrollment process.
- **Progress Monitoring:** Track module completion and course progress.
- **Certification:** Automatic course certification upon successful completion.

### Evaluations and Grading
- **Quiz Creation:** Instructors can design quizzes and assignments.
- **Automatic Grading:** System to evaluate multiple-choice questions automatically.
- **Feedback System:** Detailed feedback provided to students on quiz performance.

### Interaction and Feedback
- **Comments Section:** Each module features a discussion area for Q&A.
- **Rating & Reviews:** Students can rate courses and leave reviews.

### Admin Panel
- **User & Course Management:** Oversee user roles and manage course content.
- **Approval Workflow:** Review and approve instructor-published courses.
- **Analytics:** Access to usage statistics and performance metrics.

---

## Specifications

- **Backend:**
  - **Technology:** Node.js, Express, TypeScript
  - **Security:** Firebase authentication with user ID Token.
  - **Architecture:** Clean separation into application, domain, infrastructure, and presentation layers.
  - **Database:** Integration with firebase database.

- **Frontend:**
  - **Technology:** React, Vite, TypeScript
  - **Organization:** Feature-driven architecture for maintainability and scalability.
  - **State Management:** Context API and custom hooks for efficient state sharing.
  - **Routing:** React Router for client-side navigation.
  - **API Integration:** Services layer for handling API calls and state synchronization.

- **General:**
  - **Screaming Architecture:** The project structure emphasizes the domain logic and business intent.
  - **Scalability & Maintainability:** Modular design allows for independent evolution of features.
  - **Modern Development Practices:** Emphasis on type safety, security, and performance optimizations.

---

## Getting Started

### Project Setup

1. Takes the root path of the project as a reference
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
3. Run the project:
   ```bash
   npm run dev
   # or
   pnpm dev

---
