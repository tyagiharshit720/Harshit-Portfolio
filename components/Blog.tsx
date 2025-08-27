import Image from "next/image"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React.js Components",
      description:
        "Learn how to create reusable components in React.js and make your web applications more maintainable.",
      image: "/react-components-code.png",
      date: "Aug 27, 2025",
      author: "Harshit Tyagi",
      link: "#",
    },
    {
      id: 2,
      title: "MERN Stack Projects: From Idea to Deployment",
      description:
        "Step-by-step guide to building MERN Stack projects and deploying them on the cloud with best practices.",
      image: "/mern-stack-development.png",
      date: "Aug 20, 2025",
      author: "Harshit Tyagi",
      link: "#",
    },
    {
      id: 3,
      title: "Tips for Writing Clean JavaScript Code",
      description:
        "Enhance your coding skills with best practices and techniques to write clean, readable, and efficient JavaScript.",
      image: "/clean-javascript-code.png",
      date: "Aug 15, 2025",
      author: "Harshit Tyagi",
      link: "#",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50 xl:ml-80">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read the latest articles, tutorials, and insights on web development, full-stack projects, and technology
            trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                  <a href={post.link}>{post.title}</a>
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>by {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
