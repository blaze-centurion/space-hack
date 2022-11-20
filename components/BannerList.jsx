import { Image, Text } from "@chakra-ui/react";
import React from "react";

const BannerList = ({ text }) => {
	return (
		<>
			<Text
				display="flex"
				alignItems="center"
				my="10px"
				fontSize="17px"
				color="whiteAlpha.800"
			>
				<Image
					src="/back_arrow.png"
					width="18px"
					mr="10px"
					filter="invert(1)"
					transform="rotate(180deg)"
				/>
				<span>{text}</span>
			</Text>
		</>
	);
};

export default BannerList;
