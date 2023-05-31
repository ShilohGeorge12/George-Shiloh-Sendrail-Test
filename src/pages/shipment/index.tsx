import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Container, Text } from '@chakra-ui/react';

interface IShipmentProps {}

function Shipment(props: IShipmentProps) {
	const { pathname } = useLocation();
	return (
		<Container>
			<MetaData
				title='Shipment'
				description='Manage Your Shipment on this Page'
				path={pathname}
			/>
			<Text
				color={'gray.400'}
				fontSize={'xl'}
				textAlign={'center'}
			>
			Shipment Page
			</Text> 
		</Container>
	);
}

export default Shipment;
