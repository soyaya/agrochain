import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_73cf9ol', // Replace with your EmailJS Service ID
        'template_203wmav', // Replace with your EmailJS Template ID
        formState,
        '9clxg4xqpwpjwXAPl' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setFormState({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage('An error occurred while sending your message. Please try again.');
          console.error('EmailJS Error:', error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-600">Contact Us</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            We’d love to hear from you! Whether you have questions about our services or just want to get in touch, feel free to reach out. Our team is here to help!
          </p>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-semibold text-green-600">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="grid grid-cols-1 gap-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="text-lg font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="text-lg font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className={`px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg ${
                    isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-green-700'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>

          {/* Success/Error Messages */}
          {successMessage && (
            <p className="mt-4 text-center text-green-600 font-medium">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="mt-4 text-center text-red-600 font-medium">{errorMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
