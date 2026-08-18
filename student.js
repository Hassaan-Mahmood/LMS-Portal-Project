var studentName = document.querySelector("#name");
var age = document.querySelector("#age");
var education = document.querySelector("#education");
var table = document.querySelector("#table");
var modal = document.querySelector("#exampleModal");

var allData = [];

var editIndex = 0;
var editData = "";

function displayStudent() {
  table.innerHTML = "";
  var data = localStorage.getItem("studentData");
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
            <span id="edit" onclick="editStudent('${i}')">✏️</span>
            <span id="delete" onclick="deleteStudent('${i}')">❌</span>
          </td>
      </tr>
    `;
  }
  // displayStudent();

  modal.classList.remove("active");
  studentName.value = "";
  age.value = "";
  education.value = "";
}

function saveData() {
  if (editIndex === -1) {
    editData.name = studentName.value;
    editData.age = age.value;
    editData.education = education.value;
    editIndex = 0;
  } else {
    var students = {
      name: studentName.value,
      age: age.value,
      education: education.value,
      id: Date.now(),
    };
    allData.push(students);
  }

  localStorage.setItem("studentData", JSON.stringify(allData));
  displayStudent();
}

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this record?") === true) {
    allData.splice(Number(index), 1);
    localStorage.setItem("studentData", JSON.stringify(allData));
    displayStudent();
  }
}

function editStudent(index) {
  editIndex = -1;
  editData = allData[index];
  studentName.value = editData.name;
  age.value = editData.age;
  education.value = editData.education;
  modal.classList.add("active");
}

displayStudent();
