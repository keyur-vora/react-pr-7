import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Edit = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("course")) || []);

  useEffect(() => {
    setTitle(location?.state?.title);
    setDes(location?.state?.des);
  }, [location?.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedRecord = record.map((val) => {
      if (val.id === location?.state?.id) {
        val.title = title
        val.des = des
      }
      return val;
    });

    setRecord(updatedRecord);
    localStorage.setItem('course', JSON.stringify(updatedRecord));
    alert("Successfully Updated.");
    navigate('/');
  }

  return (
    <div className="container">
      <h2>Edit Course</h2>
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
              <input type="submit" value="Update" />
          </tbody>
        </table>
      </form>
      <Link to={'/'}>View</Link>
    </div>
  )
}

export default Edit;
