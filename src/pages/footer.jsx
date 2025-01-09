// Footer Component
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-sm">
              AgroChain is a leading catfish production company dedicated to helping farmers reduce input costs while maximizing output. We offer premium quality catfish, feeds, black soldier flies, duckweed, azolla, and a range of farm services. Our commitment to innovation and sustainability has made us one of the major players in the aquaculture industry.</p>
            </div>
  
            {/* Services Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services" className="text-sm hover:text-green-400">Water Treatment</a></li>
                <li><a href="/services" className="text-sm hover:text-green-400">Disease Management</a></li>
                <li><a href="/services" className="text-sm hover:text-green-400">Feed Production</a></li>
                <li><a href="/services" className="text-sm hover:text-green-400">Farm Management</a></li>
                <li><a href="/services" className="text-sm hover:text-green-400">Farm Construction</a></li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm">Email: <a href="" className="hover:text-green-400">agroprodchain@gmail.com</a></li>
                <li className="text-sm">Phone: +234 8061385589</li>
                <li className="text-sm">Address: Kaduna, Nigeria</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="mt-8 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Agrochain. All rights reserved.</p>
            <div className="mt-4">
              <a href="https://web.facebook.com/profile.php?id=100063830088647" className="text-white mx-2 hover:text-green-400">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="https://instagram.com/agroprodchain?igsh=dmR2ODVmdXh3NjB6" className="text-white mx-2 hover:text-green-400">
                <i className="fab fa-instagram"></i> instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  