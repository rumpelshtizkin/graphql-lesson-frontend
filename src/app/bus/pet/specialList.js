import React from "react"

import {useQueryAllAvailablePets} from "./hooks/useQueryAllAvalaiblePets";

export const SpecialList = () => {

  const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets()

  const loaderJSX = loading && (
    <p>Loading ...</p>
  )

  const errorJSX = error && (
    <p>We have a problem: {error.message}</p>
  )

  const petsJSX = pets && pets.map(({id, name, weight, status, photo}) => (
    <div key={id} style={{marginBottom:40}}>
      <img src={photo.thumb} alt={name}/>
      <p>
        <span>Name: {name}</span><br/>
        <span>Weight: {weight}</span><br/>
        {
          status && <span>Status: {status}</span>
        }
      </p>
    </div>
  ))


  return (
    <>
      <button onClick={getAllAvailablePets}>Показать</button>
      {loaderJSX}
      {errorJSX}
      {petsJSX}
    </>
  )
}