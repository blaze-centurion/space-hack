const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 130; // km
const TIME_STEP = 2 * 1000; // per frame

const timeLogger = document.getElementById("time-log");

let gData = [];

const world = CreateWorld();
setTimeout(() => world.pointOfView({ altitude: 3.5 }));

let data_list = [];
let showPropg = true;
const sat_checkboxs = document.querySelectorAll(".sat_checkbox");
const propgation_item = document.querySelectorAll(".propgation");
const propgation_label = document.querySelector(".propg_label span");
const deb_item = document.querySelector(".propgation");
const deb_checkbox = document.querySelector(".deb_checkbox");
let exc_colors = [];

sat_checkboxs.forEach((item) => {
	item.addEventListener("change", function (e) {
		if (this.checked) {
			exc_colors = exc_colors.filter(
				(i) => i !== this.getAttribute("color")
			);
		} else {
			exc_colors = exc_colors.concat(this.getAttribute("color"));
		}
	});
});
deb_checkbox.addEventListener("change", function (e) {
	if (this.checked) {
		exc_colors = exc_colors.filter((i) => i !== this.getAttribute("color"));
	} else {
		exc_colors = exc_colors.concat(this.getAttribute("color"));
	}
});

propgation_item.forEach((item) => {
	item.addEventListener("click", function (e) {
		if (this.getAttribute("show") === "true") {
			showPropg = true;
			propgation_label.innerHTML = `Show Satellite Propogation`;
		} else {
			showPropg = false;
			propgation_label.innerHTML = `Stop Satellite Propogation`;
		}
	});
});

const fetchData = (url, color) => {
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
					colorName: color,
				}))
				// exclude those that can't be propagated
				.filter(
					(d) => !!satellite.propagate(d.satrec, new Date()).position
				)
				.slice(0, 150);
			gData = gData.concat(sData);
			data_list = gData.concat(sData);
		});
};

SATELLITES.forEach((item) => {
	item.data.forEach((data) => {
		fetchData(data.url, data.color);
	});
});
DEBRIS.forEach((item) => {
	item.data.forEach((data) => {
		fetchData(data.url, data.color);
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
	gData = data_list.filter((item) => !exc_colors.includes(item.colorName));
	world.objectsData(gData);

	gData.forEach((d, i) => {
		const eci = satellite.propagate(d.satrec, time);
		const gdPos = satellite.eciToGeodetic(eci.position, gmst);
		if (eci.position) {
			d.lat = satellite.radiansToDegrees(gdPos.latitude);
			d.lng = satellite.radiansToDegrees(gdPos.longitude);
			d.alt = gdPos.height / EARTH_RADIUS_KM;
			d.color = d.colorName;
		}
	});
	world.objectsData(gData);
})();
