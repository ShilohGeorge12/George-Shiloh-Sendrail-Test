import { useState } from 'react';
import usePaginateData from "../../../container/PaginateData";
import Pagination from '../../../container/Pagination';
import Rider from '../../../container/Rider';

interface IPaginationRidersProps {
  data: IRider[],
  onCall: ( name: string, phoneNumber: string ) => void;
  onChat: ( name: string, phoneNumber: string ) => void;
};

function PaginationRiders ( { data, onCall, onChat }: IPaginationRidersProps ) {
	const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 2;

  const handlePageChange = (page: number) => setCurrentPage(page);
  const Riders = usePaginateData(data, currentPage, pageSize)

  return (
    <>
      {
        Riders.map((rider) =>(
          <Rider
            key={rider.id}
            name={rider.name}
            region={rider.region}
            status={rider.status}
            image={rider.image}
            contact={rider.contact}
						onCall={onCall}
            onChat={onChat}
          />
        ))
      }
      <Pagination
        PageChange={handlePageChange}
        PageSize={pageSize}
        currentPage={currentPage}
        length={data.length}
      />
    </>
  );
};

export default PaginationRiders;