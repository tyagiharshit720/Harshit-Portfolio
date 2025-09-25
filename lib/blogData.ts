// lib/blogData.ts
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string;
  category: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React.js Components: A Comprehensive Guide",
    slug: "understanding-react-components",
    description: "Learn how to create reusable components in React.js and make your web applications more maintainable with modern patterns and best practices.",
    image: "/react-components-code.png",
    date: "Aug 27, 2025",
    author: "Harshit Tyagi",
    category: "React",
    readTime: "8 min read",
    tags: ["React", "Components", "JavaScript"],
    featured: true,
    content: `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">Introduction to React Components</h2>
        <p class="text-gray-700 leading-relaxed">React components are the building blocks of any React application. They let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
        
        <h2 class="text-2xl font-bold text-gray-800">Functional Components</h2>
        <p class="text-gray-700 leading-relaxed">Functional components are simply JavaScript functions that return JSX. With Hooks, functional components can now manage state, lifecycle methods, and side effects.</p>
        
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto"><code class="language-js">function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}</code></pre>

        <h2 class="text-2xl font-bold text-gray-800">Class Components</h2>
        <p class="text-gray-700 leading-relaxed">Class components are ES6 classes that extend React.Component. They provide state and lifecycle methods for more complex behavior.</p>
        
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto"><code class="language-js">class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}</code></pre>

        <h2 class="text-2xl font-bold text-gray-800">Best Practices & Tips</h2>
        <ul class="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
          <li>Use functional components for new projects.</li>
          <li>Keep components small and focused on a single responsibility.</li>
          <li>Organize files with a clear folder structure (components, pages, utils).</li>
          <li>Use PropTypes or TypeScript for type safety.</li>
          <li>Leverage hooks like useState, useEffect, useContext for state and side effects.</li>
        </ul>
      </section>
    `
  },
  {
    id: 2,
    title: "MERN Stack Projects: From Idea to Deployment",
    slug: "mern-stack-projects-guide",
    description: "Step-by-step guide to building MERN Stack projects and deploying them on the cloud with best practices and production-ready configurations.",
    image: "/mern-stack-development.png",
    date: "Aug 20, 2025",
    author: "Harshit Tyagi",
    category: "Full Stack",
    readTime: "12 min read",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    featured: true,
    content: `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">What is the MERN Stack?</h2>
        <p class="text-gray-700 leading-relaxed">MERN stands for MongoDB, Express.js, React, and Node.js. It is a full-stack JavaScript solution for building modern web applications.</p>

        <h2 class="text-2xl font-bold text-gray-800">Step 1: Setting Up the Project</h2>
        <p class="text-gray-700 leading-relaxed">Create a new project directory, initialize npm, and install dependencies. Structure your folders for backend and frontend separately for clarity.</p>

        <h2 class="text-2xl font-bold text-gray-800">Step 2: Building the Backend API</h2>
        <p class="text-gray-700 leading-relaxed">Use Express.js to create RESTful APIs and Mongoose to interact with MongoDB. Implement CRUD operations for data management.</p>
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto"><code class="language-js">const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb');

app.listen(5000, () => console.log('Server running on port 5000'));</code></pre>

        <h2 class="text-2xl font-bold text-gray-800">Step 3: Frontend with React</h2>
        <p class="text-gray-700 leading-relaxed">Create React components, manage state with useState or Redux, and make API calls to your backend with Axios or Fetch.</p>

        <h2 class="text-2xl font-bold text-gray-800">Step 4: Deployment</h2>
        <p class="text-gray-700 leading-relaxed">Deploy backend on platforms like Heroku or DigitalOcean. Deploy frontend on Netlify or Vercel. Configure environment variables and ensure CORS settings are correct.</p>
      </section>
    `
  },
  {
    id: 3,
    title: "Tips for Writing Clean JavaScript Code",
    slug: "clean-javascript-tips",
    description: "Enhance your coding skills with best practices and techniques to write clean, readable, and efficient JavaScript code that scales.",
    image: "/clean-javascript-code.png",
    date: "Aug 15, 2025",
    author: "Harshit Tyagi",
    category: "JavaScript",
    readTime: "6 min read",
    tags: ["JavaScript", "Best Practices", "Clean Code"],
    content: `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-800">Why Clean Code Matters</h2>
        <p class="text-gray-700 leading-relaxed">Clean code is easier to read, maintain, and scale. It reduces bugs and improves collaboration in a team environment.</p>

        <h2 class="text-2xl font-bold text-gray-800">Descriptive Names</h2>
        <p class="text-gray-700 leading-relaxed">Choose meaningful variable and function names. Avoid unclear abbreviations.</p>
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto"><code class="language-js">// Bad
function p(u) { return u * 1.1; }

// Good
function calculatePriceWithTax(price) { return price * 1.1; }</code></pre>

        <h2 class="text-2xl font-bold text-gray-800">Keep Functions Small</h2>
        <p class="text-gray-700 leading-relaxed">Functions should perform one task only. Break large functions into smaller helpers for readability.</p>

        <h2 class="text-2xl font-bold text-gray-800">Consistent Formatting</h2>
        <p class="text-gray-700 leading-relaxed">Use a linter like ESLint and a formatter like Prettier to maintain consistency across your project.</p>

        <h2 class="text-2xl font-bold text-gray-800">Comments and Documentation</h2>
        <p class="text-gray-700 leading-relaxed">Comment code only when necessary, focusing on why rather than what. Write documentation for complex modules or APIs.</p>
      </section>
    `
  },
];

// Utility functions remain the same
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}
