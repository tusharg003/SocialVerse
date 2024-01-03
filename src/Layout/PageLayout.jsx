import { Box, Flex, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/NavBar/Navbar';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const sidebarDirection = useBreakpointValue({
    base: 'horizontal',
    md: 'vertical',
  });
  console.log(sidebarDirection);

  return (
    <>
      {pathname !== '/auth' ? (
        <>
          <Box h={'3em'} pos={'sticky'} top={0} zIndex={12}>
            <Navbar />
          </Box>
          {sidebarDirection === 'vertical' ? (
            <Flex className='verticalSidebar' h={'92vh'} overflow={'hidden'}>
              <Box w={{ base: '70px', md: '240px' }} overflowY={'auto'}>
                <Sidebar />
              </Box>
              {/* Content */}
              <Box
                className='content'
                flex={1}
                overflowY={'auto'}
                w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}>
                {children}
              </Box>
            </Flex>
          ) : (
            <VStack className='HorizontalSidebar' h={'100vh'} gap={0}>
              <Box w={'100%'}>
                <Sidebar />
              </Box>
              {/* Content */}dfdf
              <Box className='content' flex={1} bg={'red'} overflowY={'auto'}>
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
