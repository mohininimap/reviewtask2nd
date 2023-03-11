import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from "../data.json";
import "./Clickshowdata.css"
const Clickshowdata = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const classn = show ? "btn1" : ""
  useEffect(() => {
    setUsers(data);
  }, []);

  const fun1 = () => {
    return (
    <table className="table table-striped">
    <thead>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>body</th>
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
    );
  };
  const showData = () => {
    setShow(true);
  };
  return (
    <>
      <div>{fun1()}</div>
      <button className={classn} onClick={() => showData()}>Show</button>
    </>
  );
};
export default Clickshowdata;
