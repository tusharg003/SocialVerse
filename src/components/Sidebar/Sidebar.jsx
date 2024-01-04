import { Avatar, useBreakpointValue } from '@chakra-ui/react';
import { GoHomeFill } from 'react-icons/go';
import { FaUserFriends } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoCreate } from 'react-icons/io5';
import HorizontalSidebar from './HorizontalSidebar';
import VerticalSidebar from './VerticalSidebar';

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
  const sidebarDirection = useBreakpointValue({ base: 'row', md: 'column' });
  // console.log(sidebarDirection)
  return (
    <>
      {sidebarDirection === 'row' ? (
        <HorizontalSidebar sidebarItems={sidebarItems} />
      ) : (
        <VerticalSidebar sidebarItems={sidebarItems} />
      )}
    </>
  );
};

export default Sidebar;
