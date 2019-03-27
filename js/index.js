var xmlhttp = new XMLHttpRequest();
var url = "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var jsonArray = JSON.parse(this.responseText);
		for(var i = 0; i < jsonArray.data.length; i++) {
			var obj = jsonArray.data[i]
			if(obj[10] == "Golden Gate Bridge")
			document.getElementById('result').innerHTML += obj[8] + "&nbsp&nbsp|&nbsp&nbsp  "
				+ obj[9] + "&nbsp&nbsp|&nbsp&nbsp" + obj[12] + "<br>" + "<br>"
		}
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
