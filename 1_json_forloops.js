var arr = [
    { "name" : "John" , "age" : "22"  } ,
    { "name" : "Thamizh" , "age" : "23"  } ,
   { "name" : "Kaveen" , "age" : "24"  } 
 ];
 
 // for Loop :
 for(let i=0;i<arr.length;i++){
     console.log(arr[i]["name"], arr[i]["age"]);
 }

 var object = {
     "Name" : "John" ,
     "Age" : "22" ,
     "year" : "2022"
 }
 
 // for in :

 console.log("\n", "in object");     // in objects
 for(let i in object){           
    console.log(i, object[i]);  
 }

 console.log("\n", "in array of objects");     // in array of objects

 for(let i in arr){             
    console.log(arr[i]["name"], arr[i]["age"]);
 }

 console.log("\n");

 // for of :
 for(i of arr){
    console.log(i["name"], i["age"]);
 }

 console.log("\n");

 // for each :
 arr.forEach((e)=> {
     console.log(e["name"], e["age"]);    
 })