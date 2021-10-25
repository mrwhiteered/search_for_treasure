


 var getRandomNumber = function (size) {
     return Math.floor(Math.random() * size);
 };
 var width = 800;
 var height = 800;
 var clicks = 0;
 var lose = 25;

 var target = {
     x: getRandomNumber(width),
     y: getRandomNumber(height)
 };

 
 var getDistance = function (event, target) {
     var diffX = event.offsetX - target.x;
     var diffY = event.offsetY - target.y;
     return Math.sqrt ((diffX * diffX) + (diffY * diffY));
 };

 var getDistanceHint = function (distance) {
if ((distance > 15) && (distance < 25)) {
return "Обожжешься! Сделано ходов: " + clicks + " из " +lose;
} else if (distance < 50) {
return "Очень горячо! Сделано ходов: " + clicks + " из " +lose;
} else if (distance < 100) {
return "Горячо! Сделано ходов: " + clicks + " из " +lose;
} else if (distance <200) {
return "Тепло! Сделано ходов: " + clicks + " из " +lose;
} else if (distance < 400) {
return "Холодно! Сделано ходов: " + clicks + " из " +lose;
} else if (distance < 600) {
return "Очень холодно! Сделано ходов: " + clicks + " из " +lose;
} else {
return "Замерзнешь! Сделано ходов: " + clicks + " из " +lose;
}
};
$("#map").click(function (event){

     clicks++;

     if (clicks > lose) {
    alert ("КОНЕЦ ИГРЕ слишком много кликов");
}


var distance = getDistance(event, target);

var distanceHint = getDistanceHint(distance);

$("#distance").text(distanceHint);

if (distance < 15 ) {
alert ("Клад найден! Сделано кликов: " + clicks);
}
});

