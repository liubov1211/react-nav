import React from "react";
import { initContacts } from './people/contacts';

const ContactsPage = ({ item }) => {
    return (
        <div>{initContacts.map((item) => {
            return (
                <div className="blockStyle">
                    <h3> {item.firstName} {item.lastName} </h3>
                    <div> {item.phone} </div>
                </div>
            )
        })}</div>

    )
}

export default ContactsPage;