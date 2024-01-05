import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const PostHeader = () => {
  return (
    <Flex
      px={'5'}
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
      my={4}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={'/'} size={'sm'} />
        <Flex flexDir={'column'}>
          <Box fontSize={14} fontWeight={'bold'}>
            Username
          </Box>
          <Box fontSize={11} color={'gray.500'}>
            Posted 3 weeks ago.
          </Box>
        </Flex>
      </Flex>

      <Box cursor={'pointer'}>
        <Text
          fontSize={14}
          fontWeight={'bold'}
          color={'red'}
          _hover={{ color: 'blue' }}
          transition={'.2s ease-in-out'}>
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};
export default PostHeader;
