import React, { useEffect, useState } from 'react'
import './home.css'

function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    console.log(users)

    return (
        <div className='home'>
            <h1>Users</h1>
            <div className="posts_container">
                {
                    users && users.map(user=>(
                        <div key={user.id} className="home_user">
                            <img src={user.thumbnailUrl} alt="banana" />
                            <strong>{user.title}</strong>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
