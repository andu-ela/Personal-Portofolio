import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "f388efb2-af9d-4b92-863b-36cfe06967f6");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Display a message indicating the message is being sent
    Swal.fire({
      title: 'Sending...',
      text: 'Your message is being processed!',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading(); // Display loading spinner
      }
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        // Show success message after sending
        Swal.fire({
          title: 'Success!',
          text: 'Your message was sent successfully!',
          icon: 'success',
          timer: 3000, // Close automatically after 3 seconds
          showConfirmButton: false
        });
      } else {
        // Show error message in case of failure
        Swal.fire({
          title: 'Error!',
          text: 'Message sending failed!',
          icon: 'error',
          timer: 3000, // Close automatically after 3 seconds
          showConfirmButton: false
        });
      }
    } catch (error) {
      // Display error message in case of a request failure
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred! Please try again.',
        icon: 'error',
        timer: 3000,
        showConfirmButton: false
      });
    }

    // Clear the fields after sending the message
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
      <p className="text-xl text-cyan-400 mb-6">Let's work together!</p> 
      <form onSubmit={onSubmit} className="flex flex-col space-y-4 w-full max-w-md">
        <input 
          type="text" 
          placeholder="Full Name" 
          name="name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea 
          placeholder="Your Message" 
          name="message"
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          rows="4" 
          required
        ></textarea>
        <button 
          type="submit" 
          className="bg-cyan-600 text-white px-4 py-2 rounded shadow hover:bg-cyan-900 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
