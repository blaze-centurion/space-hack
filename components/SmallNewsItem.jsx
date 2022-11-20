import { Box, Image, Text } from "@chakra-ui/react";

const SmallNewsItem = ({ img, title, url, source, date }) => {
	return (
		<>
			<Box
				pos="relative"
				display="flex"
				alignItems="center"
				borderBottom="1px solid rgb(255 255 255 / 16%)"
				pb="10px"
			>
				<Image
					width="120px"
					height="80px"
					borderRadius="10px"
					src={img}
				/>
				<Box ml="10px" flex="1">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<Text mt="10px" mb="4px" fontSize="14px">
							{title.slice(0, 60)}...
						</Text>
					</a>
					<Box
						mt="5px"
						display="flex"
						alignItems="center"
						justifyContent="space-between"
					>
						<Text
							display="flex"
							alignItems="center"
							fontSize="13px"
							color="whiteAlpha.500"
						>
							<Image
								filter="invert(1)"
								src="/company.png"
								width="18px"
								mr="5px"
							/>
							<span>{source}</span>
						</Text>
						<Text
							display="flex"
							alignItems="center"
							fontSize="13px"
							color="whiteAlpha.500"
							mt="5px"
						>
							<span>{date}</span>
							<Image
								filter="invert(1)"
								src="/clock.png"
								width="18px"
								ml="5px"
							/>
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default SmallNewsItem;
