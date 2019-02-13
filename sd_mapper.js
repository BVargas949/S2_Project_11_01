"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Bryan Vargas
   Date:   02/12/19

*/

// To variables were created. The first was named "thisTime" contains the current date and the second variable used the information from "thisTime" and made the information dependent on the next code that is written.
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

//The method of "get element by Id" is used to locate an html element, in this instance we use it to give it a value of "timeStr"
document.getElementById("timeStamp").innerHTML = timeStr;

//The variable of "this hour" has a the hour value from the "this time" date. likewise, the "thisMonth" variable had the month value from the "thisTime" date.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

//The variable "mapNum" has a value involviing both "thisMonth" and "thisHour".  The value derived from that calculation was inserted into an HTML element. The mapNum completed a file name and located it to render an image onto the page.
var mapNum = (thisHour + 2 * thisMonth) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png'/>";

//This  string brings in the image that was located and renders it directly after the first tag of "planisphere" element.
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);