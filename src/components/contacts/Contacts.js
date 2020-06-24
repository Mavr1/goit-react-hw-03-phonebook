import React from 'react';
import shortid from 'shortid';
import Button from '../button/Button';

const Contacts = ({ contacts, handleClick }) => {
  return (
    <ul className="contactsList">
      {contacts.map((item) => {
        const onClick = () => handleClick(item.id);
        return (
          <li key={shortid.generate()}>
            <span className="contactName">{item.name}</span>
            <span className="contactNumber">{item.number}</span>
            <Button name="Delete" clsn="btnDelete" onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
