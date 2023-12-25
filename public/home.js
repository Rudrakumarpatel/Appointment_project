//title
let Doctor = "Dr.Manik Dalvi";
let specialist = "Obstetrics & Gynecology"
let address = "Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302";
let slots_array = [];

// ---------------------------
//image and name and specialist set
//also view_profile set
let n = document.getElementsByClassName("name")[0];

n.innerHTML = Doctor;

let profile = document.getElementById("profile_image");

profile.src = "female.jpg";

let Nam = Doctor;
let special = specialist;

let Name = document.getElementById("body_name")
Name.innerHTML = Nam;

let spaci = document.getElementById("specialist");
spaci.innerHTML = special;


//Slots

let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");

let Day = new Date().getDate();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const d = new Date();
let Month = monthNames[(d.getMonth())];
if (d.getMonth() == 2) {
  if (Day == 29) {
    Day = 1;
    Month = monthNames[(d.getMonth() + 1) % 12];
  }
  else {
    Day += 1;
  }
}
else if (d.getMonth() == 8) {
  if (Day == 31) {
    Day = 1;
    Month = monthNames[(d.getMonth() + 1) % 12];
  }
  else {
    Day += 1;
  }
}
else if (d.getMonth() % 2 === 0) {
  if (Day == 31) {
    Day = 1;
    Month = monthNames[(d.getMonth() + 1) % 12];
  }
  else {
    Day += 1;
  }
}
else if (d.getMonth() % 2 != 0) {
  if (Day == 30) {
    Day = 1;
    Month = monthNames[(d.getMonth() + 1) % 12];
  }
  else {
    Day += 1;
  }
}


var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = new Date();
var dayName = days[(day.getDay() + 1) % 7];

let s = dayName + " ," + Day + Month;

let dayName2 = days[(day.getDay() + 2) % 7];

let Month2 = monthNames[(d.getMonth()) % 12];
let Day2 = Day + 1;
let s1 = dayName2 + " ," + Day2 + Month2;

document.getElementsByClassName("date")[0].innerHTML = "Today";
document.getElementsByClassName("date")[1].innerHTML = s;
document.getElementsByClassName("date")[2].innerHTML = s1;


let a = ["8am-10am", "11am-12pm", "1:30pm-3:30pm", "4:30pm-6:30pm"];

let b;
slot2.addEventListener('click', () => {
  let slot_continer = document.getElementsByClassName("slot_continer")[0];
  slot_continer.innerHTML = "";
  for (i of a) {
    console.log(i);
    let para = document.createElement('span');
    para.style.backgroundColor = "whilte";
    para.setAttribute("class", "slots_time")
    para.style.color = "black";
    para.style.margin = "0.3rem";
    para.style.padding = "0.5rem";
    para.style.borderRadius = "1rem";
    para.style.border = "2px solid black"
    para.style.cursor = "pointer";
    para.innerHTML = i;
    slot_continer.appendChild(para);
  }
  b = document.createElement("button");
  let c = document.createElement('a');
  b.style.backgroundColor = "blue";
  b.setAttribute("id", "btn");
  b.style.color = "white";
  b.style.fontSize = "medium";
  b.style.fontWeight = "bold";
  b.style.padding = "4px";
  b.innerHTML = "Continue";
  b.style.display = "flex";
  b.style.justifyContent = "center";
  b.style.alignItems = "center";
  c.appendChild(b);
  c.setAttribute("href", "Login.html");
  c.style.textDecoration = "none";
  c.style.width = "13%";
  c.style.height = "1.8rem"
  c.style.alignSelf = "flex-end";
  slot_continer.appendChild(c);

  let arr = document.getElementsByClassName("slots_time");
  console.log(arr);

  Array.from(arr).forEach((ele) => {
    ele.addEventListener("click", (e) => {

      slots_array.push(ele.innerHTML);
      ele.style.backgroundColor = "wheat";
    })
  })

});

slot3.addEventListener('click', () => {
  let slot_continer = document.getElementsByClassName("slot_continer")[0];
  slot_continer.innerHTML = "";
  for (i of a) {
    console.log(i);
    let para = document.createElement('span');
    para.style.backgroundColor = "whilte";
    para.setAttribute("class", "slots_time")
    para.style.color = "black";
    para.style.margin = "0.3rem";
    para.style.padding = "0.5rem";
    para.style.borderRadius = "1rem";
    para.style.border = "2px solid black"
    para.style.cursor = "pointer";
    para.innerHTML = i;
    slot_continer.appendChild(para);
  }
  b = document.createElement("button");
  let c = document.createElement('a');
  b.style.backgroundColor = "blue";
  b.setAttribute("id", "btn");
  b.style.color = "white";
  b.style.fontSize = "medium";
  b.style.fontWeight = "bold";
  b.style.padding = "4px";
  b.innerHTML = "Continue";
  b.style.display = "flex";
  b.style.justifyContent = "center";
  b.style.alignItems = "center";
  c.appendChild(b);
  c.setAttribute("href", "Login.html");
  c.style.textDecoration = "none";
  c.style.width = "13%";
  c.style.height = "1.8rem"
  c.style.alignSelf = "flex-end";
  slot_continer.appendChild(c);


  let arr = document.getElementsByClassName("slots_time");
  console.log(arr);

  Array.from(arr).forEach((ele) => {
    ele.addEventListener("click", (e) => {
      slots_array.push(ele.innerHTML);
      console.log(ele.innerHTML);
      ele.style.backgroundColor = "wheat";
    })
  })

})

