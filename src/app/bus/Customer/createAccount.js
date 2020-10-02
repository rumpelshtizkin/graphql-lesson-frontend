import React from "react"

import {useCustomer} from "./hooks/useMutationCreateAccount"


export const CreateAccount = () => {
  const {handleChange, save} = useCustomer()

  return (
    <>
      <h1>Регистрация</h1>
      <form action='/' name='registration'>
        <input type="text" placeholder='name' onChange={handleChange}/>
        <input type="text" placeholder='username' onChange={handleChange}/>
        <input type="password" placeholder='password' onChange={handleChange}/>
        <button type='submit' onClick={save}>Зарегистрироваться</button>
      </form>
    </>
  )
}


