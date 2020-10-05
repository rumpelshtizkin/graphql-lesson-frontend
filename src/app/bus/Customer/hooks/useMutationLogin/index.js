import {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

// Mutations
const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useLogin = () => {
  const [loginUser, {loading, error, data}] = useMutation(mutationLogin);
  const [values, setValues] = useState({
    account: {
      password: '',
      username: ''
    }
  });

  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [event.target.name]: event.target.value,
      }
    }));
  };


  const save = () => {
    const {account} = values;

    loginUser({
      variables: {
        password: account.password,
        username: account.username
      }
    })
  };


  return {
    handleChange,
    loading,
    error,
    save,
    username: values.account.username,
    token: data && data.logIn.token
  }
};