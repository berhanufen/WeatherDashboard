import './style.css';
import heavyrain from './heavy-rain.png';
import snowImg from './snow.png';
import sunImg from './sun.png';
import windImg from './wind.png';
async function getWeather(city){
   try{ const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=7PZK7NESG5BNWFATL985ALR72`;
    const dataJson=await  fetch(url);
        const data=await dataJson.json();
        console.log(data.days[0].datetime);
        return data;
    } catch(error){
        return null;
    }
}


    function getData(data){
    if(data==null) return;
    
   return {
    dateAndTime:data.days[0].datetime,
     temperature:data.days[0].temp,
     humidity:data.days[0].humidity,
    feelslike:data.days[0].feelslike,
    conditions:data.currentConditions.conditions,
    perciptype:data.currentConditions.preciptype,
    percioprob:data.currentConditions.precipprob,
    icon:data.currentConditions.icon,
    } ;
}
const btn=document.getElementById('search');
    
btn.addEventListener('click',async (event)=>{ 
   try{ event.preventDefault();
    const city=document.getElementById('city').value;
    const weather=await getWeather(city);
    const data=getData(weather);
    if(data){
    const container=document.getElementById('weather');
    container.innerHTML=`
    <h2> Today: ${data.dateAndTime}</h2>
    <p>  Temprature: ${data.temperature}</p>
    <p>  Humidity: ${data.humidity}</p>
    <p>  It feels like: ${data.feelslike}</p>
    <p>  Condition: ${data.conditions}</p>
    <p>  Percipitation type: ${data.perciptype}</p>
    <p>  Percipitation probability: ${data.percioprob}</p>
    `;
if(data.icon.includes('rain')){
    const icon=document.getElementById('icon');
    icon.innerHTML=`<img src='${heavyrain}' alt='rain photo'/>`;
    const body=document.querySelector('body');
    body.style.backgroundImage='url(https://i.pinimg.com/originals/94/db/fe/94dbfe24cb90b6d66c791ba1f6f72bc5.gif)';

}else if(data.icon.includes('snow')){
    const icon=document.getElementById('icon');
    icon.innerHTML=`<img src='${snowImg}' alt='snow photo'/>`;
}else if(data.icon.includes('clear-day')){
    const icon=document.getElementById('icon');
    icon.innerHTML=`<img src='${sunImg}' alt='sun photo'/>`;
}else if(data.icon.includes('wind')){
    const icon=document.getElementById('icon');
    icon.innerHTML=`<img src='${windImg}' alt='wind photo'/>`;
}else if (data.icon.includes('cloud')){
    const icon=document.getElementById('icon');
    icon.innerHTML=`<img src='${windImg}' alt='wind photo'/>`;
}
else{
    const icon=document.getElementById('icon');
    icon.innerHTML = `<p>Icon type: ${data.icon}</p>`;
}
}
    else{
        console.log('No data found');
        alert('city not found');
    }
} catch(error){
    console.error(error);
}
});

