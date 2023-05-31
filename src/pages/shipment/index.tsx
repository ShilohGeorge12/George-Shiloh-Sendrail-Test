import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Flex, Text } from '@chakra-ui/react';

function Shipment() {
	const { pathname } = useLocation();
	return (
		<Flex
			w={'100%'}
			h={'100%'}
			alignItems={'center'}
			justifyContent={'center'}>
			<MetaData
				title='Shipment'
				description='Manage Your Shipment on this Page'
				path={pathname}
			/>
			<Text
				color={'gray.400'}
				fontSize={'xl'}
				textAlign={'center'}>
				Shipment Page
			</Text>
		</Flex>
	);
}

export default Shipment;
