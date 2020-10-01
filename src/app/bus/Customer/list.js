import React from "react"

import {useQueryAllCustomers} from "./hooks/useQueryAllCustomers"
import './style.css'


export const List = () => {

  const {loading, error, customers} = useQueryAllCustomers()

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return (
      <p>We have a problem: {error.message}</p>
    )
  }

  const customersJSX = customers.map(({username, name, dateCreated}) => (
    <p key={Math.random()}>
      <span>Username: {username}</span>
      <span>Name: {name}</span>
      <span>Date created: {dateCreated}</span>
    </p>
  ))


  return (
    <>
      <h1>Customers</h1>
      {customersJSX}
    </>
  )
}