let elList = document.querySelector('.game__list');
let elItem = document.querySelector('.game__item');
let count = 0;

let b = [];


countArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

elList.addEventListener('click', (e) => {
  for (let i = 0; i < 9; i++) {
    if (e.target.id == i) {
      if (e.target.classList.contains('game__item')) {
        e.target.innerHTML = arr[count];
        count++
        // console.log(elList.children[3].firstChild.className);
        // for (let j = 0; j < elList.children.length; j++) {
        //   console.log(e.target.firstChild.className);
        //   console.log(e.target.id);
        // console.log(e.target.id == '11');
        let countId = [];
        for (let j = 0; j < 9; j++) {
          // console.log(countArray[j]);
          // console.log(e.target.id);
          // console.log(e.target.id);
          // console.log(e.target.id == 0);
          // console.log(e.target.id == 1);
          // console.log(e.target.id == 2);
        }


          // b.push(e.target.id);

          // console.log(b);

          console.log(e.target.firstChild == gameX );
          
          if (b[0] == 0 && b[2] == 2 && b[4] == 4 && e.target.firstChild !== gameX) {
            console.log(65454654);
          }

          // console.log(e.target.id);
          // if (e.target.id == '12') {
            // console.log(e.target.id);
            // if (e.target.id == '13') {
              //   console.log(e.target.id);
              
              //     console.log(65654654);
              //   }
              // }
            }
          // if (elList.children[0].firstChild.className == 'fas fa-times' && elList.children[1].firstChild.className == 'fas fa-times' && elList.children[2].firstChild.className == 'fas fa-times'
          //     || elList.children[3].firstChild.className == 'fas fa-times' && elList.children[4].firstChild.className == 'fas fa-times' && elList.children[5].firstChild.className == 'fas fa-times') {
          //     console.log("x win");
          // }
          // else if () {
          //   console.log('xxxx win');
          //   console.log(elList.children[3]);
          //   console.log(elList.children[4]);
          //   console.log(elList.children[5]);
          // }
          // console.log(elList.children[j].firstChild.className == 'fas fa-times');
          // console.log(elList.children[j].children[j], j);
      }

      // for (let j = 0; j < 9; j++) {
      //   if (e.target.id == elList.children[j]) {

      //     console.log(elList.children[j]);
          
      //     elList.children[j].innerHTML = arr[0];
      //   }
      // }
    }
  }
)

let gameX = `<i class="fas fa-times"></i>`;
let gameO = `<i class="far fa-circle"></i>`;

// console.log(elList.children);


// elList.forEach(element => {
//   console.log(element);
// });

// for (item of elList) {
//   console.log(item);
// }


// elList.forEach(function(item){
//   console.log(item)
// })

// console.log(elList.children[0]);

let arr = [gameX, gameO, gameX, gameO, gameX, gameO, gameX, gameO, gameX];
