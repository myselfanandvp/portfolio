# Anand V P: My Portfolio 🚀

This repository showcases a dynamic and visually engaging portfolio website built with modern web technologies. It features a responsive design, interactive elements, and a clear presentation of projects, skills, and professional background.

## 🌟 Badges

![JavaScript](https://img.shields.io/badge/javascript-%23FFDE57.svg?style=for-the-badge&logo=javascript&logoColor=000)
![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=000)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338BDF8.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-gray.svg?style=for-the-badge&logo=formspree&logoColor=white)

## 📄 Description

This portfolio website serves as a comprehensive digital presence for Anand V P, a Full Stack Developer. It is meticulously crafted using React and Vite, leveraging Tailwind CSS for a sleek and responsive user interface. The site highlights key projects with interactive elements, detailed skill sets, and a clear contact form facilitated by Formspree. Being a purely client-side application, it focuses on creating a smooth, fast, and visually engaging user experience.

The website is structured into distinct sections: a landing page with a 3D model visualization, an about page detailing professional experience and technical skills, a projects page showcasing past work, a skills page enumerating core competencies, and a contact page for easy communication.

## 🗺️ Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [How to Use](#-how-to-use)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Important Links](#-important-links)
- [Footer](#-footer)

## ✨ Features

- **Dynamic 3D Model Viewer:** An engaging interactive 3D model on the landing page enhances user experience.
- **Interactive Animations:** Utilizes GSAP and Framer Motion for smooth page transitions and component animations.
- **Responsive Design:** Fully adaptable layout across various screen sizes (desktops, tablets, mobile).
- **Dark/Light Mode Toggle:** Implements a theme switcher for user preference.
- **Contact Form Integration:** Seamless integration with Formspree for easy message submission.
- **Animated Cursor Effects:** A custom splash cursor effect adds a unique visual flair.
- **Glowing Border Effects:** Interactive glowing borders on cards and elements for a modern aesthetic.
- **Smooth Scrolling & Navigation:** Implemented for a fluid user journey.

## 💻 Tech Stack

- **Frontend:** React.js, Vite, React Router DOM, Redux Toolkit, Tailwind CSS, GSAP, Framer Motion, React Three Fiber, Drei, React Icons
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Build Tools:** Vite
- **Deployment:** Vercel, gh-pages (for GitHub Pages)
- **Linting:** ESLint
- **Containerization:** Docker, Docker Compose
- **Contact Form:** Formspree

## 🛠️ Installation

1.  **Clone the repository:**
```bash
    git clone https://github.com/myselfanandvp/portfolio.git
    cd portfolio
```

2.  **Install frontend dependencies:**
```bash
    cd frontend
    bun install # or npm install / yarn install
```

3.  **Set up environment variables (if any):**
    Create a `.env` file in the `frontend` directory if you need to override default settings (e.g., `VITE_BASE_PATH`).

4.  **Run the development server:**
```bash
    bun run dev # or npm run dev / yarn dev
```
    The application will be available at `http://localhost:5173` (or the port specified in `vite.config.js`).

5.  **Docker Installation (Optional):**
    To build and run the application using Docker:
```bash
    docker-compose up --build
```
    The application will be accessible at `http://localhost:9000`.

## 💡 Usage

This portfolio website is designed to showcase the developer's skills, projects, and professional background. It's a dynamic single-page application (SPA) that provides an immersive experience.

- **Landing Page:** Introduces the developer with a captivating 3D model and key skills.
- **About Page:** Details professional experience, technical expertise, and educational foundation.
- **Projects Page:** Displays a curated list of projects with visual previews and descriptions.
- **Skills Page:** Outlines proficiency in various technologies and development areas.
- **Contact Page:** Offers a straightforward way to connect via email or social media, with a functional contact form.

## 🚀 How to Use

1.  **Navigate the Site:** Use the navigation bar to move between different sections (Home, About, Projects, Skills, Contact).
2.  **Explore Projects:** Click on project cards to view more details or visit live demos/repositories.
3.  **Interact with Elements:** Engage with animations, hover effects, and the theme toggle for a richer experience.
4.  **Contact the Developer:** Utilize the contact form on the Contact page to send a message or find direct contact information.
5.  **Theme Toggle:** Switch between light and dark modes using the toggle button in the header.
6.  **3D Model:** Interact with the 3D model on the landing page for a visual showcase.

## 📁 Project Structure

The project follows a standard React application structure:


```
portfolio/
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── README.md
└── frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── animations/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── .eslintrc.js
├── .gitignore
├── package.json
└── vite.config.js
```

- **`frontend/src/components`**: Contains reusable UI components and reusable logic modules.
- **`frontend/src/pages`**: Houses the main components for each route/page.
- **`frontend/src/store`**: Manages application state using Redux Toolkit.
- **`Dockerfile` & `docker-compose.yml`**: Define the containerization setup for the frontend.

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- Fork the repository.
- Create a new branch for your feature or bug fix (`git checkout -b feature/YourFeature`).
- Make your changes and commit them (`git commit -m 'Add YourFeature'`).
- Push to the branch (`git push origin feature/YourFeature`).
- Open a Pull Request.

## 📄 License

This project is not explicitly licensed. Please refer to the original repository for any licensing information.

## 🔗 Important Links

- **Live Demo:** [portfolio-nu-five-60.vercel.app](https://portfolio-nu-five-60.vercel.app/)
- **GitHub Repository:** [myselfanandvp/portfolio](https://github.com/myselfanandvp/portfolio)
- **GitHub:** [myselfanandvp](https://github.com/myselfanandvp)
- **LinkedIn:** [myselfanandvp](https://www.linkedin.com/in/myselfanandvp/)
- **X (Twitter):** [meAnandvp](https://x.com/meAnandvp)
