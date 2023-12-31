import { Box, Container, Flex } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthPageImg from '/AuthPageImg.jpeg';
// Peach (#FFDAB9)
// Burnt Orange (#FFA500)
// Crimson (#DC143C)
// Lavender (#E6E6FA)
// Dark Slate Blue (#483D8B)

const AuthPage = () => {
  return (
    <Box bgGradient={'linear(to-b,yellow,#f09819)'}>
      <Flex
        backgroundImage={AuthPageImg}
        backgroundPosition={{ base: 'center', md: 'left' }}
        backgroundRepeat={'no-repeat'}
        bgSize={'cover'}
        alignItems={'center'}
        pos={'relative'}
        justifyContent='flex-end' // Aligns items to the end of the flex container
        h={'100vh'}>
        <Container
          minW={{ base: '80%', md: '450px' }}
          // m={{ base: 'auto', md: '5em' }} // Adjust margin-right as needed
        >
          <AuthForm />
        </Container>
      </Flex>
      {/* <Text
          pos={'absolute'}
          bottom={0}
          left={'50em'}
          p={2}
          fontSize={15}
          mb={2}>
          Made with ❤️ by{' '}
          <Link
            href='https://github.com/tusharg003'
            color={'blue.400'}
            isExternal>
            Tushar Gupta
          </Link>
        </Text> */}
    </Box>
  );
};
export default AuthPage;
