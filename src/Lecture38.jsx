

// SPREAD OPERATOR IN REACT JS 


// case 1 
// const fullname =["abdul","jabbar"];
// const biodata = [1, ...fullname,26,"male"];

// // console.log(biodata);

// case 2
// var shooterGames = ['call of duty', 'far city', 'resident evil'];
// var recingGames = ['need for speed','gran turismo','burrnout'];


// var games = [...shooterGames,...recingGames];

// case 3 
// var shooterGames = ['call of duty', 'far city', 'resident evil'];

// var [first,...reamining]=shooterGames;


// console.log(first);
// console.log(reamining);


// case 4 

const fullName = {
    fname : "Abdul",
    lname : "Jabbar",
};

const biodata = {
    id :  1,
    ...fullName,
    age : 24,
    gender : "male"
}
 
console.log(biodata);