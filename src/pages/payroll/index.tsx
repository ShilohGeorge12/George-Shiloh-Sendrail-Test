import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Container, Text } from '@chakra-ui/react';

interface IPayrollProps {}

function Payroll(props: IPayrollProps) {
	const { pathname } = useLocation();
	return (
		<Container textAlign={'center'}>
			<MetaData
				title='Payroll'
				description='Payroll Page To Monitor Payrolls'
				path={pathname}
			/>
			<Text
				color={'gray.400'}
				fontSize={'xl'}>
				Payroll Page
			</Text>
		</Container>
	);
}

export default Payroll;
