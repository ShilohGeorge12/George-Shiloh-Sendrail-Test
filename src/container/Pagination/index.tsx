import { NavLink } from 'react-router-dom';
import { Button, List, ListItem } from "@chakra-ui/react";

interface IpaginationProps {
	length: number;
	PageSize: number;
	currentPage: number;
	PageChange: (page: number) => void;
}

function Pagination({ length, PageChange, PageSize, currentPage }: IpaginationProps) {
	const len = Math.ceil(length / PageSize);
	if (len === 1) return null;
	const pages: number[] = [];
	for (var i = 0; i < len; i++) {
		pages.push(i + 1);
	}

	return (
	<List
		display="flex"
		alignItems="center"
		justifyContent="center"
		width="fit-content"
		mx="auto"
		overflow="hidden"
		gap={'5px'}
	>
		{pages.map((page) => (
			<ListItem
				key={page}
				w="40px"
				height="40px"
				fontSize="2xl"
			>
				<Button
					type="button"
					width="100%"
					height="100%"
					bg={page === currentPage ? "blue.500": "gray.300" }
					color={page === currentPage ? "white" : "black"}
					_hover={{ bg: page === currentPage ? "blue.300" : "gray.400", }}
					onClick={() => PageChange(page)}
				>
					{page}
				</Button>
			</ListItem>
		))}
	</List>
	);
}
export default Pagination;
