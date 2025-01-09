// AboutUs Component
const AboutUs = () => {
    return (
      <section className="bg-gray-50 text-gray-800 py-16">
        <div className="container mx-auto px-6">
          {/* About Us Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-green-600">About AgroChain</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              AgroChain is a leading catfish production company dedicated to helping farmers reduce input costs while maximizing output. We offer premium quality catfish, feeds, black soldier flies, duckweed, azolla, and a range of farm services. Our commitment to innovation and sustainability has made us one of the major players in the aquaculture industry.
            </p>
          </div>
  
          {/* Our Mission Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-green-600">Our Mission</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              At AgroChain, our mission is to revolutionize catfish farming by offering sustainable solutions that optimize farm operations and improve profitability. We strive to reduce the environmental impact of fish farming while supporting local farmers through affordable consultation, training, and tailored farm services.
            </p>
          </div>
  
          {/* What We Do Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">Catfish Production</h3>
              <p className="mt-4 text-gray-600">
                We specialize in high-quality catfish farming, using innovative techniques to enhance productivity and sustainability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">Feed Production</h3>
              <p className="mt-4 text-gray-600">
                Our feed production is designed to provide balanced nutrition for healthy and fast-growing fish.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">Black Soldier Fly Farming</h3>
              <p className="mt-4 text-gray-600">
                We produce black soldier flies as an alternative protein source for animal feed, improving sustainability in farming.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">Azolla and Duckweed Production</h3>
              <p className="mt-4 text-gray-600">
                Our azolla and duckweed production helps farmers reduce feed costs by providing affordable and nutritious options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">Consultation</h3>
              <p className="mt-4 text-gray-600">
                We offer expert consultation to help farmers optimize their operations, from farm setup to maximizing production.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">Farm Construction</h3>
              <p className="mt-4 text-gray-600">
                We provide farm construction services to create modern, efficient, and sustainable aquaculture facilities.
              </p>
            </div>
          </div>
  
          {/* Why Choose Us Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-green-600">Why Choose AgroChain?</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              AgroChain is committed to improving the livelihoods of local farmers through a combination of high-quality products, expert consultation, and farm services. Our vast experience and dedication to sustainable farming practices set us apart as a trusted partner in the aquaculture industry.
            </p>
          </div>
  
          {/* Our Impact Section */}
          <div className="bg-green-600 text-white text-center py-12">
            <h2 className="text-2xl font-semibold">Our Impact</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Over the years, AgroChain has played a pivotal role in transforming the catfish farming sector. We have helped countless farmers cut down input costs, increase production efficiency, and improve sustainability. Our impact continues to grow as we expand our services and innovations to more regions.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  