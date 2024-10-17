import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // 可选：引入样式文件

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '', // 添加联系方式
    message: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    navigate('/');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info-panel">
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="tel" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required /> {/* 添加联系方式输入框 */}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

