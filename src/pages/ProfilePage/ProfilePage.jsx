import { Box, Container, Flex } from '@chakra-ui/react';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileFriendsGrid from '../../components/Profile/ProfileFriendsGrid/ProfileFriendsGrid';
import ProfileIntroGrid from '../../components/Profile/ProfileIntroGrid';
import FeedPosts from '../../components/FeedPosts/FeedPosts';

const ProfilePage = () => {
  return (
    <Box bg={'gray.100'} h={'fit'}>
      <Container
        maxW={{ base: '100vw', md: 'container.lg' }}
        px={{ base: 0, md: 4 }}
        py={4}>
        <ProfileHeader />
        <Flex
          px={{ base: 3, md: 0 }}
          flexDir={{ base: 'column', lg: 'row' }} // Set direction based on screen size
          gap={{ base: 0, lg: 4 }}>
          <Flex
            pos={{ base: 'static', lg: 'sticky' }} // Set sticky position on lg screens
            top={{ base: 'auto', lg: '-1' }} // Adjust top position on lg screens
            zIndex={1}
            className='profileLeftSide'
            flexDir={'column'}
            gap={0}
            maxWidth={{ base: '100%', lg: '25vw' }}
            h={'fit-content'}>
            {/* Left side*/}
            <ProfileIntroGrid />
            <ProfileFriendsGrid />
          </Flex>
          {/* Right side */}
          <Flex
            zIndex={2}
            flexDir={'column'}
            flexGrow={1}
            className='profileRightSide'>
            <FeedPosts />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProfilePage;
