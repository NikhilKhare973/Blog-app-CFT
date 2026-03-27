<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

#📝 Blog Management System (NestJS + PostgreSQL)
# 📝 NestJS Role-Based Blog System

A robust, production-ready backend API built with **NestJS**, **PostgreSQL**, and **Prisma**. This project demonstrates a complete Authentication and Authorization flow, including JSON Web Tokens (JWT) and custom Role-Based Access Control (RBAC) guards.

## 🚀 Key Features

* **Secure Authentication:** JWT-based Login and Signup with password hashing via `bcrypt`.
* **Role-Based Authorization:** Custom guards to restrict access based on user roles:
    * **Admin:** Can manage all users, update roles, and delete any blog.
    * **Author:** Can create blogs and update their own posts.
    * **Reader:** Public access to view all blog content.
* **Clean Architecture:** Built using the NestJS modular system (Controllers, Services, Modules).
* **Database Management:** Containerized **PostgreSQL** using **Docker Compose** and **Prisma ORM** for type-safe queries.

---

## 📸 Project Preview

### **1. Database Schema (Prisma Models)**
![Database Schema](./screenshots/database_schema.png)

### **2. API Testing in Postman**
![Postman Test Success](./screenshots/postman_test.png)

---

## 🛠️ Tech Stack

* **Framework:** [NestJS](https://nestjs.com/)
* **Database:** [PostgreSQL](https://www.postgresql.org/)
* **ORM:** [Prisma](https://www.prisma.io/)
* **DevOps:** [Docker](https://www.docker.com/)
* **Security:** JWT (Passport Strategy), Bcrypt

---

## ⚙️ Installation & Setup

### **1. Clone & Install**
```bash
git clone [https://github.com/NikhilKhare973/blog-app.git](https://github.com/NikhilKhare973/blog-app.git)
cd blog-app
npm install
```
##2. Database Setup (Docker)
Ensure Docker Desktop is running, then spin up the PostgreSQL container:
docker-compose up -d

##3. Environment Variables
Create a .env file in the root folder and add:
DATABASE_URL="postgresql://admin:adminpassword@localhost:5432/blog_db?schema=public"

###4. Database Migration
Generate the Prisma client and push the schema to Postgres:
npx prisma generate
npx prisma migrate dev --name init

5. Start the Application
Bash
npm run start:dev

#🛤️ API Roadmap
Auth Endpoints
Method,Endpoint,Access,Description
POST,/auth/signup,Public,Register a new user (Reader/Author/Admin)
POST,/auth/login,Public,Returns a JWT Access Token

Blog Endpoints

Method,Endpoint,Access,Description
GET,/blogs,Public,Get all blog posts
GET,/blogs/:id,Public,Get a specific blog by ID
POST,/blogs,Author/Admin,Create a new blog post
PATCH,/blogs/:id,Owner/Admin,Update a blog post (Ownership check)
DELETE,/blogs/:id,Admin,Delete a blog post

User Admin Endpoints
Method,Endpoint,Access,Description
GET,/users,Admin,List all registered users
PATCH,/users/:id/role,Admin,Update a user's role


##👤 Author
Nikhil Computer Science Graduate | Full Stack Developer LinkedIn | GitHub

---

### **Final Instructions for You:**

1.  **Folder:** Create a folder named `screenshots` in your project.
2.  **Images:** Take your screenshots, name them `database_schema.png` and `postman_test.png`, and put them in that folder.
3.  **Push:** When you run `git push`, GitHub will read this file and display your project beautifully.

**You've officially finished the project!** Would you like me to help you draft a LinkedIn post to share this achievement with your network?
