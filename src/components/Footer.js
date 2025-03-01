import React from 'react';
function Footer() {
    return (
      <footer className="bg-gray-900 text-white p-6 text-center mt-8">
        <p>© 2025 Anup Ghattikar</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li><a href="your_github_link" target="_blank" className="hover:text-gray-400">GitHub</a></li>
          <li><a href="your_linkedin_link" target="_blank" className="hover:text-gray-400">LinkedIn</a></li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;
  