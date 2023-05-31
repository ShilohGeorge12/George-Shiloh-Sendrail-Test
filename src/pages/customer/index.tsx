import { Container, Text } from "@chakra-ui/react";
import MetaData from "../../meta";
import { useLocation } from "react-router-dom";

interface ICustomerProps {
};

function Customer ( props: ICustomerProps ) {
  const { pathname } = useLocation()
  return (
    <Container textAlign={'center'}>
      <MetaData
        title="Customer"
        description="Manage Customers Here!"
        path={pathname}
      />
      <Text 
        color={'gray.400'}
        fontSize={'xl'}
      >Customer Page!</Text>
    </Container>
  );
};

export default Customer;