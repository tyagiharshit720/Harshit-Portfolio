import Image from "next/image"

export default function About() {
  const personalInfo = [
    { label: "Birthday", value: "12 January 2000" },
    { label: "Website", value: "https://github.com/tyagiharshit720" },
    { label: "Phone", value: "+91 7017754871" },
    { label: "City", value: "New Delhi, India" },
    { label: "Age", value: "25" },
    { label: "Degree", value: "B.Tech in Computer Science Engineering" },
    { label: "Email", value: "tyagiharshit720@gmail.com" },
    { label: "Freelance", value: "Available" },
  ]

  return (
    <section id="about" className="py-20 xl:ml-80">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            I am a passionate <strong>Full Stack Developer</strong> with hands-on experience in building scalable and
            responsive web applications. Skilled in{" "}
            <strong>Java, JavaScript, React.js, Node.js, Spring Boot, and MySQL</strong>, I love crafting seamless user
            experiences and efficient back-end systems. Currently working as a{" "}
            <strong>Full Stack Developer Intern at Merakii Group</strong>, contributing to live projects and learning
            modern development workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/ME photo.jpg"
              alt="Harshit Kumar Tyagi"
              width={400}
              height={400}
              className="rounded-3xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Full Stack Developer & Tech Enthusiast</h2>
            <p className="text-gray-600 italic mb-6">
              Turning ideas into real-world applications by combining creativity, logic, and problem-solving.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2">
                  <i className="bi bi-chevron-right text-blue-600"></i>
                  <strong>{info.label}:</strong>
                  <span className="text-gray-600">{info.value}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600">
              With a strong foundation in web technologies and cloud platforms, I am eager to contribute to challenging
              projects, continuously learn new skills, and deliver impactful digital solutions. My focus is on building
              applications that not only work efficiently but also provide great user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
