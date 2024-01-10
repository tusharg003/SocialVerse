import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert('Please fill all the feilds');
      return;
    }
    navigate('/');
  };
  return (
    <>
      <Input
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        color={'white'}
        focusBorderColor='white'
        _placeholder={{ opacity: 0.9, color: 'white' }}
        placeholder='Email or username'
        fontSize={14}
        size={'sm'}
        type='email'
      />
      <Input
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        color={'white'}
        focusBorderColor='white'
        _placeholder={{ opacity: 0.9, color: 'white' }}
        placeholder='Password'
        fontSize={14}
        size={'sm'}
        type='password'
      />

      <Button width={'100%'} color='blue.500' size={'sm'} onClick={handleAuth}>
        Log in
      </Button>
    </>
  );
};
export default Login;
