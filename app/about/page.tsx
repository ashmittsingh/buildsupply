import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About BuildSupply
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Industry-leading construction materials trusted by professionals worldwide
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                To provide premium, innovative construction materials that enable professionals to create lasting, high-quality projects. We're committed to delivering products that exceed industry standards and support our customers' success.
              </p>
              <p className="mt-4 text-gray-600">
                Every product in our range is carefully formulated and tested to ensure it meets the demanding requirements of professional construction applications.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-gray-600">
                To be the most trusted name in construction materials by combining innovation, quality, and customer service excellence. We envision a future where our products and solutions are the first choice for professionals who demand the best.
              </p>
              <p className="mt-4 text-gray-600">
                We're investing in sustainable practices and advanced technologies to ensure our products meet today's needs while protecting the environment for future generations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Quality",
                description: "Uncompromising commitment to excellence in every product we manufacture.",
              },
              {
                title: "Innovation",
                description: "Continuous improvement through research and development of advanced formulations.",
              },
              {
                title: "Integrity",
                description: "Honest, transparent relationships with customers and partners.",
              },
              {
                title: "Sustainability",
                description: "Environmentally responsible practices throughout our operations.",
              },
              {
                title: "Customer Focus",
                description: "Dedicated to understanding and exceeding customer expectations.",
              },
              {
                title: "Excellence",
                description: "Setting and exceeding industry standards in all aspects of our business.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              By The Numbers
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "50+", label: "Premium Products" },
              { number: "25+", label: "Product Categories" },
              { number: "10,000+", label: "Projects Completed" },
              { number: "15+", label: "Years of Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Commitment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We're dedicated to providing exceptional products, expert support, and innovative solutions that help professionals succeed.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Product Innovation",
                description: "Continuous R&D to develop cutting-edge formulations that meet evolving industry needs.",
              },
              {
                title: "Customer Support",
                description: "Expert technical support and consultation available to assist with any project.",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control at every stage of manufacturing.",
              },
              {
                title: "Training & Education",
                description: "Comprehensive resources and training programs for professionals.",
              },
              {
                title: "Sustainability",
                description: "Eco-friendly products and sustainable manufacturing practices.",
              },
              {
                title: "Industry Leadership",
                description: "Setting standards and driving innovation in construction materials.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
