import { Flex, useModal } from "@chakra-ui/react";
import { createPortal } from "react-dom";

interface IAddRiderProps {
};

function AddRider ( props: IAddRiderProps ) {

  const modal = useModal({
    isOpen: false,
    onClose() {
      this.isOpen = false;
    },
  });
  modal
  // const handleAddRider = () => {
  //   const newRider: IRider = {
  //     id: `${riders.length + 1}`,
  //     name: '',
  //     status: 'Unassigned',
  //     region: '',
  //     image: userImage,
  //   };
  //   setRiders(prev => ([...prev, newRider]))
  //   toast({
  //     title: 'Added Rider',
  //     description: 'successfully Added a Rider',
  //     status: 'success',
  //     position: 'bottom-right',
  //     isClosable: true,
  //   })
  // };

  return createPortal(
    <Flex as='dialog'>
      Dialog Box
    </Flex>,
    document.getElementById('modal') as HTMLDivElement
  );
};

export default AddRider;