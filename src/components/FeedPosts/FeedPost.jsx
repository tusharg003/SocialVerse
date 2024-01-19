import { Box, Image, Text } from '@chakra-ui/react';
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
              <Box  pt={10} w={{ base: '100%', md: '40%' }}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default FeedPost;
