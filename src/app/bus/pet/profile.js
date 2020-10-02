import React from "react"

// Hooks
import {useQueryProfile} from "./hooks/useQueryProfile";


export const Profile = () => {
  const {getProfile, loading, error, profile} = useQueryProfile()

  const loadProfile = () => {
    getProfile(
      {
        variables: {
          id: 'C-1'
        }
      }
    )
  }

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return (
      <p>We have a problem: {error.message}</p>
    )
  }

  const profileJSX = profile && (
    <div style={{border: '1px solid black'}}>
      <img src={profile.photo.thumb} alt={profile.name}/>
      <p>{profile.id} - {profile.name}</p>
    </div>
  )


  return (
    <div style={{marginBottom: 20}}>
      <h1>Profile</h1>
      <button onClick={loadProfile}>Профиль</button>
      {profileJSX}
    </div>
  )
}
