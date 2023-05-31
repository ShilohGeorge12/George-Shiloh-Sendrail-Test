import { Container, Text } from "@chakra-ui/react";
import MetaData from "../../meta";
import { useLocation } from "react-router-dom";

function Transaction () {
  const { pathname } = useLocation()
  return (
    <Container>
      <MetaData
        title="Trasaction"
        description="Manage Your Trasactions On This Page"
        path={pathname}
      />
      <Text 
        color={'gray.400'} 
        textAlign={'center'}
        fontSize={'xl'}>Trasaction Page</Text>
    </Container>
  );
};

export default Transaction;