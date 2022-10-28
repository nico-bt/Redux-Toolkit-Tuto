import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { fetchUsers } from './userSlice'

export const UserView = () => {
    const userState = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
  return (
    <div>
        <h1>Users:</h1>
        { userState.loading && <h2> Loading... </h2>}

        {!userState.loading && userState.error ? <h2>{userState.error}</h2> : null}

        {userState.users.length>0 && userState.users.map(item => (
            <p key={item.id}>{item.name} - {item.email} </p>
        ))}
    </div>
  )
}
