import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';

interface IShipmentProps {}

function Shipment(props: IShipmentProps) {
	const { pathname } = useLocation();
	return (
		<section>
			<MetaData
				title='ShipMent'
				description='Manage Your Shipment on this Page'
				path={pathname}
			/>
			ShipMent Page
		</section>
	);
}

export default Shipment;
