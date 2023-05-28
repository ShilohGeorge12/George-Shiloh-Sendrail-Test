import { Box, Button, Flex } from '@chakra-ui/react';
import { FaBoxOpen, FaUsers } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { AiFillSetting } from 'react-icons/ai';
import { RiEBike2Line } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { BsFillCreditCardFill } from 'react-icons/bs';

interface ISideBarProps {}

function SideBar(props: ISideBarProps) {
  const isLoggedIn = true;
  const { pathname } = useLocation()
  const isActive = (path: Tpath): boolean => {
    if( pathname === path ) return true;
    return false;
  };

  return (
		<Flex
			w={{ base:'25', md: '60' }}
			h={'full'}
			bg={'#070529'}
			p='5'
			direction={'column'}
			color={'white'}
			gap={'30px'}
			as='section'>
			<Flex
				fontSize={'24px'}
				alignItems={'center'}
        bg='transparent'
        color={'#F9C567'}
        fontWeight={'bold'}
        >
        <Box pr={'3px'}>
          <FaBoxOpen /> 
        </Box>
          Sendrail
			</Flex>

      <Flex
				fontSize={'20px'}
				alignItems={'flex-start'}
        justifyContent={'center'}
        gap={'.5em'}
        direction={'column'}>
				<Button
					bg='transparent'
          _hover={{ bg: isActive('/') ? 'transparent' : 'orange.400' }}
					color={isActive('/') ? '#F9C567' : 'white'}
          fontWeight={'500'}
          >
					<Box pr={'3px'}>
            <BiEnvelopeOpen /> 
          </Box>
            Dashboard
				</Button>

				<Button
					bg='transparent'
          _hover={{ bg: isActive('/shipment') ? 'transparent' : 'orange.400' }}
					color={isActive('/shipment') ? '#F9C567' : 'white'}
          fontWeight={'500'}
          >
					<Box pr={'3px'}>
            <HiOutlineClipboardList /> 
          </Box>
            Shipment
				</Button>

				<Button
					bg='transparent'
          _hover={{ bg: isActive('/customer') ? 'transparent' : 'orange.400' }}
					color={isActive('/customer') ? '#F9C567' : 'white'}
          fontWeight={'500'}
          >
					<Box pr={'3px'}>
            <FaUsers /> 
          </Box>
            Customer
				</Button>

				<Button
					bg='transparent'
          _hover={{ bg: isActive('/courier') ? 'transparent' : 'orange.400' }}
					color={isActive('/courier') ? '#F9C567' : 'white'}
          fontWeight={'500'}
          >
					<Box pr={'3px'}>
            <RiEBike2Line /> 
          </Box>
            Courier
				</Button>

				<Button
					bg='transparent'
          _hover={{ bg: isActive('/payroll') ? 'transparent' : 'orange.400' }}
					color={isActive('/payroll') ? '#F9C567' : 'white'}
          fontWeight={'500'}
          >
					<Box pr={'3px'}>
            <BsFillCreditCardFill /> 
          </Box>
            Payroll
				</Button>

				<Button
					bg='transparent'
          _hover={{ bg: isActive('/transaction') ? 'transparent' : 'orange.400' }}
					color={isActive('/transaction') ? '#F9C567' : 'white'}
          fontWeight={'500'}
          >
					<Box pr={'3px'}>
            <FaUsers /> 
          </Box>
            Transaction
				</Button>

				<Button
					bg='transparent'
          _hover={{ bg: isActive('/settings') ? 'transparent' : 'orange.400' }}
					color={isActive('/settings') ? '#F9C567' : 'white'}
          fontWeight={'500'}
          >
					<Box pr={'3px'} >
            <AiFillSetting /> 
          </Box>
            Settings
				</Button>

				<Button
					bg='transparent'
					colorScheme={'white'}
					fontWeight={'bold'}
          >
            {
              isLoggedIn ? (
                <Box pr={'3px'}>
                  <FiLogOut /> 
                </Box>
              ) : (
                <Box pr={'3px'}>
                  <FiLogIn /> 
                </Box>
              )
            }
            Logout
				</Button>
			</Flex>
		</Flex>
	);
}

export default SideBar;
