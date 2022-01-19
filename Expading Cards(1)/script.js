const panels = document.querySelectorAll('.panel')




// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     remoeActiveClasses()
//     panel.classList.add('active')
//   })
// })

function nextPage() {
  panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
      if (index + 1 < panels.length) {
        remoeActiveClasses()
        panels[index + 1].classList.add('active')
        console.log(index + 2, panels.length)
      }
    })
  })
}

function remoeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
function changeLevel() {
  panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
      remoeActiveClasses()
      panels[index - 1].classList.add('active')
    })
  })
}
function exit() {
  panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
      remoeActiveClasses()
      panels[index - 2].classList.add('active')
    })
  })
}

// let attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function start(){
// let username = document.getElementById("#username").value;
// let password = document.getElementById("#password").value;
// if ( username == "abcd" && password == "1234"){
// alert ("Login successfully");
// window.location = nextPage(); // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("#username").disabled = true;
// document.getElementById("#password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }








function start() {
  let name = document.querySelector('#userName')
  let pass = document.querySelector('#password')
  if (name.value === 'abcd' && pass.value === '1234') {
    nextPage()
  }
  else{
    alert ('Wrong name or password')
    console.log('Wrong name or password');

  }
}


// function newGame(level) {
//   let a
//   let b = 10
//   let randShow

//   let mat = [
//     [1, 8, 5, 3, 4, 9, 6, 7, 2],
//     [6, 7, 2, 1, 8, 5, 4, 3, 9],
//     [3, 4, 9, 2, 7, 6, 1, 5, 8],
//     [8, 2, 6, 7, 5, 4, 9, 1, 3],
//     [7, 9, 4, 6, 1, 3, 2, 8, 5],
//     [5, 1, 3, 8, 9, 2, 7, 6, 4],
//     [2, 3, 8, 9, 6, 1, 5, 4, 7],
//     [4, 6, 7, 5, 2, 8, 3, 9, 1],
//     [9, 5, 1, 4, 3, 7, 8, 2, 6],
//   ]
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       b++
//       a = '#a' + b
//       document.querySelector(a).value = ''
//     }
//   }
//   b = 10
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       b++
//       a = '#a' + b
//       randShow = Math.floor(Math.random() * 10)
//       if (randShow > level) {
//         document.querySelector(a).value = mat[i][j]
//       }
//     }
//   }
//   nextPage()
// }
// function checkGame() {
//   let x
//   b = 10
//   let mat = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ]
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       b++
//       a = '#a' + b

//       x = document.querySelector(a)
//       mat[i][j] = x.value
//     }
//   }
//   console.log(mat)
//   let column = 0
//   let Row = 0
//   let index
//   let num
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       num = +mat[i][j]
//       index = arr.indexOf(num)
//       if (index === -1)
//         return console.log('not good column mat[', i, '][', j, ']')
//       else arr[index] = 0
//     }
//     arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   }

//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       num = +mat[j][i]
//       index = arr.indexOf(num)
//       if (index === -1) return console.log('not good row mat[', i, '][', j, ']')
//       else arr[index] = 0
//     }
//     arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   }
//   let col = 0,
//     ro = 0
//   arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   for (let z = 0; z < 9; z++) {
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         num = +mat[i + col][j + ro]
//         index = arr.indexOf(num)
//         if (index === -1)
//           return console.log('not good Square mat[', i + col, '][', j + ro, ']')
//         else arr[index] = 0
//       }
//     }

//     (i = 0), (j = 0), (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9])
//     if (ro === 6) {
//       col = col + 3
//       ro = 0
//     } else ro = ro + 3
//   }

//   return alert('kol hakavod yagever')
// }

function newGame(level) {
    // let a
    // let b = 10
    // let randShow

const board = [
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
];

let rows = [];
let columns = [];
let boxes = []; 

for (let i = 0; i < 9; i++) {
  rows.push([]);
  columns.push([]);
  boxes.push([]);
}
rows = [[], [], [], [], [], [], [], [], []];
columns = [[], [], [], [], [], [], [], [], []];
boxes = [[], [], [], [], [], [], [], [], []];
// ROW LOOP
for (let i = 0; i < board.length; i++) {
  // COL LOOP
  for (let j = 0; j < board.length; j++) {

  }
}
// ROW LOOP
for (let i = 0; i < board.length; i++) {
  // COL LOOP
  for (let j = 0; j < board.length; j++) {
      if(board[i][j] !== ".") {
          rows[i].push(board[i][j]);
          columns[j].push(board[i][j]);
      }
  }
} 
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board.length; j++) {

      let cell = board[i][j];

      if(cell !==".") {
          rows[i].push(cell);
          columns[j].push(cell);
      }
  }
}
for (let i = 0; i < board.length; i++) { // ROW CO-ORDINATE
  for (let j = 0; j < board.length; j++) { // COLUMN CO-ORDINATE

      let cell = board[i][j]; // STORE CELL IN VARIABLE

      if(cell !== ".") { // IF CELL NOT EMPTY
          rows[i].push(cell); // ADD VALUE TO APPROPRIATE ROWS ARRAY
          columns[j].push(cell); // ADD VALUE TO APPROPRIATE COLUMNS ARRAY

          let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3); // GET SUB-GRID (BOX) INDEX

          boxes[boxIndex].push(cell); // ADD VALUE TO BOXES ARRAY

      }
  }
} 
function checkGame(board) { 
  for (let i = 0; i < board.length; i++) { 
    for (let j = 0; j < board.length; j++) {

      let cell = board[i][j];

      if(cell !== ".") {
        if (rows[i].includes(cell)) {
          return false
        } else rows[i].push(cell);

        if (columns[j].includes(cell)) {
          return false;
        } else columns[j].push(cell);

        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell)) {
          return false;
        } else boxes[boxIndex].push(cell);

      }
    }
  } 

  return true;

}



}
