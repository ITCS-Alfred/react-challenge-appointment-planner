import React, { useState} from "react";
import App from "../../App";

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
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   const {name, phone, email} = e;
   if(name === contacts.name) {
     e.preventDefault();
     alert("Name already exists!");
   } else { 
     setName(contacts.concat(name));
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
