function Random(maximo) {
  return Math.floor(Math.random() * maximo);
}



let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


var excuse = document.getElementById("excuse");
excuse.innerHTML = who[Random(who.length)] + " " + action[Random(action.length)] + " " + what[Random(what.length)] + " " + when[Random(when.length)]


console.log(who[Random(who.length)] + " " + action[Random(action.length)] + " " + what[Random(what.length)] + " " + when[Random(when.length)] );
