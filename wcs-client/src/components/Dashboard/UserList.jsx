import React, { useEffect, useState } from 'react';
import { getAll } from '../../services';
import '../../styles/UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [tastes, setTastes] = useState([])
  console.log(users)

  useEffect(() => {
    Promise.all([getAll("users"), getAll("tastes")])
      .then(([usersData, tastesData]) => {
      setUsers(usersData);
      setTastes(tastesData);
      })
      .catch(error => console.log(error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
    <h1>UserList</h1>
    <table className='table-style'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Inscription Date</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Mail</th>
          <th>Taste ID</th>
        </tr>
      </thead>
        <tbody>
            {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{formatDate(user.date)}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.mail}</td>
            <td>
            {user.tastes && user.tastes.length > 0 ? (
            tastes.map(taste => (
            <td key={taste.id}>{taste.user_id}</td>))) : ("N/A")
            }
            </td>
          </tr>
        ))}
        </tbody>
    </table>
    </div>
  );
}

export default UserList;