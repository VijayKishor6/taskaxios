import React from "react";
import moment from "moment/moment";
import { Button,  Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

function UserTable({ data,modalOpen ,fetchUserData}) {

  console.log(modalOpen,"modalOpen")
  const deleteData=async(id)=>{
    await axios.delete(`https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${id}`)
    .then(() => { toast("Thanks For deleting",false);});
    fetchUserData();
  }
  const editData = (user) =>{
    
  
  }
 
  return (
    <div className="mt-5">
      <h3 className="mb-3">Fetching the Data's</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 1 ? (
            data?.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.message}</td>
                  <td>{moment(user.createdAt).format("MM/DD/YYYY")}</td>
                  <td>{moment(user.updatedAt).format("MM/DD/YYYY")}</td>
                  <td>
                    <Button
                        onClick={() => {editData(user)
                        modalOpen(true);
                        }}
                        style={{                       
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        color: "black",
                      }}
                    >
                      <AiFillEdit/>
                    </Button>
                    <Button
                        onClick={() => deleteData(user.id)}
                        style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        color: "black",
                      }}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-center " colSpan={8}>
                <h3>No Data Found</h3>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
