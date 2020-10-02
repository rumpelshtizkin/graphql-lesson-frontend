import React, {useState} from "react"


export const useCustomer = () => {

  const [values, setValues] = useState({
    account: {
      name: '',
      username: '',
      password: ''
    }
  })


  const handleChange = (event) => {
    event.persist()

    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [event.target.name]: event.target.value
      }
    }))

  }

  const save = () => {
    console.log(values)
  }


  return {
    values,
    handleChange,
    save
  }
}