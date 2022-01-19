const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     remoeActiveClasses()
//     panel.classList.add('active')
//   })
// })

function nextPage(num) {
  remoeActiveClasses();
  panels[num].classList.add("active");
}

function remoeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
function changeLevel(num) {
  remoeActiveClasses();
  nextPage(num);
}
function exit(num) {
  remoeActiveClasses();
  document.querySelector("#userName").value = "";
  document.querySelector("#password").value = "";
  nextPage(num);
}

function start(id) {
  let name = document.querySelector("#userName");
  let pass = document.querySelector("#password");
  if (name.value !== "abcd" && pass.value !== "1234") {
    document.querySelector("#msgUName").innerHTML = "this input not corect";
    document.querySelector("#msgPass").innerHTML = "this input not corect";
  } else if (name.value !== "abcd")
    document.querySelector("#msgUName").innerHTML = "this input not corect";
  else if (pass.value !== "1234")
    document.querySelector("#msgPass").innerHTML = "this input not corect";
  else if (name.value === "abcd" && pass.value === "1234") {
    nextPage(id);
  }
}

function newGame(level, num) {
  let a;
  let b = 10;
  let randShow;

  let mat = [
    [1, 8, 5, 3, 4, 9, 6, 7, 2],
    [6, 7, 2, 1, 8, 5, 4, 3, 9],
    [3, 4, 9, 2, 7, 6, 1, 5, 8],
    [8, 2, 6, 7, 5, 4, 9, 1, 3],
    [7, 9, 4, 6, 1, 3, 2, 8, 5],
    [5, 1, 3, 8, 9, 2, 7, 6, 4],
    [2, 3, 8, 9, 6, 1, 5, 4, 7],
    [4, 6, 7, 5, 2, 8, 3, 9, 1],
    [9, 5, 1, 4, 3, 7, 8, 2, 6],
  ];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      b++;
      a = "#a" + b;
      document.querySelector(a).value = "";
    }
  }
  b = 10;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      b++;
      a = "#a" + b;
      randShow = Math.floor(Math.random() * 10);
      if (randShow > level) {
        document.querySelector(a).value = mat[i][j];
      }
    }
  }
  nextPage(num);
}
function checkGame() {
  let x;
  b = 10;
  let mat = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      b++;
      a = "#a" + b;

      x = document.querySelector(a);
      mat[i][j] = x.value;
    }
  }
  console.log(mat);
  let column = 0;
  let Row = 0;
  let index;
  let num;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      num = +mat[i][j];
      index = arr.indexOf(num);
      if (index === -1)
        return console.log("not good column mat[", i, "][", j, "]");
      else arr[index] = 0;
    }
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      num = +mat[j][i];
      index = arr.indexOf(num);
      if (index === -1)
        return console.log("not good row mat[", i, "][", j, "]");
      else arr[index] = 0;
    }
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  let col = 0,
    ro = 0;
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let z = 0; z < 9; z++) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        num = +mat[i + col][j + ro];
        index = arr.indexOf(num);
        if (index === -1)
          return console.log(
            "not good Square mat[",
            i + col,
            "][",
            j + ro,
            "]"
          );
        else arr[index] = 0;
      }
    }

    (i = 0), (j = 0), (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    if (ro === 6) {
      col = col + 3;
      ro = 0;
    } else ro = ro + 3;
  }

  return alert("kol hakavod yagever");
}
