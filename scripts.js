function colorOfToday() {
	return "#" + Math.random().toString(16).slice(2, 8);
}
var colorOfTheDay = colorOfToday(), gColorA = colorOfToday(), gColorB = colorOfToday(),
	colorType = Math.floor((Math.random() * 2) + 1),
	themes = ["Admixture",
			  "Airflow",
			  "Angry",
			  "Sexy",
			  "Wet",
			  "Solid",
			  "Flying",
			  "Floating",
			  "Sky",
			  "Clouds",
			  "Boom",
			  "Love",
			  "Sex",
			  "Kid",
			  "Gun",
			  "Sword",
			  "Car",
			  "Bike",
			  "Water",
			  "Box",
			  "Book",
			  "Wet",
			  "Wide",
			  "Shadow",
			  "Mountain",
			  "Cloud",
			  "Ball",
			  "Flowers",
			  "Portrait",
			  "Music",
			  "Christmas",
			  "Summer",
			  "Winter",
			  "Spring",
			  "Autumn",
			  "Dinosaur",
			  "Dog",
			  "Cat",
			  "Bird",
			  "Cow",
			  "Linear",
			  "Rounded",
			  "Polygon",
			  "Rectagle",
			  "Triange"],
	themeOfTheDay = themes[Math.floor(Math.random() * themes.length)];

function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	var visit = getCookie("visit"),
		hcolor = "",
		selectTitle = "Click to select this color!";
	if (visit === "visitedz") {
		console.log('User visited!');
		var color = getCookie("colorOfTheDay"),
			ctype = getCookie("colorType"),
			graCA = getCookie("gColorA"),
			graCB = getCookie("gColorB"),
			theme = getCookie("themeOfTheDay");
	} else {
		console.log('New user');
		setCookie("visit", "visited", 1);
		setCookie("colorOfTheDay", colorOfTheDay, 1);
		setCookie("colorType", colorType, 1);
		setCookie("gColorA", gColorA, 1);
		setCookie("gColorB", gColorB, 1);
		setCookie("themeOfTheDay", themeOfTheDay, 1);

		var color = colorOfTheDay,
			ctype = colorType,
			graCA = gColorA,
			graCB = gColorB,
			theme = themeOfTheDay;
	}

	/* Set background color */
	if (ctype == 1) {
		color = color;
		hcolor = "<b id='graCA'>" + color + "</b>";
		document.getElementById("body").style.backgroundColor = color;
	} else {
		var graCSS = "background: " + graCA + "; background: -moz-linear-gradient(top,  " + graCA + " 0%, " + graCB + " 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%," + graCA + "), color-stop(100%," + graCB + ")); background: -webkit-linear-gradient(top,  " + graCA + " 0%," + graCB + " 100%); background: -o-linear-gradient(top,  " + graCA + " 0%," + graCB + " 100%); background: -ms-linear-gradient(top,  " + graCA + " 0%," + graCB + " 100%); background: linear-gradient(to bottom,  " + graCA + " 0%," + graCB + " 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='" + gColorA + "', endColorstr='" + graCB + "',GradientType=0 );",
			color = graCA,
			hcolor = "<b id='graCA'>" + graCA + "</b><span>, </span><b id='graCB'>" + graCB + "</b>";
		document.getElementById("body").setAttribute("style", graCSS);
	}
	document.getElementById("back").style.backgroundColor = color;

	/* Show Random HEX color code */
	document.getElementById('colorOfTheDay').innerHTML = hcolor;

	/* Show Random theme */
	document.getElementById('themeOfTheDay').innerHTML = theme;
}
function selectText(containerid) {
	if (document.selection) {
		var range = document.body.createTextRange();
			range.moveToElementText(document.getElementById(containerid));
			range.select();
	} else if (window.getSelection) {
		var range = document.createRange();
			range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
	}
}
document.onclick = function(e) {
	document.getElementById("graCA").className = "";
	if (colorType === 2) {document.getElementById("graCB").className = "";}
	if (e.target.id === 'graCA' || e.target.id === 'graCB') {
		selectText(e.target.id);
		e.target.className = "selected";
	}
};