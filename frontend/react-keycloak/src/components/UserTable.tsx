import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './UserTable.module.css'

function UserTable () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const params = new URLSearchParams()
    params.append('limit', '10')
    axios
      .get('https://jsonplaceholder.typicode.com/users', { params })
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

      <style jsx>{`
        .table {
            border: solid #aaa 3px;
            margin: 30px auto;
        }
        
        .table thead {
            border-bottom: solid #aaa 2px;
        }
        
        .table tr {
            border-bottom: solid #afafaf 2px;
            padding: 2px;
        }
        
        .table tr td {
            border-bottom: solid #afafaf 2px;
            padding: 2px;
        }
      `}</style>
    </div>
  )
}

export default UserTable
