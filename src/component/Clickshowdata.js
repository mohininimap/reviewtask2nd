import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from "../data.json";
import "./Clickshowdata.css"
const Clickshowdata = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, []);
  const fun1 = () => {
    return (
      <>
      <h4>Users Data</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((item, index) => (show ? index < users.length : index < 2)).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </>
      
    );
  };
  const showData = () => {
    setShow(!show);
  };
  return (
    <>
      <div>{fun1()}</div>
      <button className={show ? "btn btn-primary" : "btn btn-success"} onClick={() => showData()}>To {show ? "Show Less" : "Show More"}</button>
    </>
  );
};
export default Clickshowdata;