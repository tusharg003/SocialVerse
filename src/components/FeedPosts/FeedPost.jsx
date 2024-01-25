import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  VStack,
} from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import defaultImg from '../../../public/AuthPageImg.jpeg';
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Comment from '../Comment/Comment.jsx';
import { IoSend } from 'react-icons/io5';
const FeedPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box boxShadow={'md'} borderRadius={10} bg={'white'}>
        <PostHeader />
        <Box>
          <Text px={5} fontSize={'sm'}>
            this is a sample caption lorem
          </Text>
          <Image src={defaultImg} alt='default image' />
        </Box>
        <PostFooter openModal={onOpen} isOpen={isOpen} />
      </Box>
      {/* all comment modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: '5xl', md: '4xl' }}
        isCentered>
        <ModalOverlay />
        <ModalContent pt={1}>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={5} flexDirection={{ base: 'column', md: 'row' }}>
              <Box w={{ base: '100%', md: '60%' }}>
                <FeedPost />
              </Box>
              <VStack
                mb={2}
                mt={10}
                w={{ base: '100%', md: '40%' }}
                justifyContent={'space-between'}>
                <Box h={'80vh'} overflowY={'auto'}>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </Box>

                <InputGroup size={'sm'} borderRadius={3} py={1}>
                  <InputLeftAddon
                    border={'hidden'}
                    cursor={'pointer'}
                    bg={'white'}>
                    <Avatar size={'xs'} />
                  </InputLeftAddon>
                  <Input variant={'flushed'} placeholder='Post a Comment!' />

                  <InputRightAddon
                    as={Button}
                    ml={3}
                    bg={'white'}
                    border={'hidden'}
                    borderRadius={'50%'}
                    p={2}
                    transition={'0.2s ease-in-out'}>
                    <IoSend />
                  </InputRightAddon>
                </InputGroup>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default FeedPost;
