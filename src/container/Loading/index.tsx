import { Flex, SimpleGrid, Skeleton } from "@chakra-ui/react";

interface ILoadingProps {
};

function Loading ( props: ILoadingProps ) {
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
};

export default Loading;