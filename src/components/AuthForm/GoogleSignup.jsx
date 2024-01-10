import { Flex, Image, Text } from '@chakra-ui/react';

const GoogleSignup = () => {
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      cursor={'pointer'}
      lineHeight={'.1em'}>
      <Image src={'/google.png'} w={5} />
      <Text mx={'2'} color={'blue.500'} as={'b'} fontSize={15}>
        {/* {isLogin ? 'Log in ' : 'Sign up '} */}
        Login with Google
      </Text>
    </Flex>
  );
};
export default GoogleSignup;
