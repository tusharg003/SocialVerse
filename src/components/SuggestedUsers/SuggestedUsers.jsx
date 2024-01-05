import { Box, Flex, Text } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';
const SuggestedUsers = () => {
  return (
    <Flex
      flexDirection='column'
      mt={5}
      gap={2}
      position={'sticky'}
      // border={'1px solid black'}
      p={2}>
      <SuggestedHeader />
      <Flex justifyContent={'space-between'} px={3}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray'}>
          Suggested for you
        </Text>
        <Box
          color={'gray'}
          style={{ textDecoration: 'none' }}
          cursor={'pointer'}
          _hover={{ color: 'blue' }}>
          <Text fontWeight={'bold'} fontSize={12}>
            See All
          </Text>
        </Box>
      </Flex>
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
    </Flex>
  );
};
export default SuggestedUsers;
