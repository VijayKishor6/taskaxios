import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import UserTable from "./UserTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import { Modal } from "./Modal";

function App() {
 

  const [modalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState([""]);
  console.log(data);

  const fetchUserData = async () => {
    await axios
      .get(
        "https://fts-backend.onrender.com/admin/testing/getallusers?offset=1&limit=10"
      )
      .then((response) => {
        setData( response.data.response.paginationOutput.items)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-dark p-4"></div>
        </div>
      </div>
      <div className="container">
        <UserTable data={data} modalOpen={setModalOpen} fetchUserData={fetchUserData}/>
      </div>
      <div className="text-center">
        <Button onClick={() => setModalOpen(true)}>Add</Button>
      </div>
      <div>
        {modalOpen && (
          <Modal
            closeModal={() => {
              toast("Thanks For registering",false);
              setModalOpen(false);
            }}
          />
        )}
      </div>
    </>
  );
}

export default App;
