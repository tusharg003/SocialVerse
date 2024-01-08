import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

const ProfileFriendsGrid = () => {
  return (
    <Grid
      borderRadius={5}
      boxShadow={'md'}
      bg={'white'}
      mt={4}
      px={3}
      py={4}
      // mx={{ base: '3', lg: '0' }}
      h={'fit-content'}
      templateColumns={'repeat(3,1fr)'}
      gap={2}
      maxWidth={{ base: '100%', lg: '25vw' }}>
      <GridItem colSpan={3} pb={2}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <VStack alignItems={'flex-start'} gap={0}>
            <Text fontSize={'1.2em'} fontWeight={'600'}>
              Friends
            </Text>
            <Text fontSize={'1em'} lineHeight={1}>
              356 friends
            </Text>
          </VStack>
          <Button size={'sm'} variant={'link'} colorScheme='blue'>
            See all friends
          </Button>
        </Flex>
      </GridItem>
      {[...Array(9)].map((_, index) => (
        <GridItem
          cursor={'pointer'}
          _hover={{ borderBottom: '2px solid black' }}
          transition={'0.2s ease'}
          my={2}
          key={index}
          as={Flex}
          flexDir={'column'}
          justifyContent={'center'}>
          <Image
            borderRadius={5}
            boxSize='fit'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <Box wordWrap='break-word'>
            <Text fontSize={'.8em'} fontWeight={'bold'} overflowWrap={'break'}>
              THISISTHE
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};
export default ProfileFriendsGrid;
