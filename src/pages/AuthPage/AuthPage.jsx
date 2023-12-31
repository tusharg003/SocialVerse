import { Box, Container, Flex, Text } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthPageImg from '/AuthPageImg.jpeg';
import { Link } from 'react-router-dom';
// Peach (#FFDAB9)
// Burnt Orange (#FFA500)
// Crimson (#DC143C)
// Lavender (#E6E6FA)
// Dark Slate Blue (#483D8B)

const AuthPage = () => {
  return (
    <Box bgGradient={'linear(to-b,yellow,#f09819)'} pos={'relative'}>
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

      {/* BUTTOM NAVIGATION TEXT */}
      <Text
        bg='rgba(0, 0, 0, 0.4)'
        w={'100%'}
        // as={'b'}
        color={'white'}
        pos={'absolute'}
        bottom={0}
        left={'50%'}
        transform='translate(-50%, -50%)'
        fontSize={12}
        mb={2}
        textAlign='center' // Added textAlign prop for horizontal centering
      >
        Made with ❤️ by{' '}
        <Link
          href='https://github.com/tusharg003'
          color={'blue.400'}
          isExternal>
          Tushar Gupta
        </Link>
      </Text>
    </Box>
  );
};
export default AuthPage;
