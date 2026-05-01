// Initial values
let temp = 24;
let soil = 55;
let hum = 70;

// Update fake live data + smart status
function updateData(){
temp += (Math.random() - 0.5);
soil += (Math.random() - 0.5)*2;
hum += (Math.random() - 0.5)*2;

```
document.getElementById("temp").innerText = temp.toFixed(1)+"°C";
document.getElementById("soil").innerText = soil.toFixed(0)+"%";
document.getElementById("hum").innerText = hum.toFixed(0)+"%";

let status = "Optimal";
let color = "#22c55e";

if(temp > 28 || soil < 40){
    status = "Warning ⚠️";
    color = "orange";
}

if(temp > 32 || soil < 30){
    status = "Critical 🔴";
    color = "red";
}

let el = document.getElementById("status");
el.innerText = status;
el.style.color = color;

// Update chart
chart.data.labels.push("");
chart.data.datasets[0].data.push(temp);

if(chart.data.labels.length > 10){
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
}

chart.update();
```

}

// run every 2 seconds
setInterval(updateData,2000);

// Chart setup
const ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx, {
type: 'line',
data: {
labels: ["","","","","",""],
datasets: [{
label: 'Temperature',
data: [24,25,23,26,24,25],
borderColor: '#22c55e',
tension: 0.4
}]
},
options:{
plugins:{
legend:{
labels:{color:"white"}
}
},
scales:{
x:{ticks:{color:"white"}},
y:{ticks:{color:"white"}}
}
}
});
