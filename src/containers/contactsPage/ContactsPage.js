import React, { useState} from "react";
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
  

  const handleSubmit = (e) => {
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   const {name, phone, email} = e;
   const duplicateChecker = contacts.map(contact => contact.name === name);
   if(duplicateChecker === true){
     e.preventDefault();
     alert("Name already exists!");
   }
   else { 
     addContact(name, email, phone);
    //clear the values
    setEmail("");
    setName("");
    setPhone("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
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