import { Flex, Heading, Input, useToast } from "@chakra-ui/react";
import { MotionStyle, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ChangeEvent, MouseEvent, useState } from "react";
import useContextApi from "../../../context";
import { BiXCircle } from "react-icons/bi";

function AddRider () {
  const toast = useToast();
  const { dispatch } = useContextApi();
  const [input, setInput] = useState<IaddRiderState>({ name: '', region: '', image: null });
  
  const onSubmit = (e: MouseEvent) => {
    e.preventDefault()
    if( input.name && input.region && input.image ){
      toast({
        title: `Added ${input.name}`,
        description: 'successfully Added a Rider',
        status: 'success',
        position: 'bottom-right',
        isClosable: true,
      })
      setInput({ name: '', region: '', image: null })
      dispatch({ type: 'modalClose' });
    }else{
      toast({
        title: `A Reqired Field is Found Empty`,
        description: 'please Fill All Input Fields',
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
      })
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput( prev => ({ ...prev, [name]: value }))
  };

  const BtnStyles: MotionStyle = {
    position: 'absolute',
    padding: '.25rem',
    borderRadius: '10px',
    fontSize: '2rem',
    color: 'red',
    background: 'transparent',
    top: '1px',
    right: '0px'
  };

  const submitBtnStyles: MotionStyle = {
    background: '#070529',
    color: 'white',
    borderRadius: '10px',
    padding: '5px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
  }

  return createPortal(
    <Flex
      bg={'transparent'}
      position={'absolute'}
      top={'0'}
      left={'5%'}
      width={'66%'}
      height={'100%'}
      translateX={"-50%"}
      translateY={"-50%"}
      ml={60}
      alignItems={'center'}
      justifyContent={'center'}
    >
      
      <Flex
        direction={'column'}
        bg={'gray.200'}
        borderRadius={'10px'}
        p={'1rem'}
        gap={'25px'}
        boxShadow={'2xl'}
      >
         <Flex gap={'20px'} alignItems={'center'} justifyContent={'center'} position={'relative'}>
          <Heading fontSize={{ base: '2rem', md: '2rem' }} color={"gray.800"} textAlign={'center'}>
            Add A Rider
          </Heading>
          <motion.button
            style={BtnStyles}
            whileHover={{ scale: 1.1, color: 'white', background: 'red' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => dispatch({ type: 'modalClose' })}
          >
            <BiXCircle />
          </motion.button>
        </Flex>
        <Flex direction={'column'} gap={'20px'} w={'28rem'}>
            <Input 
              type="text"
              name={"name"}
              placeholder={"Enter Your Name"}
              value={input.name}
              onChange={onChange}
              size={'md'}
              fontSize={'lg'}
              color={'#070529'}
              border={'2px solid'}
              borderColor={'gray.400'}
              borderRadius={'10px'}
              focusBorderColor="gray.400"
              _placeholder={{ color: 'gray.600', fontSize: 'md' }}
              _hover={{ borderColor: 'gray.600', }}
            />

            <Input 
              type="text"
              name={"region"}
              placeholder={"Enter Your Region"}
              value={input.region}
              onChange={onChange}
              size={'md'}
              fontSize={'lg'}
              color={'#070529'}
              border={'2px solid'}
              borderColor={'gray.400'}
              borderRadius={'10px'}
              focusBorderColor="gray.400"
              _placeholder={{ color: 'gray.600', fontSize: 'md' }}
              _hover={{ borderColor: 'gray.600', }}
            />

            <Input 
              type="file"
              accept="Image/*"
              name={"image"}
              onChange={onChange}
              size={'md'}
              border={'2px solid'}
              borderColor={'gray.400'}
              borderRadius={'10px'}
              focusBorderColor="gray.400"
              _placeholder={{ color: 'gray.600' }}
              _hover={{ borderColor: 'gray.600', }}
            />

            <motion.button
              style={submitBtnStyles}
              onClick={onSubmit}>
              Submit
            </motion.button>

        </Flex>
      </Flex>

    </Flex>, 
    document.getElementById('modal') as HTMLDivElement
  )
}

export default AddRider;