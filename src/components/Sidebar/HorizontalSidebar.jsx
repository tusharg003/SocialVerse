import { Box, Flex, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HorizontalSidebar = ({ sidebarItems }) => {
  return (
    <Box position='sticky' w={'100%'} bg={'gray.100'} >
      <Flex
        direction='row'
        gap={1}
        pt={2}
        cursor='pointer'
        justifyContent={'space-around'}>
        {sidebarItems.map((item, index) => (
          <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement='bottom'
            openDelay={500}
            display={{ base: 'block', md: 'none' }}>
            <Flex
              px={3}
              py={2}
              _hover={{ borderBottom: '3px solid black' }}
              as={RouterLink}
              alignItems={'center'}>
              <Box >{item.icon}</Box>
            </Flex>
          </Tooltip>
        ))}
      </Flex>
    </Box>
  );
};
export default HorizontalSidebar;
