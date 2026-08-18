var modal = document.querySelector("#exampleModal");
var openModal = document.querySelector("#openModal");
var closeModal = document.querySelector("#closeModal");
var cancelModal = document.querySelector("#cancelModal");

var teacherName = document.querySelector("#name");
var studentName = document.querySelector("#name");
var className = document.querySelector("#name");

openModal.onclick = function () {
  modal.classList.add("active");
  teacherName.focus();
  studentName.focus();
  className.focus();
};

closeModal.onclick = function () {
  modal.classList.remove("active");
};

cancelModal.onclick = function () {
  modal.classList.remove("active");
};

modal.onclick = function (index) {
  if (index.target === modal) {
    modal.classList.remove("active");
  }
};
