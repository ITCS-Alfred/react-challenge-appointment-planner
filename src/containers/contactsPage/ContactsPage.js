import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList"; 

export const ContactsPage = ({ contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicate) { 
      addContact(name, email, phone);
     //clear the values
     setEmail("");
     setName("");
     setPhone("");
   }

   useEffect(() => {
   const nameIsDuplicate = () => {
   const duplicateChecker = contacts.map(contact => contact.name === name);
    if (duplicateChecker === true) {
      setDuplicate(true);
    }
    else {
      setDuplicate(false);
    }
  }
  }, [name, contacts, duplicate]);
   
   
  return (
    <div>
      <section>
        <h2>Add Contact
        {duplicate ? " - Name Already Exists" : ""}
        </h2> 
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} 
        setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <tileList contactArray={contacts} />
      </section>
    </div>
  );
  }