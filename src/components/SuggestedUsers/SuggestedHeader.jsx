import { Avatar, AvatarBadge, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} mb={4} px={2} >
      <Flex alignItems={'center'} gap={2}>
        <Avatar size={'md'}>
          <AvatarBadge boxSize={'.6em'} border={'none'} bg={'green.400'} />
        </Avatar>
        <Text fontWeight={'bold'} fontSize={14}>
          Username
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={'/auth'}
        color={'red.400'}
        style={{ textDecoration: 'none' }}
        cursor={'pointer'}
        _hover={{ color: 'blue' }}>
        <Text fontWeight={'bold'} fontSize={14}>
          Log out
        </Text>
      </Link>
    </Flex>
  );
};
export default SuggestedHeader;
