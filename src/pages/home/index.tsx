import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Box, Button, Flex, Heading, Input, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { BiFilter } from 'react-icons/bi';
import Rider from '../../container/Rider';

interface IHomeProps {}

function Home(props: IHomeProps) {
	const { pathname } = useLocation();

  const data: IRider[] = [
    { id: '1', name: 'John tae', status: 'Assigned', region: 'ikeja', image: { data: { data: [23,232,3,33] }, contentType: 'image/jpg' } },
    { id: '2', name: 'John tae', status: 'Unassigned', region: 'ikeja', image: { data: { data: [23,232,3,33] }, contentType: 'image/png' } },
  ]

	return (
		<Box px='30px'>
			<MetaData
				title='Sendrail-dev'
				description='This is the DashBoard for Sendrail App'
				path={pathname}
			/>
			<Heading
				fontWeight={'600px'}
				fontSize={'24px'}
				mb='20px'>
				Manage Rider
			</Heading>

			<Flex 
        gap={'20px'}
        alignItems={'center'}
      >
				<Box
					position={'relative'}
					w={{ base: '194px', md: '294px' }}
          fontFamily={'Gilroy'}>
					<Input
						type='text'
						w={'100%'}
						h={'56px'}
						pr={'30px'}
						placeholder='Search by name'
						border={'2px solid #AAA'}
						borderRadius={'12px'}
						_focus={{ borderColor: '#AAAAAA', outline: 'none' }}
					/>

					<Box
						as={'span'}
						position={'absolute'}
						w={'12px'}
						h={'12px'}
						top={'19px'}
						right={'15px'}
						fontSize={'20px'}
						color={'rgba(160, 160, 170, 1)'}>
						<FaSearch />
					</Box>
				</Box>

				<Button
          alignItems={'center'}
          fontSize={'33px'}
          bg={'transparent'}
          _hover={{ bg: 'transparent', color: '#1F1F1F' }}
        >
					<BiFilter />
          <Text 
            as={'span'}
            fontFamily={'Circular Std'}
            fontSize={'12px'}
            fontWeight={'500'}
            color={'#000'}>Filter</Text>
				</Button>

        <Spacer />

        <Button
          w={'109px'}
          h={'38px'}
          bg={'rgba(7, 5, 41, 0.9)'}
          color={'white'}
          fontFamily={'Circular Std'}
          fontSize={'14px'}
          fontWeight={'500px'}
        >
					Add Rider
				</Button>
			</Flex>

      <SimpleGrid 
        columns={5} 
        bg={'rgba(7, 5, 41, 0.07)'}
        color={'rgba(0, 0, 0, 1)'}
        placeItems={'center'}
        fontFamily={'Poppins'}
        fontSize={'18px'}
        fontWeight={'500px'}
        borderRadius={'10px'}
        h={'69px'}
        mt={'36px'}>
        <Text>Name</Text>
        <Text>Region</Text>
        <Text>Status</Text>
        <Text>Contact</Text>
        <Text>Action</Text>
      </SimpleGrid>

      {
        data.map( rider => (
          <Rider 
            key={rider.id}
            name={rider.name} 
            region={rider.region}
            status={rider.status}
            image={rider.image}
          />
        ))
      }
		</Box>
	);
}

export default Home;
