import { Flex, Image, Text } from '@chakra-ui/react';
import notFound from '../../assets/Images/connection.webp';
import MetaData from '../../meta';
import { useLocation } from 'react-router-dom';

function NotFound() {
  const { pathname } = useLocation();
  return (
    <Flex 
      w={'80%'} 
      h={'100%'}
      mx={'auto'}
      alignItems={'center'}
      justifyContent={'center'}
      justifyItems={'center'}
      gap={'15px'}>
      <MetaData
        title={'404'}
        description={'404 Error, The Page Requested Was Not Found!'}
        path={ pathname }
      />
      <Image
        w="25%"
        title={'error 404'}
        alt={'error 404'}
        src={ notFound }
      />

      <Text 
        w={'50%'}
        fontSize={'3xl'}
        fontWeight={'bold'}
        color={'grey'}
        textAlign={'center'}
        >Page Not Found!</Text>
    </Flex>
  );
}

export default NotFound;

