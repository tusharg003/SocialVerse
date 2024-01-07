import { Box, Flex, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/NavBar/Navbar';
import SuggestedUsers from '../components/SuggestedUsers/SuggestedUsers';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const sidebarDirection = useBreakpointValue({
    base: 'horizontal',
    md: 'vertical',
  });
  return (
    <>
      {pathname !== '/auth' ? (
        <>
          <Box h={'3em'} pos={'sticky'} top={0} zIndex={12}>
            <Navbar />
          </Box>
          {sidebarDirection === 'vertical' ? (
            <Flex className='verticalSidebar' h={'92vh'} overflow={'hidden'}>
              <Box w={{ md: '240px' }} overflowY={'auto'}>
                <Sidebar />
              </Box>
              {/* Content */}
              <Box className='content' flex={1} overflowY={'auto'}>
                {children}
              </Box>

              {/* Suggested  user bar */}
              {pathname === '/' && (
                <Box
                  bg={'gray.100'}
                  flex={1}
                  pr={2}
                  display={{ base: 'none', md: 'block' }}
                  maxW={{ base: 'none', md: '340px' }}>
                  <SuggestedUsers />
                </Box>
              )}
            </Flex>
          ) : (
            <VStack className='HorizontalSidebar' h={'100vh'} gap={0}>
              <Box w={'100%'}>
                <Sidebar />
              </Box>
              {/* Content */}dfdf
              <Box
                className='content'
                flex={1}
                bg={'red'}
                overflowY={'auto'}
                w={'100%'}>
                {children}
              </Box>
            </VStack>
          )}
        </>
      ) : (
        children
      )}
    </>
  );
};

export default PageLayout;
