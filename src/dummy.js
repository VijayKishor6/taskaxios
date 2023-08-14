import React from "react";
import "./Modal.css";
import { Button, Form, InputGroup } from "react-bootstrap";

export const Modal = ({ closeModal }) => {
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
              />
            </InputGroup>
            <h5>Email</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <h5>Phone Number</h5>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                placeholder="Phone Number "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <h5>Message</h5>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Message"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </form>
          <div className="text-center">
            <Button onClick={closeModal}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};


const formData = {
  name: name,
  email: email,
  phoneNumber: phoneNumber,
  message: message,
};

// Perform your submit logic here, like sending formData to a server
// For demonstration purposes, we'll log the form data
console.log("Form data submitted:", formData);

// Close the modal after successful submission
closeModal();
}
};
In this example, whe



const [modalOpen, setModalOpen] = useState("");



// const UserTable=({
//   stateB,
// setStateB,

// })=>{

// const deletedata = (index) => {
//   const x = [...stateB];
//   x.splice(index, 1);
//   setStateB(x);
// };

// const editData = (user) => {
//   setName(user.name);
//   setEmail(user.email);
//   setPhoneNumber(user.phone_number);
//   setMessage(user.message);
// };