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
import { IoMdAdd, IoMdCamera } from 'react-icons/io';

import { MdEdit } from 'react-icons/md';
const ProfilePageHeaderSmall = () => {
  return (
    <VStack
      h={'50vh'}
      justifyContent={'space-between'}
      gap={0}
      boxShadow={'md'}>
      <Box
        h={'40%'}
        w={'100%'}
        className='ProfileBannerImage'
        overflow={'hidden'}
        borderBottomRadius={5}>
        <Image w={'fit'} bg={'red'} src={img} />
      </Box>
      <Flex
        flexDir={'column'}
        gap={2}
        h={'60%'}
        w={'100%'}
        bg={'white'}
        className='profileBannerInfo'
        pos={'relative'}
        alignItems={'center'}>
        <Avatar
          size='2xl'
          border={'4px solid white'}
          name='Tushar Gupta'
          top={'-30%'}>
          <Box
            as={Button}
            size={'sm'}
            pos={'absolute'}
            bottom={0}
            left={'70%'}
            bg={'gray.300'}
            p={1}
            borderRadius={'full'}>
            <IoMdCamera color='black' size={'1.2em'} />
          </Box>
        </Avatar>
        <VStack
          pos={'absolute'}
          top={'35%'}
          alignItems={'center'}
          gap={0}
          py={1}>
          <Text fontSize={'1.7em'} fontWeight={'bold'}>
            Tushar Gupta
          </Text>
          <Text
            fontSize={'.8em'}
            fontWeight={'500'}
            color={'gray'}
            top={'-55%'}>
            356 friends
          </Text>
          <Flex justifyContent={'space-between'} gap={2} mt={1}>
            <Button colorScheme='blue' size={'sm'} leftIcon={<IoMdAdd />}>
              Add Story
            </Button>
            <Button size={'sm'} leftIcon={<MdEdit />}>
              Edit Profile
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default ProfilePageHeaderSmall;
