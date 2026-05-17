import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black/5">

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            About <span className="text-purple-800">Us</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We build modern and scalable SaaS applications using the latest
            technologies like React.js, Tailwind CSS, and Spring Boot.
            Our mission is to create fast, secure, and user-friendly
            digital products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              Deliver high-quality web solutions that help businesses
              grow faster and smarter.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Vision
            </h2>

            <p className="mt-4 text-gray-600">
              Empower startups and enterprises with innovative
              software solutions and modern UI experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Team
            </h2>

            <p className="mt-4 text-gray-600">
              A passionate group of developers and designers focused
              on building amazing digital products.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;