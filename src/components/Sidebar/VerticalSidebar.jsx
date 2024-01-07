import { Box, Flex, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { BiLogOut } from 'react-icons/bi';

const VerticalSidebar = ({ sidebarItems }) => {
  return (
    <Box position='sticky' top={'0'} p={3} height='92vh' bg={'gray.100'}>
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
            as={RouterLink}
            to={'/auth'}
            gap={2}
            p={2}
            marginTop={'auto'}
            w={{ md: 'full' }}
            alignItems={'center'}
            borderRadius={6}
            _hover={{ bg: 'gray.300' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}>
            <BiLogOut size={25} />
            <Box ml={2} display={{ base: 'none', md: 'block' }}>
              Log Out
            </Box>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};
export default VerticalSidebar;
