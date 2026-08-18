var teacherName = document.querySelector("#name");
var age = document.querySelector("#age");
var education = document.querySelector("#education");
var table = document.querySelector("#table");
var modal = document.querySelector("#exampleModal");

var allData = [];

var editIndex = 0;
var editData = "";

function displayTeacher() {
  
  table.innerHTML = "";
  var data = localStorage.getItem("teacherData");
  if (data) {
    allData = JSON.parse(data);
  }
  for (let i = 0; i < allData.length; i++) {
    var item = allData[i];
    table.innerHTML += `
      <tr>
          <th scope="row">${i + 1}</th>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.education}</td>
          <td>
            <span id="edit" onclick="editTeacher('${i}')">✏️</span>
            <span id="delete" onclick="deleteTeacher('${i}')">❌</span>
          </td>
      </tr>
    `;
  }
  // displayTeacher();

  modal.classList.remove("active");
  teacherName.value = "";
  age.value = "";
  education.value = "";
}

function saveData() {
  if (editIndex === -1) {
    editData.name = teacherName.value;
    editData.age = age.value;
    editData.education = education.value;
    editIndex = 0;
  } else {
    var teachers = {
      name: teacherName.value,
      age: age.value,
      education: education.value,
      // id: Date.now(),
    };
    allData.push(teachers);
  }

  localStorage.setItem("teacherData", JSON.stringify(allData));
  displayTeacher();
}

function deleteTeacher(index) {
  if (confirm("Are you sure you want to delete this record?") === true) {
    allData.splice(Number(index), 1);
    localStorage.setItem("teacherData", JSON.stringify(allData));
    displayTeacher();
  }
}

function editTeacher(index) {
  editIndex = -1;
  editData = allData[index];
  teacherName.value = editData.name;
  age.value = editData.age;
  education.value = editData.education;
  modal.classList.add("active");
}

displayTeacher();
