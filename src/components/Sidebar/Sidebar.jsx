import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoCreate } from 'react-icons/io5';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <GoHomeFill size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <FaUserFriends size={25} />,
      text: 'Friends',
    },
    {
      icon: <IoIosNotifications size={25} />,
      text: 'Notifications',
    },
    {
      icon: <IoCreate size={25} />,
      text: 'Create Post',
    },
    {
      icon: <Avatar size={'sm'} name='Tushar Gupta' src='#' />,
      text: 'Profile',
    },
  ];

  return (
    <Box position='sticky' top={'0'} p={2}>
      <Flex direction='column' gap={3} cursor='pointer'>
        {sidebarItems.map((item, index) => (
          <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement='right'
            openDelay={500}
            ml={1}
            display={{ base: 'block', md: 'none' }}>
            <Link as={RouterLink}>
              {item.icon}
              <Box display={{ base: 'none', md: 'block' }}>{item.text}</Box>
            </Link>
          </Tooltip>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
