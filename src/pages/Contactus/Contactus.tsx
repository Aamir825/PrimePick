
const Contactus = () => {
  return (
    <section className="py-10 my-10 bg-gray-50 rounded-xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Get in <span className="text-green-600">Touch</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Have questions, feedback, or need support? We’d love to hear from you.
          Fill out the form below or reach us through our contact details.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">📍 Address</h3>
              <p className="text-gray-600 text-sm">
                123 Market Street, Suite 500 <br />
                New York, NY 10001
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">📞 Phone</h3>
              <p className="text-gray-600 text-sm">+1 (123) 456-7890</p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">✉️ Email</h3>
              <p className="text-gray-600 text-sm">support@yourstore.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-200"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring focus:ring-green-200"
            />

            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 h-32 resize-none focus:ring focus:ring-green-200"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
