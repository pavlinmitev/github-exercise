class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};

    }

    registerChild(name, grade, budget) {


        if(budget<this.budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
       for(let kidz of this.kids[grade]){
            if(kidz.name===name){
              return `${name} is already in the list for this ${this.destination} vacation.`
            }
       }
        this.kids[grade].push({name:name,budget:budget});
        let arr=[];
      for(let kid of this.kids[grade]){
          arr.push(kid.name+"-"+kid.budget);
      }
      return arr
    }
    removeChild(name,grade){
        let counter=0;
        let fake=[];
        if(!this.kids.hasOwnProperty(grade)){
            return `We couldn't find ${name} in ${grade} grade.`
        }
        for(let children of this.kids[grade]) {
            if (children.name === name) {
                this.kids[grade].splice(counter, 1);
                 this.kids[grade].forEach(function(element){
                  fake.push(element.name+"-"+element.budget);
                  return fake;

                });
               counter++;

            }


        }
        return `We couldn't find ${name} in ${grade} grade.`
    }
    toString(){
        let result=[];

        if(this.numberOfChildren===0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;


        }
        else{

            result.push(`${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`);

            let keys=Object.keys(this.kids).sort((a,b)=>{return a-b});
            console.log(keys);
            for(let key of keys){
result.push("Grade: "+key);
                let counter=1;
                for(let students of this.kids[key]){

result.push(counter+". "+students.name+"-"+students.budget);
counter++;

                }
            }
        }
result[result.length-1]+="\n";
        return result.join("\n");

    }

    // Miss Elizabeth will take 4 children on trip to Dubai
    // Grade: 5
    // 1. Gosho-3000
    // 2. Tanya-5000
    //
    // Grade: 7
    // 1. Pesho-4000
    //
    // Grade: 10
    // 1. Mitko-5500




    get numberOfChildren(){
        let total=0;
        let keys=Object.keys(this.kids);
        for(let key of keys) {
            for (let kidw of this.kids[key]) {
                total += kidw.length;
            }
        }
      return total;
    }
}
let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());



