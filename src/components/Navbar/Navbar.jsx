import {
  Flex,
  Box,
  Image,
  Text,
  Input,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import favicon from '../../../public/favicon.jpeg';
import { BiLogIn, BiUserPlus } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const Navbar = () => {
  const [user, ,] = useAuthState(auth);

  return (
    <Flex
      boxShadow={'md'}
      align='center'
      h={'inherit'}
      px={2}
      bg='white'
      justifyContent={'space-between'}
      zIndex={10} // Optional: Set a higher z-index to ensure it's above other content
      color='black'>
      <Flex alignItems={'center'}>
        <Box w={'5vh'} justifyContent={'center'} alignItems={'center'}>
          <Image src={favicon} borderRadius={'50%'} />
        </Box>
        <Text
          display={{ base: 'none', md: 'block' }}
          fontFamily={'Bevan'}
          fontSize={24}
          ml={2}>
          Social Verse
        </Text>
        {user && (
          <Box ml={4}>
            <Input
              placeholder='Search'
              variant={'unstyled'}
              py={2}
              px={4}
              w={{ base: '200px', md: '325px' }}
              bgColor={'gray.100'}
              borderRadius={'50'}></Input>
          </Box>
        )}
      </Flex>
      <Flex gap={2}>
        {!user ? (
          <>
            <Button
              size={'md'}
              colorScheme='blue'
              leftIcon={<BiLogIn size={'1.5em'} />}
              w='120px' // Set a fixed width
            >
              Login
            </Button>
            <Button
              size={'m2'}
              colorScheme='green'
              leftIcon={<BiUserPlus size={'1.5em'} />}
              w='120px' // Set a fixed width
            >
              Signup
            </Button>
          </>
        ) : (
          <Tooltip hasArrow label='Log Out'>
            <Box mr={1} cursor={'pointer'}>
              <BiLogIn size={'1.5em'} />
            </Box>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
