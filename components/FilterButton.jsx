import { Button } from "@chakra-ui/react";
import React from "react";

const FilterButton = ({ text }) => {
	return (
		<>
			<Button
				variant="outline"
				fontWeight="500"
				height="auto"
				color="white"
				p="10px 15px"
				fontSize="15px"
				borderRadius="5px"
				mr="5px"
			>
				{text}
			</Button>
		</>
	);
};

export default FilterButton;
