import { useBreakpointValue } from '@chakra-ui/react';
import ProfilePageHeaderSmall from './ProfilePageHeaderSmall';
import ProfilePageHeaderLarge from './ProfilePageHeaderLarge';

const ProfileHeader = () => {
  const screenSize = useBreakpointValue({
    base: 'small',
    lg: 'large',
  });

  return screenSize === 'small' ? (
    <ProfilePageHeaderSmall />
  ) : (
    <ProfilePageHeaderLarge />
  );
};

export default ProfileHeader;
