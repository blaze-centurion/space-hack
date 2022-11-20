import {
	Accordion,
	Box,
	Button,
	Container,
	Grid,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import BannerList from "../components/BannerList";
import Header from "../components/Header";
import CountUp, { useCountUp } from "react-countup";
import Link from "next/link";
import CustomAccordion from "../components/CustomAccordionItem";

const index = () => {
	return (
		<>
			<Container maxW="xxl" px="7rem">
				<Header />
				<Grid templateColumns="1fr 1fr" mb="3rem" placeItems="center">
					<Box>
						<Heading fontSize="55px">
							<span style={{ color: "#3498db" }}>Track</span> and
							<span style={{ color: "#3498db" }}> Research</span>
							<br /> about{" "}
							<span style={{ color: "#ff7f50" }}>
								Orbital Debris
							</span>
						</Heading>
						<Box p="1rem 1.5rem">
							<BannerList text="Analyse different types of satellites and debris." />
							<BannerList text="Get details of different satellite and debris." />
							<BannerList text="Read news regarding debris or space." />
						</Box>
						<Button
							variant="outline"
							colorScheme="blue"
							fontWeight="500"
							ml="10px"
							p="10px 20px"
						>
							<Link href="/tracker.html">Track Now</Link>
						</Button>
						<Button
							variant="outline"
							color="#ff7f50"
							borderColor="#ff7f50"
							fontWeight="500"
							ml="10px"
							p="10px 20px"
						>
							<Link href="/news">Read News</Link>
						</Button>
					</Box>
					<Image src="/banner.webp" height="700px" />
				</Grid>

				<Grid templateColumns="1fr 1fr" mb="2rem" gridGap="3rem">
					<Image src="/space_ship.png" />
					<Box mt="3rem">
						<Heading fontSize="35px">
							What is{" "}
							<span style={{ color: "#ff7f50" }}>
								Orbital Debris
							</span>
							?
						</Heading>
						<Text p="10px 0" color="whiteAlpha.700">
							Orbital debris (duh BREE) is &quot;junk&quot; that
							is circling Earth. It is pieces from spacecraft.
							Humans have been launching objects into space for
							more than 50 years. Most of those objects have
							fallen back to Earth. A piece of debris falls back
							to Earth about once a day. These objects either land
							or burn up in the atmosphere. Most objects that
							return to Earth end up in water, since it makes up
							70 percent of Earth&apos;s surface. But many of the
							objects sent into space are still in orbit around
							Earth.
						</Text>
					</Box>
				</Grid>
				<Grid templateColumns="1fr 1fr" mb="2rem" placeItems="center">
					<Box>
						<Heading fontSize="35px">
							Problems of{" "}
							<span style={{ color: "#ff7f50" }}>
								Orbital Debris
							</span>
							!
						</Heading>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							p="20px 15px"
							bg="whiteAlpha.100"
							borderRadius="5px"
							mt="15px"
						>
							<Image src="/checked.png" width="20px" />
							<Text ml="10px">
								Satellite collisions would produce orbiting
								fragments, each of which would increase the
								probability of further collisions, leading to
								the growth of a belt of debris around the Earth
							</Text>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							p="20px 15px"
							bg="whiteAlpha.100"
							borderRadius="5px"
							mt="15px"
						>
							<Image src="/checked.png" width="20px" />
							<Text ml="10px">
								Debris leads to significant problems for
								spaceflight around Earth. The risk would be
								highest for objects orbiting at an altitude of
								around 1,000 kilometres (620 miles), which is
								used for communications and Earth observation.
							</Text>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							p="20px 15px"
							bg="whiteAlpha.100"
							borderRadius="5px"
							mt="15px"
						>
							<Image src="/checked.png" width="20px" />
							<Text ml="10px">
								Sometimes debris could collide with satellites
								and even a small debris could lead to a damage
								to satellites and thus increases the cost of
								maintainence.
							</Text>
						</Box>
					</Box>

					<Image src="/problem.png" />
				</Grid>
				<Box
					bg="whiteAlpha.50"
					w="100%"
					boxShadow="0 0 10px rgba(255,255,255,0.2)"
					borderRadius="5px"
					mb="3rem"
					p="1.4rem"
					pt="2rem"
					textAlign="center"
				>
					<Heading fontSize="35px">
						Why Is{" "}
						<span style={{ color: "#ff7f50" }}>
							Orbital Debris{" "}
						</span>
						Important!
					</Heading>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						w="80%"
						m="4rem auto"
					>
						<Box>
							<CountUp
								end={50}
								enableScrollSpy
								style={{
									fontSize: "55px",
									color: "#fff",
									fontWeight: "bold",
								}}
								suffix="MM +"
							/>
							<Text
								fontSize="17px"
								color="whiteAlpha.700"
								fontWeight="500"
							>
								Debris present in space
							</Text>
						</Box>
						<Box>
							<CountUp
								end={6000}
								enableScrollSpy
								style={{
									fontSize: "55px",
									color: "#fff",
									fontWeight: "bold",
								}}
								suffix="Tons +"
							/>
							<Text
								fontSize="17px"
								color="whiteAlpha.700"
								fontWeight="500"
							>
								of debris is present in outer space
							</Text>
						</Box>
						<Box>
							<CountUp
								end={100}
								enableScrollSpy
								style={{
									fontSize: "55px",
									color: "#fff",
									fontWeight: "bold",
								}}
								suffix="MM +"
							/>
							<Text
								fontSize="17px"
								color="whiteAlpha.700"
								fontWeight="500"
							>
								Revenue used to remove debris
							</Text>
						</Box>
					</Box>
				</Box>
				<Grid templateColumns="1fr 1fr" mb="4rem" gridGap="3rem">
					<Image src="/solution.png" />
					<Box>
						<Heading fontSize="35px">
							Solutions for{" "}
							<span style={{ color: "#ff7f50" }}>
								Orbital Debris
							</span>
							!
						</Heading>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							p="20px 15px"
							bg="whiteAlpha.100"
							borderRadius="5px"
							mt="15px"
						>
							<Image src="/checked.png" width="20px" />
							<Text ml="10px">
								De Orbiting – pushing this junk out of orbit and
								into the Earth’s atmosphere where it can burn
								up. The most common approach, is to opt for a
								controlled re-entry. This solution is quite
								heavy and expensive, as it requires additional
								fuel.
							</Text>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							p="20px 15px"
							bg="whiteAlpha.100"
							borderRadius="5px"
							mt="15px"
						>
							<Image src="/checked.png" width="20px" />
							<Text ml="10px">
								Laser orbital debris removal (LODR) is used to
								solve the orbital debris crisis within the low
								Earth orbit (LEO). LODR is a contactless method
								in that applying a force or impulse to the
								object to be de-orbited does not require to
								physically contact it. The system uses a laser
								either on Earth or in orbit to shone on the
								object that is to be deorbited
							</Text>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							p="20px 15px"
							bg="whiteAlpha.100"
							borderRadius="5px"
							mt="15px"
						>
							<Image src="/checked.png" width="20px" />
							<Text ml="10px">
								Deployable nets are deploy something akin to a
								fisher’s net called a tether-net from a chaser
								spacecraft (still connected to the net) in the
								proximity of an orbital debris that needs to be
								removed from orbit. The tether-net is deployed
								ahead of the debris to be removed. The debris
								slowly drifts into and gets tangled by the
								tether net. Then the chaser spacecraft fires
								thrusters to change the orbit of both itself and
								the debris in the net such that they will
								reenter Earth’s atmosphere and burn.
							</Text>
						</Box>
					</Box>
				</Grid>

				<Box mb="2rem">
					<Heading textAlign={"center"} fontSize="35px" mb="2rem">
						FAQs
					</Heading>
					<Accordion allowMultiple maxW="70%" m="auto">
						<CustomAccordion
							title="What are examples of orbital debris?"
							desc="Derelict spacecraft and upper stages of launch vehicles, carriers for multiple payloads, debris intentionally released during spacecraft separation from its launch vehicle or during mission operations, debris created as a result of spacecraft or upper stage explosions or collisions, solid rocket motor effluents, and tiny flecks of paint released by thermal stress or small particle impacts."
						/>
						<CustomAccordion
							title="Is there an international treaty on orbital debris?"
							desc="No, but the leading space agencies of the world have formed the Inter-Agency Space Debris Coordination Committee (IADC) to address orbital debris issues and to encourage operations in Earth orbit which limit the growth of orbital debris. In addition, since 1994 orbital debris has been a topic of assessment and discussion in the Scientific and Technical Subcommittee of the United Nations Committee on the Peaceful Uses of Outer Space (COPUOS). Both IADC and COPUOS have published orbital debris mitigation guidelines for the international community to follow."
						/>
						<CustomAccordion
							title="How is the number of orbital debris determined?"
							desc="Large orbital debris (> 10 cm) is tracked routinely by the U.S. Space Surveillance Network. Objects as small as 3 mm can be detected by ground-based radars, providing a basis for a statistical estimate of their numbers. Assessments of the population of orbital debris smaller than 1 mm can be made by examining impact features on the surfaces of returned spacecraft, although this has been limited to spacecraft operating in altitudes below 600 km."
						/>
						<CustomAccordion
							title="Does the International Space Station have to dodge orbital debris?"
							desc="The U.S. Space Surveillance Network regularly examines the trajectories of orbital debris to identify possible close encounters. If another object is projected to come within a few kilometers of the International Space Station (ISS), the ISS will normally maneuver away from the object if the chance of a collision exceeds 1 in 10,000. This occurs infrequently, about once a year on average."
						/>
						<CustomAccordion
							title="How fast is orbital debris traveling?"
							desc="In low Earth orbit (below 2,000 km), orbital debris circles the Earth at speeds of about 7 to 8 km/s. However, the average impact speed of orbital debris with another space object is approximately 10 km/s, and can be up to about 15 km/s, which is more than 10 times the speed of a bullet. Consequently, collisions with even a small piece of debris will involve considerable energy."
						/>
						<CustomAccordion
							title="Is reentering debris a risk to people and property on Earth?"
							desc="A significant amount of debris does not survive the severe heating that occurs during reentry. Components which do survive are most likely to fall into the oceans or other bodies of water or onto sparsely populated regions like the Canadian Tundra, the Australian Outback, or Siberia in the Russian Federation. During the past 50 years an average of one cataloged piece of debris fell back to Earth each day. No serious injury or significant property damage caused by reentering debris has been confirmed."
						/>
					</Accordion>
				</Box>

				<Box
					borderTop="1px solid rgba(255,255,255,0.16)"
					display="flex"
					alignItems="center"
					fontSize="16px"
					color="whiteAlpha.700"
				>
					<Image src="/logo.png" h="90px" />
					<Text>Copyright @ 2022 Orbitron</Text>
				</Box>
			</Container>
		</>
	);
};

export default index;
