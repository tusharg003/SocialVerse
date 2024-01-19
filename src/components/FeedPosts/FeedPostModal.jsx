import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import FeedPost from './FeedPost.jsx';
import Comment from '../Comment/Comment.jsx';

const FeedPostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent pt={1}>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={5}>
              <Box w={'60%'}>
                <FeedPost />
              </Box>
              <Box w={'40%'} pt={10} >
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default FeedPostModal;
