import { Flex, Text } from '@chakra-ui/react';
import MetaData from '../../meta';
import { useLocation } from 'react-router-dom';

function Customer() {
	const { pathname } = useLocation();
	return (
		<Flex
			w={'100%'}
			h={'100%'}
			alignItems={'center'}
			justifyContent={'center'}>
			<MetaData
				title='Customer'
				description='Manage Customers Here!'
				path={pathname}
			/>
			<Text
				color={'gray.400'}
				textAlign={'center'}>
				Customer Page!
			</Text>
		</Flex>
	);
}

export default Customer;
