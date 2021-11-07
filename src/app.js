<<<<<<< HEAD
//JS type safe değildir

console.log("Merhaba Kodlama.io")

let dolarDun= 9.20
let dolarBugun= 9.30

{

  let dolarDun=9.10

=======
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}

console.log(dolarDun)

<<<<<<< HEAD
const euroDun=11.2
//euroDun=11
=======
const euroDun = 11.2
//euroDun = 11
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

console.log(euroDun)

//array
//camelCasing
//PascalCasing
<<<<<<< HEAD

let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++)
{
   console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)

let sayi1=10
sayi1="Zeynep Özkum"
let student={id:1,name:"Zeynep"}
//console.log(student)

function save(puan=10,ogrenci) {
  
  console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students= ["Zeynep Özkum","Halit Kalaycı","Engin Toprak","Büşra"]

//console.log(students)

let students2= [student,{id:2,name:"Büşra"},"Ankara", {city:"İstanbul"}]
//console.log(students2)

//rest
//params
//varArgs
let showProducts= function(id,...products) {

  console.log(id)
  console.log(products[0])
  
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

//spread
let points= [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations=[10000,20000,30000,[40000,10000]]
let[small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1,number]) {

  console.log(small1)
  
}

someFunction(populations)

let category={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)
console.log(name)


=======
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
