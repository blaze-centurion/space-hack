import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";

const CustomAccordionItem = ({ title, desc }) => {
	return (
		<>
			<AccordionItem p="5px 1rem">
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton p="10px">
								<Box flex="1" textAlign="left">
									{title}
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{desc}</AccordionPanel>
					</>
				)}
			</AccordionItem>
		</>
	);
};

export default CustomAccordionItem;
