import { Badge, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const NewsItem = ({ img, url, title, desc, author, source, date }) => {
	return (
		<>
			<Box
				bg="whiteAlpha.50"
				borderRadius="10px"
				boxShadow="0 0 5px rgba(255,255,255,0.1)"
			>
				<Image
					borderRadius="10px 10px 0 0"
					src={img}
					h="195px"
					w="100%"
				/>
				<Box p="10px" h="170px" pb="15px" overflow="hidden">
					<Badge
						colorScheme="blue"
						p="3px 5px"
						fontSize="11px"
						textTransform="capitalize"
					>
						From {source}
					</Badge>
					<a href={url} target="_blank" rel="noopener noreferrer">
						<Text mt="10px" mb="5px" fontSize="15px">
							{title.slice(0, 70)}...
						</Text>
					</a>
					<Text fontSize="14px" color="whiteAlpha.500">
						{desc.slice(0, 110)}...
					</Text>
				</Box>
				<Box
					borderTop="1px solid rgb(255 255 255 / 16%)"
					p="15px 13px"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text display="flex" alignItems="center" fontSize="13px">
						<Image
							filter="invert(1)"
							src="/user.png"
							width="18px"
							mr="3px"
						/>
						<span>{author}</span>
					</Text>
					<Text display="flex" alignItems="center" fontSize="13px">
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
		</>
	);
};

export default NewsItem;
