import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import img from '../../../public/AuthPageImg.jpeg';

const ProfileHeader = () => {
  return (
    <VStack
      h={{ base: '35vh', md: '45vh' }}
      justifyContent={'space-between'}
      gap={0}
      boxShadow={'md'}>
      <Box
        h={'65%'}
        w={'100%'}
        className='ProfileBannerImage'
        overflow={'hidden'}
        borderBottomRadius={5}>
        <Image w={'fit'} bg={'red'} src={img} />
      </Box>
      <Flex
      
        gap={2}
        h={'35%'}
        w={'100%'}
        bg={'white'}
        className='profileBannerInfo'>
        <Avatar
          size={{ base: 'xl', md: '2xl' }}
          border={'4px solid white'}
          name='Tushar Gupta'
          top={'-50%'}
          ml={{ base: '2', md: '10' }}
        />
        <VStack alignItems={'flex-start'} gap={0} py={1}>
          <Text fontSize={{ base: '1.2em', md: '1.7em' }} fontWeight={'bold'}>
            Tushar Gupta
          </Text>
          <Text
            lineHeight={'.8em'}
            fontSize={{ base: '.7em', md: '1em' }}
            fontWeight={'500'}
            color={'gray'}
            top={'-55%'}>
            356 friends
          </Text>
        </VStack>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          ml={'auto'}
          alignSelf={'center'}
          justifyContent={'space-around'}
          gap={2}
          mr={'1em'}>
          <Button
            colorScheme='blue'
            fontSize={{ base: '.7em', md: '1em' }}
            size={{ base: 'xs', md: 'md' }}>
            Add Story
          </Button>
          <Button
            fontSize={{ base: '.7em', md: '1em' }}
            size={{ base: 'xs', md: 'md' }}>
            Edit Profile
          </Button>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default ProfileHeader;
