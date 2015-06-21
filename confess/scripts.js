var themes = ["Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Có!",
			  "Không!",
			  "Không!",
			  "Không!",
			  "Không!"],
	confessOrNot = Math.floor(Math.random() * themes.length);

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
		var theme = getCookie("confessOrNot");
	} else {
		setCookie("dateVisited", day, 1);
		setCookie("confessOrNot", confessOrNot, 1);
		console.log('Cookied!');

		var theme = confessOrNot;
	}

	/* Show theme color */
	if (themes[confessOrNot] == "Có!") {
		theColor = '#fa93ab';
	} else {
		theColor = '#aaa';
	}
	document.getElementById("body").style.backgroundColor = theColor;

	
	/* Show Random theme */
	document.getElementById('confess').innerHTML = themes[confessOrNot];
}