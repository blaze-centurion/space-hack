import { Box, Container, Grid, Heading, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FilterButton from "../components/FilterButton";
import Header from "../components/Header";
import NewsItem from "../components/NewsItem";
import SearchBar from "../components/SearchBar";
import SmallNewsItem from "../components/SmallNewsItem";

const news = () => {
	const [loading, setLoading] = useState(true);
	const [trendingNews, setTrendingNews] = useState([]);
	const [indiaNews, setIndiaNews] = useState([]);
	const [news, setNews] = useState([]);
	const [input, setInput] = useState("");
	const [filter, setFilter] = useState("");
	const [domains, setDomain] = useState("");

	useEffect(() => {
		const getNews = async () => {
			const trendRes = await fetch(
				"https://newsapi.org/v2/top-headlines?q=space&apiKey=02bdbf8a6c35418bb25eb5aeb9d4f8ce"
			);
			const newsRes = await fetch(
				"https://newsapi.org/v2/everything?q=space&apiKey=02bdbf8a6c35418bb25eb5aeb9d4f8ce"
			);
			const indiaRes = await fetch(
				"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=02bdbf8a6c35418bb25eb5aeb9d4f8ce"
			);
			const newsData = await newsRes.json();
			const trendData = await trendRes.json();
			const indiaData = await indiaRes.json();
			setNews(newsData.articles.slice(0, 10));
			setTrendingNews(trendData.articles.slice(0, 5));
			setIndiaNews(indiaData.articles.slice(0, 5));
			setLoading(false);
		};
		getNews();
	}, []);

	const search = async (e) => {
		e.preventDefault();
		const res = await fetch(
			`https://newsapi.org/v2/everything?q=${input}&apiKey=02bdbf8a6c35418bb25eb5aeb9d4f8ce`
		);
		const data = await res.json();
		console.log(data);
		setNews(data.articles.slice(0, 10));
	};

	if (loading) {
		return (
			<Box
				w="100vw"
				h="100vh"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Spinner size="xl" />
			</Box>
		);
	}

	return (
		<>
			<Container maxW="xxl" px="7rem">
				<Header />
				<Heading
					textAlign="center"
					fontSize="30px"
					fontWeight="500"
					mt="5"
				>
					Find the Latest News
				</Heading>
				<Box
					display="grid"
					gridTemplateColumns="1.3fr 0.7fr"
					mt="2rem"
					mx="3rem"
				>
					<Box p="10px 2rem">
						<SearchBar
							input={input}
							setInput={setInput}
							onSubmit={search}
						/>
						<Box
							display="flex"
							whiteSpace="nowrap"
							alignItems="center"
							overflow="auto"
							p="1rem 0"
						>
							<FilterButton text="All" />
							<FilterButton text="Trending" />
							<FilterButton text="From BCC" />
							<FilterButton text="From SpaceX" />
							<FilterButton text="From Nasa" />
							<FilterButton text="From Nasa" />
						</Box>

						<Grid
							templateColumns="repeat(2,1fr)"
							gridGap="15px 15px"
						>
							{news.map((item, i) => {
								const d = new Date(item.publishedAt);
								return (
									<NewsItem
										key={i}
										title={item.title}
										img={item.urlToImage}
										url={item.url}
										author={item.author}
										desc={item.description}
										date={`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}
										source={item.source.name}
									/>
								);
							})}
						</Grid>
					</Box>
					<Box pt="10px">
						<Box bg="whiteAlpha.50" borderRadius="10px" mb="1rem">
							<Box
								borderBottom="1px solid rgb(255 255 255 / 16%)"
								p="15px"
							>
								Trending News
							</Box>
							<Grid
								templateColumns="repeat(1,1fr)"
								gridGap="10px"
								p="10px"
							>
								{trendingNews.map((item, i) => {
									const d = new Date(item.publishedAt);
									return (
										<SmallNewsItem
											key={i}
											title={item.title}
											img={item.urlToImage}
											url={item.url}
											date={`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}
											source={item.source.name}
										/>
									);
								})}
							</Grid>
						</Box>
						<Box bg="whiteAlpha.50" borderRadius="10px" mb="1rem">
							<Box
								borderBottom="1px solid rgb(255 255 255 / 16%)"
								p="15px"
							>
								News From India
							</Box>
							<Grid
								templateColumns="repeat(1,1fr)"
								gridGap="10px"
								p="10px"
							>
								{indiaNews.map((item, i) => {
									const d = new Date(item.publishedAt);
									return (
										<SmallNewsItem
											key={i}
											title={item.title}
											img={item.urlToImage}
											url={item.url}
											date={`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}
											source={item.source.name}
										/>
									);
								})}
							</Grid>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default news;
