import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Flex, Text } from '@chakra-ui/react';

function Payroll() {
	const { pathname } = useLocation();
	return (
		<Flex
		w={'100%'}
		h={'100%'}
		alignItems={'center'}
		justifyContent={'center'}>
			<MetaData
				title='Payroll'
				description='Payroll Page To Monitor Payrolls'
				path={pathname}
			/>

				<Text
					w={'100%'}
					color={'gray.400'}
					fontSize={'xl'}
					textAlign={'center'}>
					Payroll Page
				</Text>
		</Flex>
	);
}

export default Payroll;
