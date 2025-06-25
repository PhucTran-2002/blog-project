1. Initialize Project

npm create vite@latest
cd blog-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Cấu hình Tailwind trong tailwind.config.js:
content: ["./src/**/*.{js,jsx,ts,tsx}"],
Update src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

2. Folder Structure

src/
├── components/
│ ├── Auth
└──auth.jsx
│ ├── Header
└──header.jsx
│ ├── Home
└──homejsx
│ └── Login  
 └──login.jsx
│ └── Register
└──register.jsx
│ ├── App.jsx
└── index.js
