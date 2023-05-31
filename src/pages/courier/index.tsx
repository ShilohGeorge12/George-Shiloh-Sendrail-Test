import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Box, Button, Flex, Heading, Input, SimpleGrid, Spacer, Text, useToast } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { BiFilter } from 'react-icons/bi';
import Rider from '../../container/Rider';
import { ChangeEvent, useEffect, useState } from 'react';
import AddRider from './addRider';
import { Fetch } from '../../hooks/Fetch';
import { typeGaurd } from '../../types';
import Loading from '../../container/Loading';
import PaginationRiders from './paginationRiders';
import useContextApi from '../../context';

function Courier() {
	const { pathname } = useLocation();
	const { state, dispatch } = useContextApi()
	const [riders, setRiders] = useState<IRider[]>([]);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [searchResult, setSearchResult] = useState<IRider[]>([]);
	const [query, setQuery] = useState<string>('');
	const toast = useToast();

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
    setQuery(query);
    if( query === '' || query === null ){
      setSearchResult([])
      return;
    }
		const response = await Fetch(`/v1/products?search=${query}&by=name`, 'GET', 'reload', query);
		if (typeGaurd<TResponse>(response)) {
			if ('error' in response) {
				console.warn(response.error);
				toast({
					title: response.error,
					description: 'Search Value ' + response.error,
					status: 'info',
					position: 'bottom-right',
					isClosable: true,
				});
        setSearchResult([])
			} else {
				console.log(response);
				setSearchResult(response.data);
			}
		}
	};

	useEffect(() => {
		Fetch(`/v1/products`, 'GET', 'force-cache').then((response) => {
			if (typeGaurd<TResponse>(response)) {
				if ('data' in response) {
					setRiders(response.data);
				}
			}
		});
		setTimeout(() => setIsSuccess(true), 2000);
	}, []);

	return (
		<Box px='30px' position={'relative'}>
			<MetaData
				title='Courier'
				description='Manage Your Rider from this Page'
				path={pathname}
			/>
			<Heading
				as={'h1'}
				fontWeight={'600px'}
				fontSize={'24px'}
				mb='20px'>
				Manage Rider
			</Heading>

			<Flex
				gap={'20px'}
				alignItems={'center'}>
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
						onChange={handleSearch}
						value={query}
						disabled={ state.modal ? true : false}
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
					_disabled={{color: '#000'}}
					isDisabled={ state.modal ? true : false}>
					<BiFilter />
					<Text
						as={'span'}
						fontFamily={'Circular Std'}
						fontSize={'12px'}
						fontWeight={'500'}
						color={'#000'}>
						Filter
					</Text>
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
					_hover={{ bg: 'rgba(7, 5, 41, 0.9)', boxShadow: '1px 1px 10px 1px rgba(7, 5, 41, 0.9)', fontSize: '16px' }}
					onClick={() => dispatch({ type: 'modalOpen' })}
					_disabled={{bg: 'rgba(7, 5, 41, 0.9)'}}
					isDisabled={ state.modal ? true : false}>
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
				mt={'36px'}
				mb={'30px'}>
				<Text>Name</Text>
				<Text>Region</Text>
				<Text>Status</Text>
				<Text>Contact</Text>
				<Text>Action</Text>
			</SimpleGrid>

			{isSuccess ? (
          searchResult.length === 0 && (
          <PaginationRiders
            data={riders}
          />
        )
			) : (
				<Loading />
			)}

			{searchResult.length > 0 &&
				searchResult.map((rider) => (
					<Rider
						key={rider.id+'2'}
						name={rider.name}
						region={rider.region}
						status={rider.status}
						image={rider.image}
					/>
			))}
			{state.modal && <AddRider />}
		</Box>
	);
}

export default Courier;
