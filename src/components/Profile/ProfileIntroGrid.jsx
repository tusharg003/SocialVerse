import { Button, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import { IoHome } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
const ProfileIntroGrid = () => {
  return (
    <Flex
      flexDirection={'column'}
      borderRadius={5}
      boxShadow={'md'}
      bg={'white'}
      mt={4}
      px={3}
      py={4}
    //   mx={{ base: '3', lg: '0' }}
      minH={'20vh'}
      gap={2}>
      <Flex justifyContent={'space-between'}>
        <Text fontSize={'1.2em'} fontWeight={600}>
          Intro
        </Text>
        <Button size={'sm'} variant={'ghost'} leftIcon={<MdEdit />}>
          Edit
        </Button>
      </Flex>
      <Text fontSize={'.9em'} py={2}>
        Hello this is Tushar Gupta, a React Developer and a designer with
        interest in FullStack engineering{' '}
      </Text>
      <Divider />
      <VStack alignItems={'flex-start'} ml={2} gap={0}>
        <Flex alignItems={'center'} gap={2}>
          <IoHome color='gray' />
          <Text fontSize={'.9em'} py={2}>
            lives in Bakura
          </Text>
        </Flex>{' '}
        <Flex alignItems={'center'} gap={2}>
          <FaLocationDot color='gray' />
          <Text fontSize={'.9em'} py={2}>
            from Bakura
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};
export default ProfileIntroGrid;
