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
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React.js Components",
    slug: "understanding-react-components",
    description: "Learn how to create reusable components in React.js and make your web applications more maintainable.",
    image: "/react-components-code.png",
    date: "Aug 27, 2025",
    author: "Harshit Tyagi",
    content: `
      <h2>Introduction to React Components</h2>
      <p>React components are the building blocks of any React application. They let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
      
      <h2>Functional Components</h2>
      <p>Functional components are simply JavaScript functions that return JSX. With the introduction of Hooks, functional components can now manage state and side effects.</p>
      
      <pre><code>function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}</code></pre>
      
      <h2>Class Components</h2>
      <p>Class components are ES6 classes that extend from React.Component. They have additional features like state and lifecycle methods.</p>
      
      <pre><code>class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}</code></pre>
      
      <h2>When to Use Which</h2>
      <p>With the introduction of Hooks, functional components can do almost everything class components can do. The React team recommends using functional components for new projects.</p>
    `
  },
  {
    id: 2,
    title: "MERN Stack Projects: From Idea to Deployment",
    slug: "mern-stack-projects-guide",
    description: "Step-by-step guide to building MERN Stack projects and deploying them on the cloud with best practices.",
    image: "/mern-stack-development.png",
    date: "Aug 20, 2025",
    author: "Harshit Tyagi",
    content: `
      <h2>What is the MERN Stack?</h2>
      <p>The MERN stack is a popular JavaScript stack for building modern web applications. It consists of MongoDB, Express.js, React, and Node.js.</p>
      
      <h2>Setting Up Your Project</h2>
      <p>Start by creating a new directory for your project and initialize it with npm. Set up your backend with Express and Node, and your frontend with Create React App.</p>
      
      <h2>Building the API</h2>
      <p>Create RESTful APIs with Express that connect to your MongoDB database using Mongoose. Implement CRUD operations for your data models.</p>
      
      <h2>Creating the React Frontend</h2>
      <p>Develop your user interface with React, using components, state management, and routing. Connect to your backend APIs using Axios or Fetch.</p>
      
      <h2>Deployment</h2>
      <p>Deploy your backend to platforms like Heroku or DigitalOcean, and your frontend to Netlify or Vercel. Don't forget to set up environment variables for production.</p>
    `
  },
  {
    id: 3,
    title: "Tips for Writing Clean JavaScript Code",
    slug: "clean-javascript-tips",
    description: "Enhance your coding skills with best practices and techniques to write clean, readable, and efficient JavaScript.",
    image: "/clean-javascript-code.png",
    date: "Aug 15, 2025",
    author: "Harshit Tyagi",
    content: `
      <h2>Why Clean Code Matters</h2>
      <p>Clean code is easy to understand, maintain, and extend. It reduces bugs and makes collaboration with other developers much smoother.</p>
      
      <h2>Use Descriptive Names</h2>
      <p>Variables, functions, and classes should have names that clearly describe their purpose. Avoid abbreviations and single-letter names (except for loop counters).</p>
      
      <pre><code>// Bad
function p(u) {
  return u * 1.1;
}

// Good
function calculatePriceWithTax(price) {
  return price * 1.1;
}</code></pre>
      
      <h2>Keep Functions Small and Focused</h2>
      <p>Each function should do one thing and do it well. If a function is getting long, consider breaking it into smaller helper functions.</p>
      
      <h2>Consistent Formatting</h2>
      <p>Use a consistent code style throughout your project. Consider using a linter like ESLint and a formatter like Prettier to enforce consistency.</p>
      
      <h2>Comment When Necessary</h2>
      <p>Good code mostly documents itself, but add comments when you need to explain why something is done a certain way, not what the code is doing.</p>
    `
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}