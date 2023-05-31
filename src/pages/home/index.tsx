import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Flex, Heading } from '@chakra-ui/react';

function Home() {
	const { pathname } = useLocation();
	return (
		<Flex
			w={'100%'}
			h={'100%'}
			alignItems={'center'}
			justifyContent={'center'}>
			<MetaData
				title='Sendrail-dev'
				description='This is the DashBoard for Sendrail App'
				path={pathname}
			/>
			<Heading
				fontWeight={'600px'}
				fontSize={'24px'}
				color={'gray.400'}
				textAlign={'center'}>
				Dashboard Page!
			</Heading>
		</Flex>
	);
}

export default Home;
