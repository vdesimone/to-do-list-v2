function addTask() {
  const task = `
    <div id="task-1" class="task">
      <div class="check-btn-container">
        <button class="check-btn"><i class="fa-solid fa-check" style="display: none;"></i></button>
      </div>
      <div class="task-description">
          <h3>Task 1</h3>
          <p>description</p>
      </div>
      <div class="task-btns-container">
        <button class="edit-btn"><i class="fa-solid fa-pencil"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-x"></i></button>
      </div>
    </div>
  `;

  const parsed = new DOMParser().parseFromString(task, "text/html");
  document.getElementById("task-container").appendChild(parsed.body.lastElementChild);
}

function checkTask() {
  const checkBtn = document.getElementById("check-btn");
  const checkIcon = document.getElementById("check-icon");

  if (checkIcon.style.display == "none") {
    checkBtn.style.background = "green";
    checkIcon.style.display = "block";
  } else if (checkIcon.style.display == "block") {
    checkBtn.style.background = "white";
    checkIcon.style.display = "none";
  }
}