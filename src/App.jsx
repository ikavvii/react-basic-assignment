import { useEffect, useState } from 'react'
import UserProfile from './userProfile'
import './App.css'

export default function App () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers () {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/'
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()

        const formattedData = data.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          companyName: user.company.name,
          website: user.website,
          address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode
          }
        }))

        setUsers(formattedData)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <>
      {users.length > 0 ? (
        users.map(user => <UserProfile key={user.id} user={user} />)
      ) : (
        <p>Loading users...</p>
      )}
    </>
  )
}
