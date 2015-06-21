var themes = ["Bia",
			  "Coca-Cola",
			  "Pepsi",
			  "Sting Đỏ",
			  "Chanh Muối",
			  "C Sủi",
			  "Trà Sữa Bạc Hà",
			  "Trà Đá",
			  "Capuchino",
			  "Nước Lọc",
			  "Nước Bọt",
			  "Hôm nay khỏi uống đi",
			  "Cà Phê"],
	colors = ["#fbe603",
			  "#e61f1f",
			  "#1b2af4",
			  "#e61f1f",
			  "#5cd92b",
			  "#ff9806",
			  "#17de62",
			  "#22100f",
			  "#543b1f",
			  "#c6e8f5",
			  "#eee",
			  "#aaa",
			  "#1f1913"],
	whatToDrinkToday = Math.floor(Math.random() * themes.length);

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

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
	var dateVisited = getCookie("dateVisited");
	console.log('Checking Cookie!');

	if (dateVisited == day) {
		var theme = getCookie("whatToDrinkToday");
	} else {
		setCookie("dateVisited", day, 1);
		setCookie("whatToDrinkToday", whatToDrinkToday, 1);
		console.log('Cookied!');

		var theme = whatToDrinkToday;
	}

	/* Show theme color */
	document.getElementById("body").style.backgroundColor = colors[whatToDrinkToday];

	
	/* Show Random theme */
	document.getElementById('drink').innerHTML = themes[whatToDrinkToday];
}