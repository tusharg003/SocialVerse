import { Box, Container } from '@chakra-ui/react';
import ProfileHeader from '../../components/Profile/ProfileHeader';

const ProfilePage = () => {
  return (
    <Box bg={'gray.100'} h={'100vh'}>
      <Container
        maxW={{ base: '100vw', md: 'container.lg' }}
        px={{ base: 0, md: 4 }}>
        <ProfileHeader />
      </Container>
    </Box>
  );
};
export default ProfilePage;
