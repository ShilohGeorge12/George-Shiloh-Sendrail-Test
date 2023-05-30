import { Box, Container, Flex, SimpleGrid, Skeleton, VStack  } from "@chakra-ui/react";
import Pagination from "../../container/Pagination";
import { typeGaurd } from "../../types";
import { Fetch } from "../../hooks/Fetch";
import { useEffect, useState } from "react";
import Rider from "../../container/Rider";
import usePaginateData from "../../container/PaginateData";

function Transaction () {
  const [riders, setRiders] = useState<IRider[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const pageSize = 2;

  const handlePageChange = ( page: number ) => setCurrentPage( page );

  const Riders = usePaginateData( riders, currentPage, pageSize );
  useEffect(() => {
		Fetch(`/v1/products`, 'GET', 'force-cache').then((response) => {
			if (typeGaurd<TResponse>(response)) {
				if ('data' in response) {
          setRiders(response.data);
        };
			}
		});
    setTimeout(()=> setIsSuccess(true), 2000)
	}, []);



  const LoadingSkeleton = () => (
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


  return (
    <Container>
      Trasaction Page
      {
        isSuccess ? (
          <>
            {
              riders && Riders.map((rider) => (
                <Rider
                  key={rider.id}
                  name={rider.name}
                  region={rider.region}
                  status={rider.status}
                  image={rider.image}
                />
              ))
            }
            <Pagination 
              PageChange={handlePageChange}
              PageSize={pageSize}
              currentPage={currentPage}
              length={riders.length}
            />
          </>
        ):( <LoadingSkeleton/> )
    }
    </Container>
  );
};

export default Transaction;