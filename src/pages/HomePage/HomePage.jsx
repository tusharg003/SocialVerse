import { Box, Container, Flex } from '@chakra-ui/react';
import FeedPosts from '../../components/FeedPosts/FeedPosts';

const HomePage = () => {
  return (
    <Box bg={'gray.100'}>
      <Container maxW={'container.lg'} minH='100vh' pt={3}>
        {' '}
        <Flex gap={20}>
          <Box flex={2} py={0} w={{base:'100%',md:'80%'}}>
            <FeedPosts />
          </Box>
          <Box
            flex={1}
            mr={10}
            display={{ base: 'none', md: 'block' }}
            maxW={'300px'}>
            Suggested Users
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default HomePage;
