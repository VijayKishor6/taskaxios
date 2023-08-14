import React, { useState } from "react";
import "./Modal.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

export const Modal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [messageError, setMessageError] = useState("");
  console.log(nameError);

  const isFormValid = () => {
    return (
      nameError === "" &&
      emailError === "" &&
      phoneNumberError === "" &&
      messageError === ""
    );
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setNameError(value.match(/^[A-Za-z\s]+$/) ? "" : "Invalid name format");
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? ""
        : "Invalid email format"
    );
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    setPhoneNumberError(/^\d+$/.test(value) ? "" : "Invalid phone number");
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);
    setMessageError(value.match(/^[A-Za-z\s]+$/) ? "" : "Invalid message format");
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (isFormValid()) {
      const formData = {
        name: name,
        email: email,
        phone_number: phoneNumber,
        message: message,
      };
      console.log("Form data submitted:", formData); 
     await axios.post('https://fts-backend.onrender.com/user/newRegistration',formData )
      .then(response => {console.log(response); });      
      closeModal()
    }
  };


  return (
    <>
      <div className="modal-container">
        <div className="modals">
          <form>
            <h5>Name</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={name}
                onChange={handleNameChange}
              />
            </InputGroup>
            {nameError && <p className="error-message">{nameError}</p>}

            <h5>Email</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={email}
                onChange={handleEmailChange}
              />
            </InputGroup>
            {emailError && <p className="error-message">{emailError}</p>}

            <h5>Phone Number</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Phone Number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </InputGroup>
            {phoneNumberError && (
              <p className="error-message">{phoneNumberError}</p>
            )}

            <h5>Message</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Message"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={message}
                onChange={handleMessageChange}
              />
            </InputGroup>
            {messageError && <p className="error-message">{messageError}</p>}

            <div className="text-center">
              <Button onClick={handleSubmit} disabled={!isFormValid()}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
