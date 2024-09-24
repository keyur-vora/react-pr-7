import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Add = () => {
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("course")) || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      des: des,
    };

    let newRecord = [...record, obj];
    setRecord(newRecord);
    localStorage.setItem("course", JSON.stringify(newRecord));
    alert("Successfully added.");
    setTitle("");
    setDes("");
  };

  return (
    <div className="container">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Title </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Description </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setDes(e.target.value)}
                  value={des}
                  required
                />
              </td>
            </tr>
                <input type="submit" value="Add" />      
          </tbody>
        </table>
      </form>
      <Link to={'/'}>View</Link>
    </div>
  );
};

export default Add;
