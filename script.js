const $ = document ;
let image=['ImageOne','ImageTwo','ImageThree','ImageFour','ImageFive','ImageSix','ImageSeven','ImageEight','ImageNine','ImageTen','ImageEleven','ImageTwelve','ImageThirteen','ImageFourteen','ImageFifteen','ImageSixteen']
setInterval(function(){
    let randome = Math.floor(Math.random()*16)
    console.log(randome);
    $.body.style.backgroundImage='url("img/' + image[randome] + '.jpg")';
    console.log(image[randome]);
},4000)



