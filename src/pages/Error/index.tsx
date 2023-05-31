import { Text, Image, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import errorImage from '../../assets/Images/browser.webp';
import MetaData from '../../meta';

interface Istate {
	hasError: boolean;
	errorName: string,
}
interface IerrorBoundry {
	children: React.ReactNode;
	onError: ( name: string, message: string ) => void;
}

class ErrorBoundary extends React.Component<IerrorBoundry, Istate> {
	constructor(props: IerrorBoundry) {
		super(props);
		this.state = { 
      hasError: false,
			errorName: '',
    };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log({ error, errorInfo });
		const { name, message } = error
		this.setState(prev => ({ ...prev, 
			errorName: name
		}))
		this.props.onError( name, message )
	}

	render() {
		if (this.state.hasError) {
			return (
				<Flex
					w={'100%'}
					h={'100%'}
					alignItems={'center'}
					justifyContent={'center'}
					gap={'20px'}>
					<MetaData
						title='Error'
						description='An Error Occurred!'
						path={''}
					/>
					<Image
						sizes='30%'
						title={'error Image'}
						src={errorImage}
					/>
					<Box>
						<Text
              fontSize={'4xl'}
              fontWeight={'bold'}
              color={'red.500'}
            >{this.state.errorName}
						</Text>
						<Text
              fontSize={'4xl'}
              fontWeight={'bold'}
              color={'red.500'}
            >SomeThing Went Wrong!
						</Text>
						<Text
              fontSize={'xl'}
              fontWeight={'bold'}
              color={'gray.400'}
            >Please Reload The Page to Continue</Text>
					</Box>
				</Flex>
			);
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
