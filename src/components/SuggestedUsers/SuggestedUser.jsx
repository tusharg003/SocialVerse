import { Avatar, AvatarBadge, Flex, Link, Text } from '@chakra-ui/react';

const SuggestedUser = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} px={3} py={'3px'}>
      <Flex alignItems={'center'}>
        <Avatar size={'sm'}>
          <AvatarBadge boxSize={'.6em'} border={'none'} bg={'green.400'} />
        </Avatar>
        <Flex flexDir={'column'} >
          <Text ml={2} fontSize={12}>
            Friend Gupta
          </Text>{' '}
          <Text ml={2} fontSize={10} lineHeight={1}>
            89 friends
          </Text>
        </Flex>
      </Flex>

      <Link
        color={'red.400'}
        style={{ textDecoration: 'none' }}
        cursor={'pointer'}
        _hover={{ color: 'blue' }}>
        <Text fontWeight={'bold'} fontSize={12}>
          Follow
        </Text>
      </Link>
    </Flex>
  );
};
export default SuggestedUser;
