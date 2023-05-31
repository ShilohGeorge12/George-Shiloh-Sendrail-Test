import { Flex, SimpleGrid, Skeleton, Spinner } from "@chakra-ui/react";


function Loading ({ isApp } : { isApp?: true }) {

  if(isApp){
    return (
      <Flex 
        w={'100%'}
        h={'50vh'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Spinner w={'50px'} h={'50px'} color="blue.800" borderWidth={'5px'} />
      </Flex>
    )
  };

  return (
    <SimpleGrid columns={5} placeItems={'center'} spacing={4}>
      <Flex direction={'column'} alignItems={'flex-start'}>
        <Skeleton height="50px" width="50px" borderRadius="full" />
        <Skeleton mt={'6px'} height="15px" width="100px" borderRadius={'5px'} />
      </Flex>
      <Skeleton height="20px" width="60px" />
      <Skeleton height="20px" width="80px" borderRadius={'5px'} />
      <Flex gap={'5px'}>
        <Skeleton height="20px" width="40px" borderRadius={'5px'} />
        <Skeleton height="20px" width="40px" borderRadius={'5px'} />
      </Flex>
        <Skeleton height="20px" width="40px" borderRadius={'5px'} />
    </SimpleGrid>
  );
}

export default Loading;