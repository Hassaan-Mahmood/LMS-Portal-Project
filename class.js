var className = document.querySelector("#name");
var teacher = document.querySelector("#teacher");
var table = document.querySelector("#table");
var modal = document.querySelector("#exampleModal");

var allData = [];

var editIndex = 0;
var editData = "";

function displayClass() {
  table.innerHTML = "";
  var data = localStorage.getItem("classData");
  if (data) {
    allData = JSON.parse(data);
  }
  for (let i = 0; i < allData.length; i++) {
    var item = allData[i];
    table.innerHTML += `
      <tr>
          <th scope="row">${i + 1}</th>
          <td>${item.name}</td>
          <td>${item.teacher}</td>
          <td>
            <span id="edit" onclick="editClass('${i}')">✏️</span>
            <span id="delete" onclick="deleteClass('${i}')">❌</span>
          </td>
      </tr>
    `;
  }

  modal.classList.remove("active");
  className.value = "";
  teacher.value = "";
}

function saveData() {
  if (editIndex === -1) {
    editData.name = className.value;
    editData.teacher = teacher.value;
    editI = 0;
  } else {
    var classObj = {
      name: className.value,
      teacher: teacher.value,
      id: Date.now(),
    };
    allData.push(classObj);
  }

  localStorage.setItem("classData", JSON.stringify(allData));
  displayClass();
}

function deleteClass(index) {
  if (confirm("Are you sure you want to delete this record?") === true) {
    allData.splice(Number(index), 1);
    localStorage.setItem("classData", JSON.stringify(allData));
    displayClass();
  }
}

function editClass(index) {
  editIndex = -1;
  editData = allData[index];
  className.value = editData.name;
  teacher.value = editData.teacher;
  modal.classList.add("active");
}

displayClass();
