// function Sid() {
//   const sid = "siddhant";
//   function Sidd() {
//     console.log(sid);
//   }
//   return Sidd;
// }

// const savior = Sid();
// savior();


// // 



function Outer(){
    const sid = "Siddhant"
    function Inner(){
console.log(sid)
    }
    return Inner
}

const Sid = Outer();

Sid();

// console.log(bhoo)
// const bhoo = 'sid'