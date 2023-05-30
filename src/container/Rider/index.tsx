import { Button, Flex, Image, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { BsFillChatDotsFill, BsFillTelephoneFill } from "react-icons/bs";
import { BiDotsVertical } from "react-icons/bi";

function Rider ( props: Omit<IRider, 'id'> ) {
  const { name, region, status, image } = props;
  const imageFallBack = (
  <Skeleton
    height="50px"
    width="50px"
    borderRadius="full" 
  />)

  return (
    <SimpleGrid columns={5} placeItems={'center'}>
      <Flex direction={'column'} alignItems={'flex-start'}>
        <Image
          w={'50px'}
          h={'50px'}
          borderRadius={'50%'}
          alt={ name }
          src={ image }
          fallback={imageFallBack}
        />

        <Text w={'100px'} mt={'6px'} fontSize={'.9rem'}>{ name }</Text>
      </Flex>

      <Text color={'gray.500'}>{ region }</Text>

      <Text 
        p={'1'}
        borderRadius={'10px'}
        bg={ status.toLowerCase() === 'assigned' ? 'green.200' : 'red.200' }
        color={ status.toLowerCase() === 'assigned' ? 'green' : 'red' }
        fontSize={'14px'}
        fontWeight={'500'}
        textTransform={'capitalize'}
      >{ status }</Text>

      <Flex gap={'5px'}>
        <Button 
          color={'#070529'} 
          bg={'transparent'}
          _hover={{ animation: '' }}
        >
          <BsFillTelephoneFill />
        </Button>
        <Button color={'#070529'} bg={'transparent'}>
          <BsFillChatDotsFill />
        </Button>
      </Flex>

      <Button bg={'transparent'}>
        <BiDotsVertical/>
      </Button>
    </SimpleGrid>
  );
};

export default Rider;