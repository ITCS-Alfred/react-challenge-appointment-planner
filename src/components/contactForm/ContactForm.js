import React from "react";
import { useForm } from "react-hook-form";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div className="inputForm" >
    <form onSubmit={handleSubmit}>
      <input  
      value={name}
      className="name"
      type="text"
      onChange={(e) => setName(e.target.value)}
      {required: true};
      />
      <input  
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="phone"
      type="tel"
      pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
      {required: true};
      />
       <input  
       value={email}
      className="email"
      type="email"
      onChange={(e) => setEmail(e.target.value)}
      {required: true};
      />
      <input
      type="submit"
      />
      </form>
    </div>
  );
};
