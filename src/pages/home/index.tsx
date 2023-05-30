import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';
import { Box, Heading} from '@chakra-ui/react';

interface IHomeProps {}

function Home(props: IHomeProps) {
	const { pathname } = useLocation();
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
				DashBoard Page!
			</Heading>

			
		</Box>
	);
}

export default Home;
