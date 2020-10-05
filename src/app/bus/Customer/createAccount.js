import React from 'react';

import { useCustomer } from './hooks/useMutationCreateAccount';

export const CreateAccount = () => {
  const { handleChange, save, loading, error, createdAccount } = useCustomer();

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return (
      <p>We have a problem: {error.message}</p>
    )
  }

  const customerJSX = createdAccount && (
    <p>
      We already created customer with name: { createdAccount.name }
    </p>
  );

  return (
    <>
      <h1>Registration</h1>
      <input type="text" placeholder="name" name="name" onChange={handleChange} />
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={save}>Save</button>
      { customerJSX }
    </>
  )
};