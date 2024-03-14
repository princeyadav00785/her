import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-4 text-center min-h-[100px]">
      <div className="container mx-auto text-xl">
      <p> Made with ❤️ by guardian_devil</p>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
