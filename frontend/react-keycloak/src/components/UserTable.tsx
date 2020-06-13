import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './UserTable.module.css'

function UserTable () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users?limit=10')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  })

  return (
    <div>
      <table className={styles.table}>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Company</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map(user => {
            return (
              <tr key={user['id']}>
                <td>{user['id']}</td>
                <td>{user['name']}</td>
                <td>{user['username']}</td>
                <td>{user['company']['name']}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
