import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import img from '../../../../public/AuthPageImg.jpeg';
import { MdEdit } from 'react-icons/md';
import { IoMdAdd, IoMdCamera } from 'react-icons/io';

const ProfilePageHeaderLarge = () => {
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
        borderBottomRadius={5}
        pos={'relative'}>
        <Button
          pos={'absolute'}
          colorScheme='blackAlpha'
          size={'sm'}
          bottom={0}
          right={0}
          leftIcon={<MdEdit />}
          m={2}
          p={2}
          borderRadius={5}>
          Edit Banner
        </Button>

        <Image w={'fit'} src={img} />
      </Box>
      <Flex
        gap={2}
        h={'35%'}
        w={'100%'}
        bg={'white'}
        className='profileBannerInfo'>
        <Avatar
          size={'2xl'}
          colorScheme='cyan'
          border={'4px solid white'}
          name='Tushar Gupta'
          top={'-30%'}
          ml={'10'}
          pos={'relative'}>
          <Button
            size={'sm'}
            pos={'absolute'}
            bottom={0}
            left={'70%'}
            p={1}
            borderRadius={'full'}>
            <IoMdCamera color='black' size={'1.2em'} />
          </Button>
        </Avatar>

        <VStack alignItems={'flex-start'} gap={0} py={1}>
          <Text fontSize={'2em'} fontWeight={'bold'}>
            Tushar Gupta
          </Text>
          <Text
            lineHeight={'.8em'}
            fontSize={{ base: '.7em', md: '1em' }}
            fontWeight={'500'}
            color={'gray'}>
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
          <Button leftIcon={<IoMdAdd />} colorScheme='blue'>
            Add Story
          </Button>
          <Button leftIcon={<MdEdit />}>Edit Profile</Button>
        </Flex>
      </Flex>
    </VStack>
  );
};
export default ProfilePageHeaderLarge;
