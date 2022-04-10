import {Link} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Users(){

    const [users, setUsers] = useState(null)

    const getUsers = async () => {
        // axios('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response.data))

        const response = await axios('https://jsonplaceholder.typicode.com/users')

        setUsers(response.data)

    }

    useEffect(() => {
        getUsers()
    }, [])

    
    return (
        <>
            <h1>users </h1>
            {
                users && users.length !== 0 && (
                    <ul>
                        {
                            users.map(user => (
                                <li key={user.id}> 
                                    <Link to={`/users/${user.id}`}> {user.name} </Link>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    )
}