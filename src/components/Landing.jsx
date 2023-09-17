import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Landing() {
  useEffect(() => {
    document.title = 'Pixel Order';
  });

  return (
    <Flex 
      align="center" 
      justify="center"
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      backgroundImage={
        'url("https://i.imgur.com/2bJo6W7.jpg")'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
         
   <Text   //original code
  as={'span'}
  position={'relative'}
  _after={{
    content: "''",
    width: 'full',
    height: useBreakpointValue({ base: '20%', md: '30%' }),
    position: 'absolute',
    bottom: '50%', // Adjust this value to center the text vertically
    left: '50%',   // Adjust this value to center the text horizontally
    transform: 'translate(-50%, -50%)', // Center the text using a transform
    bg: 'white',
    zIndex: -1,
  }}
  color={'white'}
>
  Pixel Order
</Text>



            <br />{' '}
          </Heading>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              <Link to={'/auth'}>Create Account</Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
