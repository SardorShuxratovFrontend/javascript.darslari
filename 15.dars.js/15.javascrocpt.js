                      // objekt 2 //
 // Garbech colepsition nima - qisqasi musir digani avtomatik tarzda remov qiladi//
 // Garbech colepsition nima - qchonki objekt kerek bumagan holata yani
 // valyusi ecses bumagan yetib bumagan holat objekti qiymati nuul buganda
 // objektka hichqachon ecses kilolmemiz yani yetib bumass
 // holatka keldimi Garbech colepsition avtomatik tarzda 
 // hiptan uchirib yuboradi
 //1 Call Stack - malumotlarimiz joylasha veradi tugridan tugri//
 //2 Stack Memory - Primitiv data tayptegi veraybel joylasha veradi
 // qachonki  primitive link berganda uzini malumoti Heap joylashadi
 //3  Heap Spase -
   // == Call Stack == //
   //=====================

  // == This == // eng kata objekt // == window == //
      //  let user = {}
      //  console.log(this);//this digani window digani okalasi bir biriga teng
//=====================

// fuctsiya biriktirish yulari//
//1 yuli
// let user = {
//   name: 'webbrane',
//   sayHi() {
//     console.log("HI");
//   },
// };

// user.sayHi ()

//==========
//2 yuli

// function sayHi () {
//   console.log("HI");
// }

// let user = {
//   name: "webbrain",
//   sayHi,//<yuqorqadegi funksiyani nazarda tutush ucun 
// };
//  user.sayHi()
//====================
   // nomini uzibkan yosak//
// let user = {
//   name: "webbrain",
//   sayHi(){
//     console.log(`Hi,${ user.name} `);//null buganda hato beradi
//   },
// };

// let usr = user;
// user = null;
// usr.sayHi();

//======================
 // this bolan yozsak //
// let user = {
//   name: "webbrain",
//   sayHi(){
//     console.log(`Hi,${ this.name} `);//null busayam hato bermedi
//   }
// };

// let usr = user;
// user = null;
// usr.sayHi();
//=================
  
// == Arow functionda this yuq ishlamedi == //

 // this bolan yozsak //
// let user = {
//  getName: () => {
//   console.log(`Hi,${ this.name} `);
// },
// };

// let usr = user;
//  usr.getName()
//=====================

// Arow functionda this ta ishlatish wreper orqali  ecses qise buladi//

// let user = {
//   name: "webbrain",
//   sayHi(){
//     console.log(`Hi,${ this.name} `);//null busayam hato bermedi
//   },
//  getName: function () {
//   return() => {
//     console.log(`Hi,${ this.name} `);
//    }
//  },
// };

// let usr = user;
//  usr.getName()();
//============================

//== Constructor function == //

// function getName() {
//   console.log(this);
// }
//  new getName()
//================
// function getName() {    
//   this.name = 'webbrain';
//   this.syaHi = function (){
//     console.log(this);
//     return "hey";
//   };
//   }
//    console.log(new getName().syaHi());
  