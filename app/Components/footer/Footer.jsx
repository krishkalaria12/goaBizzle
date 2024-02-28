import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 w-full text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p className="mt-2">123 Main Street, Panaji, Goa</p>
          <p>Phone: +91 9876543210</p>
          <p>Email: info@goahomes.com</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Explore</h3>
          <ul>
            <li className="mb-1"><a href="#">Home</a></li>
            <li className="mb-1"><a href="#">About Us</a></li>
            <li className="mb-1"><a href="#">Listings</a></li>
            <li className="mb-1"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center lg:justify-start">
            <a href="#" className="mr-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 GoaBizzle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
