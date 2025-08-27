export default function Resume() {
  return (
    <section id="resume" className="py-20 xl:ml-80">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
            Aspiring Full Stack Developer with strong foundation in Java, JavaScript, React.js, Node.js, and databases.
            Passionate about building scalable web applications and contributing to innovative projects.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            rel="noreferrer"
          >
            <i className="bi bi-download"></i>
            Download Resume (PDF)
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Summary</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h4 className="text-xl font-semibold mb-3">Harshit Kumar Tyagi</h4>
              <p className="text-gray-600 italic mb-4">
                Full Stack Developer Intern at Merakii Group | Skilled in Java, JavaScript, React.js, Node.js, MySQL,
                MongoDB, and Git. Experienced in developing scalable applications and contributing to live client
                projects.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>New Delhi, India</li>
                <li>+91 7017754871</li>
                <li>tyagiharshit720@gmail.com</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {[
                {
                  degree: "B.Tech in Computer Science & Engineering",
                  period: "2020 - 2024",
                  institution: "AKTU Lucknow, Uttar Pradesh",
                },
                {
                  degree: "Diploma in Electronics Engineering",
                  period: "2016 - 2019",
                  institution: "BTEUP, Uttar Pradesh",
                },
                {
                  degree: "Intermediate (12th)",
                  period: "2016",
                  institution: "Gandhi Inter College, Muzaffarnagar",
                },
                {
                  degree: "High School (10th)",
                  period: "2014",
                  institution: "Saraswati Vidhya Mandir, Muzaffarnagar",
                },
              ].map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-blue-600">{edu.degree}</h4>
                  <p className="text-gray-500 mb-2">{edu.period}</p>
                  <p className="text-gray-600 italic">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h4 className="text-lg font-semibold text-blue-600">Full Stack Developer Intern</h4>
              <p className="text-gray-500 mb-2">Apr 2025 - Present</p>
              <p className="text-gray-600 italic mb-4">Merakii Group, Noida, India</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Developing full-stack web applications using React.js, Java, Spring Boot, and MySQL.</li>
                <li>• Collaborating with cross-functional teams on live client projects.</li>
                <li>• Implementing RESTful APIs, authentication, and database integration.</li>
                <li>
                  • Worked on ERP system and CRM with features like attendance tracking and role-based authentication.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-6">Projects (Academic & Personal)</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong className="text-blue-600">ERP System (MERN Stack):</strong> HR, Admin & Employee modules,
                  punch log, leave management.
                </li>
                <li>
                  <strong className="text-blue-600">Shop_Online (E-commerce):</strong> Backend project using React &
                  MongoDB.
                </li>
                <li>
                  <strong className="text-blue-600">Object Detection AI:</strong> Python-based AI model for real-time
                  detection.
                </li>
                <li>
                  <strong className="text-blue-600">Defence Website Prototype:</strong> Front-end project for Ministry
                  of Defence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
