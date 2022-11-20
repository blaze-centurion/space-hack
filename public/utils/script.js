const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 130; // km
const TIME_STEP = 3 * 1000; // per frame

const timeLogger = document.getElementById("time-log");

const N = 100;
let gData = [];

const world = CreateWorld();

let whiteI = 0;
let redI = 1;
let greenI = 2;
const LINKS = [
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=last-30-days&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=analyst&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=weather&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=dmc&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=oneweb&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=iridium-NEXT&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=nnss&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=musson&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=military&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=radar&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=cubesat&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=other&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=1982-092&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=1999-025&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=iridium-33-debris&FORMAT=tle",
	"https://celestrak.org/NORAD/elements/gp.php?GROUP=cosmos-2251-debris&FORMAT=tle",
];
let indexes = [];
let colors = [
	"#fff",
	"#2ecc71",
	"#3498db",
	"#9b59b6",
	"#e74c3c",
	"#f1c40f",
	"#d35400",
	"#182C61",
	"#FC427B",
	"#D6A2E8",
	"#ff3838",
	"#34e7e4",
	"#3c40c6",
	"#079992",
	"#a4b0be",
	"#a4b0be",
	"#a4b0be",
	"#a4b0be",
];
let currentColor = "#a4b0be";
let sat_obj = {};
let data_list = [];
let showPropg = true;
const sat_checkboxs = document.querySelectorAll(".sat_checkbox");
const propgation_item = document.querySelectorAll(".propgation");
// sat_checkboxs.forEach((item) => {
// 	item.addEventListener("change", function (e) {
// 		console.log(gData);
// 		let obj = sat_obj[this.getAttribute("name")];
// 		if (this.checked) {
// 			gData.concat(data_list.slice(obj[0], obj[1]));
// 			// obj[4] = true;
// 			obj[0] = gData.length;
// 			obj[1] = gData.length + obj[2];
// 			obj[4] = true;
// 			// indexes = indexes
// 			// 	.filter((i) => i[0] !== obj[0])
// 			// 	.map((indexItem) => {
// 			// 		if (indexItem[0] > obj[0]) {
// 			// 			return [
// 			// 				indexItem[0] - obj[2],
// 			// 				indexItem[1] - indexItem[2],
// 			// 				indexItem[2],
// 			// 				indexItem[3],
// 			// 			];
// 			// 		}
// 			// 		return indexItem;
// 			// 	});
// 			world.objectsData(gData);
// 		} else {
// 			if (!obj[4]) return;
// 			gData.splice(obj[0], obj[2]);
// 			obj[4] = false;
// 			// indexes.splice(obj[3],1)
// 			indexes = indexes
// 				.filter((i) => i[0] !== obj[0])
// 				.map((indexItem) => {
// 					if (indexItem[0] > obj[0]) {
// 						return [
// 							indexItem[0] - obj[2],
// 							indexItem[1] - indexItem[2],
// 							indexItem[2],
// 							indexItem[3],
// 						];
// 					}
// 					return indexItem;
// 				});
// 			world.objectsData(gData);
// 		}
// 	});
// });

propgation_item.forEach((item) => {
	item.addEventListener("click", function (e) {
		if (this.getAttribute("show") === "true") {
			showPropg = true;
		} else {
			showPropg = false;
		}
	});
});

setTimeout(() => world.pointOfView({ altitude: 3.5 }));

const fetchData = (url, apiName, ind) => {
	fetch(url)
		.then((r) => r.text())
		.then((rawData) => {
			const tleData = rawData
				.replace(/\r/g, "")
				.split(/\n(?=[^12])/)
				.filter((d) => d)
				.map((tle) => tle.split("\n"));

			let sData = tleData
				.map(([name, ...tle]) => ({
					satrec: satellite.twoline2satrec(...tle),
					name: name.trim().replace(/^0 /, ""),
				}))
				// exclude those that can't be propagated
				.filter(
					(d) => !!satellite.propagate(d.satrec, new Date()).position
				)
				.slice(0, 150);
			const len = sData.length;
			const start = gData.length;
			const end = gData.length + sData.length - 1;
			sat_obj = { ...sat_obj, [apiName]: [start, end, len, ind, true] };
			indexes = [...indexes, [start, end, len, ind, true]];
			gData = gData.concat(sData);
			data_list = data_list.concat(sData);
		});
};

SATELLITES.forEach((item, i) => {
	item.data.forEach((data, ind) => {
		fetchData(data.url, data.name, LINKS.indexOf(data.url));
	});
});

let time = new Date();
(function frameTicker() {
	requestAnimationFrame(frameTicker);
	if (showPropg) {
		time = new Date(+time + TIME_STEP);
		timeLogger.innerText = time.toString();
	}

	// Update satellite positions
	const gmst = satellite.gstime(time);
	gData.forEach((d, i) => {
		const eci = satellite.propagate(d.satrec, time);
		const gdPos = satellite.eciToGeodetic(eci.position, gmst);
		if (eci.position) {
			function findColor() {
				// indexes.some((item, x) => {
				// 	if (i >= item[0] && i < item[1]) {
				// 		currentColor = colors[x];
				// 		return true;
				// 	}
				// });
				for (key in sat_obj) {
					if (i >= sat_obj[key][0] && i < sat_obj[key][1]) {
						SATELLITES.some((a) => {
							return a.data.some((b) => {
								if (b.name === String(key)) {
									currentColor = b.color;
									return true;
								}
							});
						});
						break;
					}
				}
			}
			findColor();
			d.lat = satellite.radiansToDegrees(gdPos.latitude);
			d.lng = satellite.radiansToDegrees(gdPos.longitude);
			d.alt = gdPos.height / EARTH_RADIUS_KM;

			d.color = currentColor;
		}
	});
	world.objectsData(gData);
})();
