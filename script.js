'use strict';

function getWeather() {
  const lat = ;
  const lon = ;
  const appId = ;

  const urlBase = 'https://api.openweathermap.org/data/2.5/';
  const endPoint = 'onecall';
  const params = '?lat='+lat+'&lon='+lon+'&units=metric&appid='+appId;



}

window.onload = (function() { getWeather() });
