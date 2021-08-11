// callback function  with timeout 

// const fun1=()=>{
//     setTimeout(function(){      
//     console.log("helllo world");
//     },3000);

// }
// const fun2=()=>{
//     console.log("you are right");
// }
// fun1();
// fun2();

// 2nd example of callback function 

// const person1=(friend,callfriend)=>{
//     console.log(`i am busy right now please call ${friend} me back`);
//     callfriend()
// }
// const person2=()=>{
//     console.log(`hello everyone i ma back`);
// }

// person1("kundan",person2);
// 3rd example 

// const getRollno=()=>{
//     setTimeout( ()=>{
//         console.log(`hello world`);
//     },3000);
    
// }
// getRollno()



// callback function

function getUsername(callback){
callback({name:"kundan"},getDepartment)
}
function getAge(data,callback){
data={...data ,age:25};
callback(data, getEmployeeid);
}
function getDepartment(data,callback){
    data={...data ,Department:"production"};
callback(data, printInfo);

}
function getEmployeeid(data,callback){
    callback(data);

}
function printInfo(data){
    console.log(data);
}
getUsername(getAge);


// calback chaining promises


// function getUsername(){
//     return new Promise((resolve,reject)=>{
//         resolve({name: 'kundan'});
//     });

// }
// function getAge(data){
// return new Promise((resolve,reject)=>{
//     data ={...data,age :25};
//     resolve(data);
// });

// }
// function getDepartment(data){
//     return new Promise((resolve,reject)=>{
//         data={...data,department:"production"};
//         resolve(data)
//     });


// }
// function getEmployeeid(data){
//     return new Promise((resolve,reject)=>{
//        resolve(data)
//     });
// }
// function printInfo(data){
//         console.log(data);
// }
// getUsername()
// .then(getAge)
// .then(getDepartment)
// .then(getEmployeeid)
// .then(printInfo)