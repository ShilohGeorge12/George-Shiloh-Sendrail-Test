import { Button, Flex, Image, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { BsFillChatDotsFill, BsFillTelephoneFill } from "react-icons/bs";
import { BiDotsVertical } from "react-icons/bi";
import useContextApi from "../../context";

interface IRidersProps extends  Omit<IRider, 'id'>{
  onCall: ( name: string, phoneNumber: string ) => void;
  onChat: ( name: string, phoneNumber: string ) => void;
}

function Rider ( props: IRidersProps) {
  const { name, region, status, image, contact, onCall, onChat } = props;
  const { state } = useContextApi()
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
          title={ name }
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
          isDisabled={ state.modal ? true : false}
					_disabled={{ color: '#070529' }}
          onClick={()=> onCall( name, contact )}
        >
          <BsFillTelephoneFill />
        </Button>
        <Button 
          color={'#070529'} 
          bg={'transparent'}
          isDisabled={ state.modal ? true : false}
          _disabled={{ color: 'white' }}
          onClick={()=> onChat( name, contact )}>
          <BsFillChatDotsFill />
        </Button>
      </Flex>

      <Button 
        bg={'transparent'}
        isDisabled={ state.modal ? true : false}
        _disabled={{ color: 'white' }}>
        <BiDotsVertical/>
      </Button>
    </SimpleGrid>
  );
};

export default Rider;