import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box
        boxShadow={'lg'}
        borderRadius={10}
        bg='rgb(000, 000, 000, 0.6)'
        px={4}
        py={8}>
        <VStack spacing={4} padding={'1em'}>
          {isLogin ? (
            <>
              <Input
                color={'white'}
                focusBorderColor='white'
                _placeholder={{ opacity: 0.9, color: 'white' }}
                placeholder='Email or username'
                fontSize={15}
                size={'sm'}
                type='email'
              />
              <Input
                color={'white'}
                focusBorderColor='white'
                _placeholder={{ opacity: 0.9, color: 'white' }}
                placeholder='Password'
                fontSize={15}
                size={'sm'}
                type='password'
              />

              <Button width={'100%'} color='blue.500' size={'sm'}>
                Log in
              </Button>
            </>
          ) : (
            <>
              <Input
                color={'white'}
                focusBorderColor='white'
                _placeholder={{ opacity: 0.9, color: 'white' }}
                placeholder='Email'
                fontSize={15}
                size={'sm'}
                type='email'
              />
              <Input
                color={'white'}
                focusBorderColor='white'
                _placeholder={{ opacity: 0.9, color: 'white' }}
                placeholder='Username'
                fontSize={15}
                size={'sm'}
                type='text'
              />{' '}
              <Input
                color={'white'}
                focusBorderColor='white'
                _placeholder={{ opacity: 0.9, color: 'white' }}
                placeholder='Full Name'
                fontSize={15}
                size={'sm'}
                type='text'
              />
              <Input
                color={'white'}
                focusBorderColor='white'
                _placeholder={{ opacity: 0.9, color: 'white' }}
                placeholder='Password'
                fontSize={15}
                size={'sm'}
                type='password'
              />
              <Button width={'100%'} color='blue.500' size={'sm'}>
                Sign Up
              </Button>
            </>
          )}

          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            w={'100%'}
            my={1}>
            <Box flex={2} h={'1px'} bg={'white'}></Box>
            <Text px={2} color={'white'}>
              OR
            </Text>
            <Box flex={2} h={'1px'} bg={'white'}></Box>
          </Flex>

          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            cursor={'pointer'}
            lineHeight={'.1em'}>
            <Image src={'/google.png'} w={5} />
            <Text mx={'2'} color={'blue.500'} as={'b'} fontSize={15}>
              {isLogin ?'Log in ' :'Sign up '}
               with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* Create account */}
      <Box
        boxShadow={'lg'}
        borderRadius={10}
        bg='rgb(000, 000, 000, 0.6)'
        py={5}
        mt={5}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={2} as={'b'}>
          <Box color={'white'} fontSize={'15'}>
            {isLogin ? 'Dont have an account?' : 'Already have an account?'}
          </Box>
          <Box
            // color={'white'}
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            fontSize={'15'}
            cursor={'pointer'}
            color='blue.500'>
            {isLogin ? 'Sign Up' : 'Log In'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default AuthForm;
