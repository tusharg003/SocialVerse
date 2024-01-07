import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import ProfilePageHeaderSmall from './ProfilePageHeaderSmall';
import ProfilePageHeaderLarge from './ProfilePageHeaderLarge';

const ProfileHeader = () => {
  const screenSize = useBreakpointValue({
    base: 'small',
    lg: 'large',
  });

  return (
    <Flex flexDir={'column'} boxShadow={'md'} bg={'white'}>
      {screenSize === 'small' ? (
        <ProfilePageHeaderSmall />
      ) : (
        <ProfilePageHeaderLarge />
      )}
      <Divider w={'80%'} />
      <Flex
        alignItems={'center'}
        py={1}
        flex={1}
        justifyContent={{ lg: 'flex-start', base: 'center' }}
        px={2}
        gap={2}>
        <Button variant={'ghost'} w={'5em'}>
          About
        </Button>
        <Button variant={'ghost'} w={'5em'}>
          Posts
        </Button>
        <Button variant={'ghost'} w={'5em'}>
          Friends
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProfileHeader;
