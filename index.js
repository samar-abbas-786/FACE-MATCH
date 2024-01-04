let A = document.getElementById("A");
let B = document.getElementById("B");
let voteA = 0;
let voteB = 0;
document.getElementById("A_count").innerHTML = 0;
document.getElementById("B_count").innerHTML = 0;

A.addEventListener("click", function () {
  voteA++;
  document.getElementById("A_count").innerHTML = voteA;
});
B.addEventListener("click", function () {
  voteB++;
  document.getElementById("B_count").innerHTML = voteB;
});
function show() {
  let A_name = document.getElementById("A_name").value;
  let B_name = document.getElementById("B_name").value;
  if (voteA > voteB) {
    document.getElementById(
      "Declare"
    ).innerHTML = `Congratulations!  ${A_name}   wins`;
    document.getElementById("picA").style.boxShadow = "10px 10px green";
    document.getElementById("picB").style.boxShadow = "10px 10px red";
  }
  if (voteA < voteB) {
    document.getElementById(
      "Declare"
    ).innerHTML = `Congratulations! ${B_name}  wins`;
    document.getElementById("picB").style.boxShadow = "10px 10px green";
    document.getElementById("picA").style.boxShadow = "10px 10px red";
  }
  if (voteA === voteB && voteA !== 0 && voteB !== 0) {
    document.getElementById("Declare").innerHTML = "Drawn";
    document.getElementById("picB").style.boxShadow = "10px 10px yellow";
    document.getElementById("picA").style.boxShadow = "10px 10px yellow";
  }
}

let R = document.getElementById("result");
R.addEventListener("click", show);

//INPUT AS IMAGE A
document.getElementById("imageInput").addEventListener("change", handleImage);

function handleImage() {
  const input = document.getElementById("imageInput");
  const img = document.getElementById("selectedImage");

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
//////
document.getElementById("imageInputB").addEventListener("change", handleImageB);
function handleImageB() {
  const input = document.getElementById("imageInputB");
  const img = document.getElementById("selectedImageB");

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}
function start() {
  const timeInput = document.getElementById("set_Time").value;
  const d = new Date();
  const Anew = d.getSeconds();
  let Schedule = Anew - timeInput;
  setTimeout(show, `${Schedule}`);
}
// function scheduleShow() {
//   const timeInput = document.getElementById("set_Time").value;
//   const [hours, minutes] = timeInput.split(":").map(Number);

//   if (!isNaN(hours) && !isNaN(minutes)) {
//     const currentTime = new Date();
//     const scheduledTime = new Date(currentTime);
//     scheduledTime.setHours(hours);
//     scheduledTime.setMinutes(minutes);

//     const delayMillis = scheduledTime - currentTime;

//     if (delayMillis > 0) {
//       setTimeout(show, delayMillis);
//       console.log(
//         `Show function scheduled to run after ${delayMillis} milliseconds.`
//       );
//     } else {
//       console.log("Please enter a future time.");
//     }
//   } else {
//     console.log("Invalid time format. Please enter time in hh:mm format.");
//   }
// }

// Call scheduleShow when the user clicks the "END" button
////
// function handleImageInputChange(inputId, imgId) {
//   const input = document.getElementById(inputId);
//   const img = document.getElementById(imgId);

//   const file = input.files[0];

//   if (file) {
//     const reader = new FileReader();

//     reader.onload = function (e) {
//       img.src = e.target.result;
//     };

//     reader.readAsDataURL(file);
//   }
// }

// // Attach event listeners for image inputs
// document.getElementById("imageInput").addEventListener("change", function () {
//   handleImageInputChange("imageInput", "selectedImage");
// });

// document.getElementById("imageInputB").addEventListener("change", function () {
//   handleImageInputChange("imageInputB", "selectedImageB");
// });
