import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/', {
                state: 'error notfound' 
            })
        }, 1500)
    }, [navigate])
    return (
        <>
            <div>Not Found</div>
        </>
    )
}
