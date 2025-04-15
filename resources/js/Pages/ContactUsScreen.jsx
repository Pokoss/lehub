import React from 'react'

function ContactUsScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 font-sans">
      <header className="bg-white shadow-lg p-6 text-center space-y-4">
        <img
          src="/images/team/dan.jpg"
          alt="Daniel's profile"
          className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-lg hover:scale-105 transition duration-500"
        />
        <h1 className="text-4xl font-extrabold text-indigo-600 animate-fade-in">
          Daniel's Portfolio
        </h1>
        <p className="text-lg text-gray-500 animate-fade-in delay-100">Graphic Designer & Full-Stack Developer</p>

        <div className="flex justify-center gap-4 mt-4 animate-fade-in-up delay-200">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 hover:scale-105 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-full shadow hover:bg-indigo-50 hover:scale-105 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto space-y-12" id="projects">
        {/* About Section */}
        <section className="bg-white p-6 rounded-2xl shadow-md animate-fade-in-up">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg">
            Hi, I'm Daniel. I specialize in creating engaging and impactful graphic designs, 
            beautiful user interfaces, and high-performance websites. I’m passionate about design, 
            innovation, and building meaningful experiences on the web.
          </p>
        </section>

        {/* Graphic Design Section */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Latest Graphic Design</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/images/graphics/6850073.png" alt="Flyer 2" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
            <img src="/images/graphics/continental.png" alt="Flyer 2" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
            <img src="/images/graphics/biashari.png" alt="Flyer 1" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
            <img src="/images/graphics/Kankou-01.png" alt="Poster 1" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
            <img src="/images/graphics/Kankou-02.png" alt="Flyer 2" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
            <img src="/images/graphics/1kg-01-01.jpg" alt="Flyer 2" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
          </div>
        </section>

        {/* UI/UX Design Section */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Latest UI/UX Design</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/images/graphics/kate-01.jpg" alt="UI Design 1" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
            <img src="/images/graphics/odds-01.jpg" alt="UX Design 1" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
            <img src="/images/graphics/papa-01.jpg" alt="UI Design 2" className="rounded-xl shadow-lg hover:scale-105 transition duration-300" />
          </div>
        </section>

        {/* Websites Section */}
        <section className="bg-white p-6 rounded-2xl shadow-md animate-fade-in-up">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Latest Website Projects</h2>
          <ul className="space-y-3">
            <li>
              <a href="https://medic-erp.com" className="text-blue-600 hover:underline text-lg">
                Medic Health Management
              </a>
            </li>
            <li>
              <a href="https://kirugeneralservices.co.ug" className="text-blue-600 hover:underline text-lg">
                Kiru General Services Limited
              </a>
            </li>
            <li>
              <a href="https://vialeykankoutours.com" className="text-blue-600 hover:underline text-lg">
                Vialey Kankou Tours and Travel
              </a>
            </li>
            <li>
              <a href="https://biashari.com" className="text-blue-600 hover:underline text-lg">
                Biashari ERP System
              </a>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center animate-fade-in-up">
          <p className="text-xl mt-4 font-semibold">Let’s work together!</p>
          <p className="text-gray-600">Email: danielopoka@lehub.dev | Phone: +256 752 553 236</p>
        </section>
      </main>

      <footer className="bg-indigo-600 text-white p-4 text-center mt-10 rounded-t-xl animate-fade-in">
        <p>&copy; {new Date().getFullYear()} Daniel. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default ContactUsScreen