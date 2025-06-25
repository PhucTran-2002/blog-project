<h2>I. Initialize Project</h2>

      1. npm create vite@latest
   
      2. cd blog-project
      
      3. npm install -D tailwindcss postcss autoprefixer
      
      4. npx tailwindcss init -p

Tailwind configuration in tailwind.config.js:

     content: ["./src/**/*.{js,jsx,ts,tsx}"],

Update src/index.css:

     @tailwind base;
     @tailwind components;
     @tailwind utilities;

 <h2>II. Folder Structure</h2>

![image](https://github.com/user-attachments/assets/03a3dc95-2888-42fb-9679-c0843e572c64)


