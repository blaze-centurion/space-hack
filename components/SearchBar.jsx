import { Box, Image, Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ setInput, onSubmit, input }) => {
	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				border="1px solid #444"
				p="10px"
				borderRadius="7px"
				boxShadow="inset 0 0 5px rgba(255,255,255,0.1)"
			>
				<Image
					onClick={onSubmit}
					src="/search.png"
					width="20px"
					filter="invert(1)"
					cursor={"pointer"}
				/>
				<Input
					type="search"
					placeholder="Search Latest News..."
					variant="unstyled"
					ml="10px"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onSubmit={onSubmit}
				/>
			</Box>
		</>
	);
};

export default SearchBar;
