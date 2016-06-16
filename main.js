function loadInfo() {
var request_object = new XMLHttpRequest();
request_object.onreadystatechange = function() {
if (request_object.readyState == 4 && request_object.status == 200) {
	var json_thing = JSON.parse(request_object.responseText);
    populateTable(json_thing);
    console.log(request_object);
}};
request_object.open("GET", "status_report.json", true);
request_object.send();
}

function populateTable(ro){
var intro = "<p>Beginning upload...</p>";
var out = "<table>";
console.log(ro.things.length);
console.log(ro.things[1].thing);
var i;
for(i = 0; i < ro.things.length; i++) {
    var a = i+1;
    out += "<tr class='fade-in thing" + a + "'><td>" + ro.things[i].thing + "</td><td>" + ro.things[i].status_of_thing + "</td></tr>";

 //<td>" + json_thing.things[i].status_of_thing + "</td></tr>";
}
out += "</table>";
document.getElementById("intro").innerHTML = intro;
document.getElementById("trying").innerHTML = out;
}

