import { Box, Container } from '@chakra-ui/react';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileFriendsGrid from '../../components/Profile/ProfileFriendsGrid/ProfileFriendsGrid';
import ProfileIntroGrid from '../../components/Profile/ProfileIntroGrid';

const ProfilePage = () => {
  return (
    <Box bg={'gray.100'} h={'fit'}>
      <Container
        maxW={{ base: '100vw', md: 'container.lg' }}
        px={{ base: 0, md: 4 }}>
        <ProfileHeader />
        {/* friendGrid */}
        <ProfileIntroGrid />
        <ProfileFriendsGrid />
      </Container>
    </Box>
  );
};
export default ProfilePage;
