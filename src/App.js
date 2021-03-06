import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

export default function App(props) {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      name:"",
      phoneNumber: "",
      email: ""
    },
  ]);
  const [appointments, setAppointments] = useState([
    {
      title: "",
      contact: "",
      date: "",
      time: ""
    },
  ]);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  }; 

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    setContacts(
   [
    ...contacts,

    {
      name: "",
      phoneNumber: "",
      email: ""
    },
  ],
    )
};


  const addAppointment = (title, contact, date, time) => {
    setAppointments(
   [
    ...appointments,

    {
      title: "",
      contact: "",
      date: "",
      time: ""
    },
  ]);

  }

  
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}


