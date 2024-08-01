
import {addition, subtraction} from "./modules/math.js";
import {getDataFromAPI} from "./modules/fetchData.js";

const sum = addition(15,25);
console.log("Sum of a and b :",sum);

const sub = subtraction(50,25);
console.log("Sub of a and b :",sub);


// Fatching data from api
const url = 'https://jsonplaceholder.typicode.com/posts';


getDataFromAPI(url).then((data)=>{
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
      });