// let name = prompt('what is your name');
// let year = prompt('enter your year');
// let thisYear = 2025;
// let age = thisYear - year;

// console.log('welcom '  +  name  + ' your age is : '  + age) ;

let statusFan = false;
let fanSpeed =  0

function ShadElHable (){
if(statusFan  == false){
    statusFan = true
    fanSpeed = 1
    console.log("Fan open and  speed is : " +fanSpeed);
}else if (fanSpeed < 3) {
    fanSpeed++
    console.log("Fan speed is  :  " + fanSpeed )
}else{
    statusFan =false
    fanSpeed =0
    console.log("Fan off  and speed is  : "  +fanSpeed)
} 
};