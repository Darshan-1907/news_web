import React, { useState } from "react";

const Contact = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");  // To display form submission status

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (name && email && message) {
      setStatus("Thank you for reaching out! We will get back to you soon.");
    } else {
      setStatus("Please fill in all fields.");
    }

    // Optionally, reset form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>

          {status && (
            <div className="alert mt-3" role="alert">
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
