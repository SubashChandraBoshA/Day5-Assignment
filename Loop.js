const myResume = [{

    "name": "Subash Chandra Bosh",
    "address": "18, Srinivasa Nagar, Nallampalayam, Ganapathi Post, Coimbatore 641006",
    "mail": "hr.candysubash@gmail.com",
    "phNumber": "8681071823"

}];

//For Loop

for(let i = 0;i<myResume.length;i++){
    let obj = myResume[i];

    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);
}

//For Each

myResume.forEach(myResume => {
    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);
});

//For in

for(values in myResume) {
    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);
}

//For of

for(values of myResume){
    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.mail);
    console.log(obj.phNumber);  
}

console.log(myResume);
