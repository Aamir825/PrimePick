
const About = () => {
  return (
    <section className="py-10 my-10 bg-gray-50 rounded-xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          About <span className="text-green-600">Our Store</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Welcome to our e-commerce platform, your one-stop destination for
          premium quality products. We bring you the latest trends, unbeatable
          prices, and a seamless shopping experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <div className="text-green-600 text-4xl mb-4">🚚</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Get your favorite products delivered to your doorstep quickly and
              safely with our trusted shipping partners.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <div className="text-green-600 text-4xl mb-4">💳</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600 text-sm">
              Shop with confidence knowing all transactions are secured with
              top-notch encryption.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <div className="text-green-600 text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quality Products
            </h3>
            <p className="text-gray-600 text-sm">
              We handpick every product to ensure the best quality, durability,
              and value for your money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
