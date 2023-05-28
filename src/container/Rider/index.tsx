import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsFillChatDotsFill, BsFillTelephoneFill } from "react-icons/bs";
import { BiDotsVertical, BiMessageRoundedDots, BiPhone } from "react-icons/bi";

function Rider ( props: Omit<IRider, 'id'> ) {
  const { name, region, status, image } = props;
  const base64 = btoa( String.fromCharCode(...new Uint8Array((image.data.data))) );
  const riderImage = `data:${image.contentType};base64,${base64}`;

  return (
    <SimpleGrid columns={5} placeItems={'center'}>
      <Box>
        <Image
          w={'40px'}
          h={'40px'}
          alt={ name }
          src={ riderImage }
        />

        <Text>{ name }</Text>
      </Box>

      <Text>{ region }</Text>

      <Text>{ status }</Text>

      <Flex gap={'5px'}>
        <Button color={'#070529'}>
          <BsFillTelephoneFill />
        </Button>
        <Button>
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