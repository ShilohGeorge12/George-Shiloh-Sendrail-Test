import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flex, SystemStyleObject, useToast } from '@chakra-ui/react';
import useContextApi from './context';
import ErrorBoundary from './pages/Error';
import Home from './pages/home';
import Nav from './pages/navBar';
import SideBar from './pages/sideBar';
import Courier from './pages/courier';
import Payroll from './pages/payroll';
import NotFound from './pages/NotFound';
import Transaction from './pages/transaction';
import Settings from './pages/settings';
import Shipment from './pages/shipment';
import Customer from './pages/customer';

function App() {
	const { state } = useContextApi();
	const toast = useToast();
	const ContainerStyles: SystemStyleObject = {
		filter: state.modal ? 'blur(2px)' : 'none',
	};
	const notify = (name: string, message: string) => {
		toast({
			title: `${name}`,
			description: `${message}`,
			status: 'error',
			position: 'bottom-right',
			duration: 10000,
			isClosable: true,
		});
	};
	return (
		<Flex
			w='100vw'
			h='100vh'
			as='section'
			sx={ContainerStyles}>
			<Router>
				<SideBar />
				<Flex
					w={'100%'}
					h={'100%'}
					direction={'column'}>
					<Nav />
					<Routes>
						<Route
							path='/'
							element={
								<ErrorBoundary onError={notify}>
									<Home />
								</ErrorBoundary>
							}
						/>
						<Route
							path='courier'
							element={
								<ErrorBoundary onError={notify}>
									<Courier />
								</ErrorBoundary>
							}
						/>
						<Route
							path='payroll'
							element={
								<ErrorBoundary onError={notify}>
									<Payroll />
								</ErrorBoundary>
							}
						/>
						<Route
							path='shipment'
							element={
								<ErrorBoundary onError={notify}>
									<Shipment />
								</ErrorBoundary>
							}
						/>
						<Route
							path='customer'
							element={
								<ErrorBoundary onError={notify}>
									<Customer />
								</ErrorBoundary>
							}
						/>
						<Route
							path='transaction'
							element={
								<ErrorBoundary onError={notify}>
									<Transaction />
								</ErrorBoundary>
							}
						/>
						<Route
							path='settings'
							element={
								<ErrorBoundary onError={notify}>
									<Settings />
								</ErrorBoundary>
							}
						/>
						<Route
							path='*'
							element={
								<ErrorBoundary onError={notify}>
									<NotFound />
								</ErrorBoundary>
							}
						/>
					</Routes>
				</Flex>
			</Router>
		</Flex>
	);
}

export default App;
