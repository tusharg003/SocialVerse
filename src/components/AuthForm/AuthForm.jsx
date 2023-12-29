import { Box, Button, Flex, Input, VStack } from '@chakra-ui/react';

const AuthForm = () => {
  return (
    <>
      <Box
        bg={'white'}
        boxShadow={'lg'}
        borderRadius={10}
        px={5}
        py={8}
        m={'auto'}>
        <VStack spacing={4}>
          <Input
            placeholder='Email or username'
            fontSize={20}
            size={'lg'}
            type='email'
          />
          <Input
            placeholder='Password'
            fontSize={20}
            size={'lg'}
            type='password'
          />
          <Button width={'full'} colorScheme='blue' size={'lg'}>
            Log in
          </Button>

          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            w={'full'}
            my={4}>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
          </Flex>

          <Button
            w={{ base: '100%', md: '100%' }}
            colorScheme='green'
            size={'lg'}>
            Create New Account
          </Button>
        </VStack>
      </Box>
    </>
  );
};
export default AuthForm;
