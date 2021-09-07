import React from "react";

export const ContactPicker = (
 { name,
  contacts,
  onChange}
) => { 

  return (
    <div>
    <select name={name} onChange={onChange} >
    <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
     {contacts.map((contact) => {
      return (
        <option value={contact} key={contact}> </option>
      );
    })}
    </select>
    </div>
  ); 
};
