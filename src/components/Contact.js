import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('pending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: Contact details */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Contact Details</h2>
          <p className="mb-4">You can reach me through the following details or by filling out the contact form.</p>
          
          <ul className="mb-6">
            <li className="mb-4">
              <strong>Address:</strong> <br />
              BTM 1st Stage, <br />
              Bangalore, India
            </li>
            <li className="mb-4">
              <strong>Email:</strong> <br />
              aghattikar82@gmail.com
            </li>
            <li className="mb-4">
              <strong>Phone:</strong> <br />
              +91 87222 02312
            </li>
          </ul>

          <div className="flex space-x-4">
            <a href="https://medium.com/@aghattikar82" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              Medium
            </a>
            <a href="https://hashnode.com/@aghattikar82" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-400">
              Hashnode
            </a>
            <a href="https://twitter.com/aghattikar82?t=QvDmQHtL17Km1kqleO21cQ&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              Twitter
            </a>
            <a href="https://instagram.com/aghattikar82?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              Instagram
            </a>
            <a href="https://github.com/aghattikar82" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aghattikar82" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              LinkedIn
            </a>
          </div>

          {/* Embedded map for location */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.816753210942!2d77.61020227330235!3d12.919496316022041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14feda83edcb%3A0x1ffe76c71656a61c!2sGangotri%20Bar%20And%20Restaurant%2C%2060%20Feet%20Rd%2C%20Old%20Madiwala%2C%20Aicobo%20Nagar%2C%201st%20Stage%2C%20BTM%201st%20Stage%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1740866651234!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Send
            </button>
          </form>

          <div className="text-center mt-6">
            {formStatus === 'pending' && <p className="text-yellow-500">Sending your message...</p>}
            {formStatus === 'success' && <p className="text-green-500">Your message has been sent successfully!</p>}
            {formStatus === 'error' && <p className="text-red-500">Something went wrong, please try again.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
