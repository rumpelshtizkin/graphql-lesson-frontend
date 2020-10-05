import React from 'react';

import {useLogin} from './hooks/useMutationLogin';

export const LogIn = () => {
  const {handleChange, save, loading, error, username, token} = useLogin();

  if (loading) {
    return <p>Идет проверка пользователя...</p>
  }

  if (error) {
    return (
      <p>We have a problem: {error.message}</p>
    )
  }

  if (token) {
    localStorage.setItem(username, token);

    alert('User: ' + username + ' token: ' + localStorage.getItem(username))
  }

  const loginJSX = token && (
    <p>
      Добро пожаловать: {username}
    </p>
  );

  return (
    <>
      <h1>Login</h1>
      {loginJSX}
      <input type="text" placeholder="username" name="username" onChange={handleChange}/>
      <input type="password" placeholder="password" name="password" onChange={handleChange}/>
      <button type="submit" onClick={save}>Login</button>
    </>
  )
};