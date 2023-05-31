import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flex, SystemStyleObject, useToast } from '@chakra-ui/react';
import useContextApi from './context';
import ErrorBoundary from './pages/Error';
import Home from './pages/home';
import Nav from './pages/navBar';
import SideBar from './pages/sideBar';
import Loading from './container/Loading';
const Courier = lazy(()=> import('./pages/courier'));
const Payroll = lazy(()=> import('./pages/payroll'));
const NotFound = lazy(()=> import('./pages/NotFound'));
const Transaction = lazy(()=>import('./pages/transaction'));
const Settings = lazy(()=> import('./pages/settings'));
const Shipment = lazy(()=> import('./pages/shipment'));
const Customer = lazy(() => import('./pages/customer'));

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
									<Suspense fallback={<Loading isApp />}>
										<Courier />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path='payroll'
							element={
								<ErrorBoundary onError={notify}>
									<Suspense fallback={<Loading isApp />}>
										<Payroll />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path='shipment'
							element={
								<ErrorBoundary onError={notify}>
									<Suspense fallback={<Loading isApp />}>
										<Shipment />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path='customer'
							element={
								<ErrorBoundary onError={notify}>
									<Suspense fallback={<Loading isApp />}>
										<Customer />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path='transaction'
							element={
								<ErrorBoundary onError={notify}>
									<Suspense fallback={<Loading isApp />}>
										<Transaction />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path='settings'
							element={
								<ErrorBoundary onError={notify}>
									<Suspense fallback={<Loading isApp />}>
										<Settings />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path='*'
							element={
								<ErrorBoundary onError={notify}>
									<Suspense fallback={<Loading isApp />}>
										<NotFound />
									</Suspense>
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
