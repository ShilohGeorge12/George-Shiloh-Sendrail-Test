import { Box, Button, Flex, Input, Spacer, Image, Text, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { FaBoxOpen, FaBell, FaRegBell } from 'react-icons/fa';

interface INavProps {}

function Nav(props: INavProps) {
	return (
    <Flex
      w={'full'}
      h={'95px'}
      p={{ base: '1em' , lg:'2em'}}
      gap={'66px'}>

      <Box position={'relative'}>
        <Input 
          type='search'
          w={{ base: '287px', md: '487px' }}
          h={'38px'}
          placeholder='Search by tracking number or location...'
          boxShadow={'0px 4px 20px 0px rgba(6, 0, 137, 0.1)'}
          px='40px'
          border={'.5px solid #fff'}
          borderRadius={'12px'}
          _focus={{ borderColor: '#AAAAAA',outline: 'none' }}
        />
        <Box
          as={'span'}
          position={'absolute'}
          w={'12px'}
          h={'12px'}
          top={'12px'}
          left={'15px'}
          fontSize={'13px'}
          color={'rgba(160, 160, 170, 1)'}
        >
          <FaSearch />
        </Box>
        
      </Box>
      <Spacer />

      <Button
        w={'52px'}
        h={'32px'}
        bg={'#AAAAAA'}
        color={'white'}
        textAlign={'center'}
        borderRadius={'10px'}
      >
        <FaRegBell />
        <Box 
          as='span'
          pl={'3px'}
          fontSize={'12px'}
        >2</Box>
      </Button>

      <Flex gap={'10px'}>
        <Image
          w={'42px'}
          h={'42px'}
          borderRadius={'50%'}
          alt={'profilePic'}
          src={''}
        />

        <Flex  direction={'column'}>
          <Text 
            w={'72px'} 
            h={'26px'} 
            fontSize={'16px'} 
            fontFamily={'500'}>Name.....</Text>
          <Text
            w={'36.3px'} 
            h={'14px'} 
            fontSize={'12px'} 
            fontFamily={'450'}>Admin</Text>
        </Flex>
      </Flex>
    </Flex>
	);
}

export default Nav;
