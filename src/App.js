import React, { Component } from 'react';
import ContactCard from "./ContactCard";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <ContactCard
        name="Soldier Boy"
        mobile="678-999-8212"
        work="877-393-4448"
        email="boy@soldier.com"
      />
      <ContactCard
        name="Jill Jack"
        mobile="718-555-5555"
        work="718-222-2222"
        email="jill@aol.org"
      />
      <ContactCard
        name="Mike Ike"
        mobile="347-555-5555"
        work="555-222-2222"
        email="mike@ike.com"
      />
    </>
  );
}

export default App;
