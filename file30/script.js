// Transform array into string-------- 

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ... `);

const printForecast = function (arr) {
 let brr = '';
 for(let i=0; i<arr.length; i++){
   str = str + `${arr[i]}°C in ${i+1} days ... `;


 };
 console.log('... ' + str);
}
printForecast(data1);
printForecast(data2);
