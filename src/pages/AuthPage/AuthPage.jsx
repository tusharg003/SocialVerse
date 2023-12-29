import { Box, Container, Flex, Link, Text, VStack } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <VStack
    m={0}
      bg={'gray.100'}
      minW={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      px={4}
      minH={'100vh'}>
      <Flex
        // make the name appear above the auth form in mobile screens
        gap={4}
        w={'75vw'}
        h={'95vh'}
        p={0}
        justifyContent={'center'}
        alignItems={'center'}>
        <Box display={{ base: 'none', md: 'block' }}>
          <VStack
            flex={2}
            alignItems={'flex-start'}
            p={'20px'}
            mx={'0'}
            my={'auto'}>
            <Text
              color={'blue.400'}
              fontSize={'4rem'}
              as={'b'}
              // fontFamily={'sans'}
              lineHeight={'4rem'}>
              SocialVerse
            </Text>
            <Text fontSize={'1.5rem'} asfontFamily={'sans'}>
              Build everlasting connections with SocialVerse.
            </Text>
          </VStack>
        </Box>
        <Container minW={'450px'} alignItems={'center'} justifyContent={'center'}>
          <AuthForm />
        </Container>
      </Flex>
      <Text fontSize={15} mb={2}>
        Made with ❤️ by{' '}
        <Link
          href='https://github.com/tusharg003'
          color={'blue.400'}
          isExternal>
          Tushar Gupta
        </Link>
      </Text>
    </VStack>
  );
};
export default AuthPage;
