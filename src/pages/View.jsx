import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEdit,FaBook } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import './style.css'


const View = () => {

  const [record, setRecord] = useState([]);
  const [mdelete,setmdelete]=useState([])

  const navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('course')) || [];
    setRecord(data);
  }, []);

  const deletecours = (id) => {
    const del = record.filter((val) => val.id !== id);
    localStorage.setItem('course', JSON.stringify(del));
    setRecord(del);
  };

  const multipleDelete = (id, checked) => {
    let all = [...mdelete];
    if (checked) {
      all.push(id);
    } else {
      all = all.filter((val) => val != id);
    }
    setmdelete(all);
  }

  const allDelete = () => {
    if (mdelete.length == 0) {
      toast("minimum 1 row selected...");
      return false;
    }

    let all = record.filter((val) => !mdelete.includes(val.id));
    localStorage.setItem('course', JSON.stringify(all));
    setRecord(all);

  }

  return (
    <div className="container">
      <h2>View Page</h2>
      <table>
        <thead>
          <tr>
            <th><FaBook style={{fontSize:'20px',color:'#fff'}}/></th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
            <th style={{ fontSize: "30px", cursor: "pointer" }} scope="col" onClick={() => allDelete()}> <MdDelete /> </th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val) => {
              const { id, title, des } = val;
              return (
                <tr key={id}>
                  <td><FaBook style={{fontSize:'20px',color:'#6a5858'}}/></td>
                  <td>{title}</td>
                  <td>{des}</td>
                  <td>
                    <button onClick={() => navigate('/edit', { state: val })}><FaRegEdit /></button> ||
                    <button onClick={() => deletecours(id)}><MdDelete /></button>
                  </td>
                  <td>
                    <input type="checkbox" onChange={(e) => multipleDelete(id, e.target.checked)} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <Link to="/add">Add Course</Link>
    </div>
  );
}

export default View;
