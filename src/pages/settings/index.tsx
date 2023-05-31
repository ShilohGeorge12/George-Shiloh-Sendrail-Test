import { Container } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import MetaData from '../../meta';

function Settings() {
  const { pathname } = useLocation()
	return (
		<Container>
			<MetaData
				title='Settings'
				description='Manage All Your Settings On This Page'
				path={pathname}
			/>
			Settings Page
		</Container>
	);
}

export default Settings;
