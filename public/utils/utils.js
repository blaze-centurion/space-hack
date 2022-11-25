const CreateWorld = () =>
	Globe()
		.globeImageUrl(
			"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
		)
		.bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
		.backgroundImageUrl(
			"//unpkg.com/three-globe/example/img/night-sky.png"
		)(document.getElementById("chart"))
		.globeImageUrl(
			"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
		)
		.bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
		.objectLat("lat")
		.objectLng("lng")
		.objectAltitude("alt")
		.objectLabel("name")
		.objectThreeObject((d) => {
			return new THREE.Mesh(
				new THREE.SphereGeometry(1),
				new THREE.MeshLambertMaterial({
					color: d.color,
				})
			);
		})
		.onObjectClick((obj, evt, coord) => {
			const content = document.querySelector("#popup_content");
			const title = document.querySelector("#popup_title");
			document.querySelector(".popup").classList.add("active");
			title.innerHTML = "";
			content.innerHTML = "";
			title.innerHTML += obj.name;
			content.innerHTML += `
				<ul class="popup_content_list">
					<li>Latitude: ${obj.lat}</li>
					<li>Longitude: ${obj.lng}</li>
					<li>Altitude: ${obj.alt}</li>
				</ul>
			`;
		});

const SATELLITES = [
	{
		name: "Special Interest Satellites",
		data: [
			{
				name: "Last 30 Days' Launches",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=last-30-days&FORMAT=tle",
				color: "#fff",
			},
			{
				name: "Active Satellites ",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",
				color: "#2ecc71",
			},
			{
				name: "Analyst Satellites",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=analyst&FORMAT=tle",
				color: "#3498db",
			},
		],
	},
	{
		name: "Weather & Earth Resources Satellites",
		data: [
			{
				name: "Weather",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=weather&FORMAT=tle",
				color: "#9b59b6",
			},
			{
				name: "Disaster Monitoring",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=dmc&FORMAT=tle",
				color: "#e74c3c",
			},
		],
	},
	{
		name: "Communications Satellites",
		data: [
			{
				name: "Starlink",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle",
				color: "#f1c40f",
			},
			{
				name: "OneWeb ",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=oneweb&FORMAT=tle",
				color: "#d35400",
			},
			{
				name: "Iridium NEXT ",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=iridium-NEXT&FORMAT=tle",
				color: "#182C61",
			},
		],
	},
	{
		name: "Navigation Satellites",
		data: [
			{
				name: "Navy Navigation Satellite System (NNSS)",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=nnss&FORMAT=tle",
				color: "#FC427B",
			},
			{
				name: "Russian LEO Navigation",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=musson&FORMAT=tle",
				color: "#D6A2E8",
			},
		],
	},
	{
		name: "Miscellaneous Satellites",
		data: [
			{
				name: "Miscellaneous Military ",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=military&FORMAT=tle",
				color: "#ff3838",
			},
			{
				name: "Radar Calibration",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=radar&FORMAT=tle",
				color: "#34e7e4",
			},
			{
				name: "CubeSats",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=cubesat&FORMAT=tle",
				color: "#3c40c6",
			},
			{
				name: "Other Satellites",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=other&FORMAT=tle",
				color: "#079992",
			},
		],
	},
];
const DEBRIS = [
	{
		name: "Debris",
		data: [
			{
				name: "Russian ASAT Test Debris (COSMOS 1408)",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=1982-092&FORMAT=tle",
				color: "#a4b0be",
			},
			{
				name: "Chinese ASAT Test Debris (FENGYUN 1C)",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=1999-025&FORMAT=tle",
				color: "#a4b0be",
			},
			{
				name: "IRIDIUM 33 Debris",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=iridium-33-debris&FORMAT=tle",
				color: "#a4b0be",
			},
			{
				name: "COSMOS 2251 Debris",
				url: "https://celestrak.org/NORAD/elements/gp.php?GROUP=cosmos-2251-debris&FORMAT=tle",
				color: "#a4b0be",
			},
		],
	},
];
