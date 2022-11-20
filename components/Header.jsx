import { Box, Button, Image, Link } from "@chakra-ui/react";

const Header = () => {
	return (
		<>
			<Box display="flex" alignItems="center">
				<Image src="/logo.png" h="75px" />
				<Box
					flex="1"
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
				>
					<Link href="/" p="0" fontSize="16px" mx="3">
						Home
					</Link>
					<Link p="0" fontSize="16px" mx="3">
						About
					</Link>
					<Link href="/news" p="0" fontSize="16px" mx="3">
						Latest News
					</Link>
					<Link p="0" fontSize="16px" mx="3">
						Contact
					</Link>
					<Button
						variant="outline"
						colorScheme="blue"
						borderRadius="5px"
						height="auto"
						fontSize="15px"
						fontWeight="500"
						p="9px 20px"
						ml="2"
					>
						<a href="/tracker.html">Track Now</a>
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Header;
