import { Container, Text } from '@chakra-ui/react';
import React from 'react';

interface Istate{
  hasError : boolean,
}
interface IerrorBoundry{
  children : React.ReactNode,
}

class ErrorBoundary extends React.Component<IerrorBoundry, Istate>{
  constructor(props: IerrorBoundry){
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error){
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log( {error , errorInfo } )
  }

  render(){
    if(this.state.hasError){
      return (
        <>
          <Container>
            <Text>SomeThing Went Wrong!</Text>
            <Text>Please Reload The Page to Continue</Text>
          </Container>
        </>
      )
    }
    return ( this.props.children );
  }
}
export default ErrorBoundary;
