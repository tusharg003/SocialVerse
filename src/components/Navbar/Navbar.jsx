import { Flex, Spacer, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      align='center'
      justify='space-around'
      h={'inherit'}
      px={12}
      bg='blue.500'
      gap={5}
      zIndex={10} // Optional: Set a higher z-index to ensure it's above other content
      color='white'>
      <Link href='#'>Home</Link>
      <Link href='#'>About</Link>
      <Link href='#'>Services</Link>
      <Spacer />
      <Flex gap={5}>
        <Link href='#'>Login</Link>
        <Link href='#'>Sign Up</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
