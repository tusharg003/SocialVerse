import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import GoogleSignup from './GoogleSignup';

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
        <VStack spacing={3} padding={'1em'}>
          {isLogin ? <Login /> : <Signup />}

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
        </VStack>
        <GoogleSignup />
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
