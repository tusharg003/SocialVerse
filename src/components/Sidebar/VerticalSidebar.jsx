import { Alert, AlertIcon, Box, Button, Flex, Tooltip } from '@chakra-ui/react';

import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import { useEffect } from 'react';

const VerticalSidebar = ({ sidebarItems }) => {
  const { handleLogout, loggingOut, error } = useLogout();

  useEffect(() => {
    if (error) {
      alert(`Error: ${error.message}`);
    }
  }, [error]);

  return (
    <Box position='sticky' top={'0'} p={3} height='93vh' bg={'gray.100'}>
      <Flex direction='column' gap={2} cursor='pointer' height='100%'>
        {sidebarItems.map((item, index) => (
          <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement='right'
            openDelay={500}
            ml={1}
            display={{ base: 'block', md: 'none' }}>
            <Flex
              borderRadius={6}
              _hover={{ bg: 'gray.300' }}
              px={2}
              py={2}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              alignItems={'center'}>
              <Box>{item.icon}</Box>
              <Box ml={3} display={{ base: 'none', md: 'block' }}>
                {item.text}
              </Box>
            </Flex>
          </Tooltip>
        ))}
        <Tooltip
          hasArrow
          label={'Log-Out'}
          placement='right'
          openDelay={500}
          ml='1'
          display={{ base: 'block', md: 'none' }}>
          <Flex
            onClick={handleLogout}
            gap={2}
            p={2}
            marginTop={'auto'}
            w={{ md: 'full' }}
            alignItems={'center'}
            borderRadius={6}
            _hover={{ bg: 'gray.300' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}>
            <BiLogOut size={25} />
            <Button
              variant={'ghost'}
              _hover={{ bgColor: 'transparent' }}
              ml={2}
              display={{ base: 'none', md: 'block' }}
              isLoading={loggingOut}>
              Log Out
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
      {/* Display an alert for the error */}
      {error && (
        <Alert status='error' mt={4} borderRadius={6}>
          <AlertIcon />
          {error.message}
        </Alert>
      )}
    </Box>
  );
};
export default VerticalSidebar;
