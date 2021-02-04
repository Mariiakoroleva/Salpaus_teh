console.log('script Toimii!');
document.querySelector('#kirjoita').addEventListener('click', e=>{
  e.preventDefault());
document.querySelector('#taulukko').innerHTML = 'Taulukon sisalto muttuu nain';
document.querySelector('#temp').innerHTML = 'Temperature';
document.querySelector('#huh').innerHTML = 'huh';
});



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var getJSON = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function(){
	var status = xhr.status;
	if (status === 200){
	callback(null, xhr.response);
	}
	else{
	callback(status, xhr.response);
	}
	};
	xhr.send();
};
Function drawChart(){
	getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=450030001847393035313137&amount=10',function(err, data)
	{
	let dataTaukukko = '<table border=1><tr><td>Pvm</td><td>Temp</td><td>Huh</td></tr>';
	const dataHistoria = data.map(function(mittaus)
	{
	dataTaulukko = dataTaulukko + <tr><td>${mittaus.Timestamp}</td><td>${mittaus.Temp}</td><td>${mittaus.Huh}</td></tr>;
	});

	});

}