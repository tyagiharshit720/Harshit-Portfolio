export default function Services() {
  const services = [
    {
      icon: "bi-laptop",
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with RESTful APIs, authentication, and database integration.",
    },
    {
      icon: "bi-code-slash",
      title: "Web Development",
      description:
        "Responsive and user-friendly websites using HTML, CSS, JavaScript, React.js, and modern frontend frameworks for seamless user experience.",
    },
    {
      icon: "bi-phone",
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications with modern frameworks for smooth performance and excellent user experience.",
    },
    {
      icon: "bi-cloud-upload",
      title: "Cloud & Deployment",
      description:
        "Deploying applications on cloud platforms like AWS, VPS, and configuring servers, SSL certificates, and Nginx for production readiness.",
    },
    {
      icon: "bi-palette",
      title: "UI/UX Design",
      description:
        "Designing visually appealing and user-friendly interfaces for web and mobile applications, focusing on interaction and user-centric experience.",
    },
  ]

  return (
    <section id="services" className="py-20 xl:ml-80">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Providing a wide range of IT services and solutions, from full-stack development to UI/UX design, ensuring
            modern, scalable, and efficient applications for clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <i
                    className={`bi ${service.icon} text-3xl text-blue-600 group-hover:text-blue-700 transition-colors`}
                  ></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
