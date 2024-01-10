import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        color={'white'}
        focusBorderColor='white'
        _placeholder={{ opacity: 0.9, color: 'white' }}
        placeholder='Email'
        fontSize={15}
        size={'sm'}
        type='email'
        value={inputs.email}
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
      />
      <Input
        color={'white'}
        focusBorderColor='white'
        _placeholder={{ opacity: 0.9, color: 'white' }}
        placeholder='Username'
        fontSize={15}
        size={'sm'}
        type='text'
        value={inputs.username}
        onChange={(e) => {
          setInputs({ ...inputs, username: e.target.value });
        }}
      />{' '}
      <Input
        color={'white'}
        focusBorderColor='white'
        _placeholder={{ opacity: 0.9, color: 'white' }}
        placeholder='Full Name'
        fontSize={15}
        size={'sm'}
        type='text'
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <InputGroup size={'sm'}>
        <Input
          color={'white'}
          focusBorderColor='white'
          _placeholder={{ opacity: 0.9, color: 'white' }}
          placeholder='Password'
          fontSize={15}
          type={showPassword ? 'text' : 'password'}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement>
          <Button
            color={'white'}
            variant={'flushed'}
            size={'xs'}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button width={'100%'} color='blue.500' size={'sm'}>
        Sign Up
      </Button>
    </>
  );
};
export default Signup;
