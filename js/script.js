//console.log("Test");
const input = document.querySelector('[type="text"]');
const job_role_select = document.querySelector("select#title");
const job_role_other = document.getElementById("other-job-role");

// PAGE LOAD SECTION - INITIALIZATION
input.focus();
job_role_other.style.display = "none";

// EVENTLISTENERS
job_role_select.addEventListener("change", function () {
  if (this.value == "other") {
    job_role_other.style.display = "block";
  } else {
    job_role_other.style.display = "none";
  }
});
