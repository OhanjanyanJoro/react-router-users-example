import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UsersItem(){
    
    const [user, setUser] = useState(null)
    const [isLaoding, setIsLoading] = useState(false)

    const {userId} = useParams()
    const getUser = async () => {
        // axios('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response.data))


        setIsLoading(true)

        try {
            const response = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
            setUser(response.data)
        } catch(e){
            console.log(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    
    return <div>
        {isLaoding && <img src="/Loader.gif" />}
        {
            !isLaoding && (
                    user ? (
                    <h1>user ID: {user.id},  user Name: {user.name}</h1>
                ) : 'user Not Found'
            )
        }
    </div>
    
   
    
}