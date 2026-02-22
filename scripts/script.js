// !Interview Button Section! //
const job_status_btn1 = document.getElementById("job_status_btn1");
const job_status_btn2 = document.getElementById("job_status_btn2");
const job_status_btn3 = document.getElementById("job_status_btn3");
const job_status_btn4 = document.getElementById("job_status_btn4");
const job_status_btn5 = document.getElementById("job_status_btn5");
const job_status_btn6 = document.getElementById("job_status_btn6");
const job_status_btn7 = document.getElementById("job_status_btn7");
const job_status_btn8 = document.getElementById("job_status_btn8");

document
  .getElementById("interview_btn1")
  .addEventListener("click", function () {
    job_status_btn1.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

document
  .getElementById("interview_btn2")
  .addEventListener("click", function () {
    job_status_btn2.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

document
  .getElementById("interview_btn3")
  .addEventListener("click", function () {
    job_status_btn3.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

document
  .getElementById("interview_btn4")
  .addEventListener("click", function () {
    job_status_btn4.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

document
  .getElementById("interview_btn5")
  .addEventListener("click", function () {
    job_status_btn5.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

document
  .getElementById("interview_btn6")
  .addEventListener("click", function () {
    job_status_btn6.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

document
  .getElementById("interview_btn7")
  .addEventListener("click", function () {
    job_status_btn7.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

document
  .getElementById("interview_btn8")
  .addEventListener("click", function () {
    job_status_btn8.innerHTML = `<button class="btn btn-success">Interview</button>`;
  });

// !Rejected Button Section! //

document.getElementById("rejected_btn1").addEventListener("click", function () {
  job_status_btn1.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});

document.getElementById("rejected_btn2").addEventListener("click", function () {
  job_status_btn2.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});

document.getElementById("rejected_btn3").addEventListener("click", function () {
  job_status_btn3.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});

document.getElementById("rejected_btn4").addEventListener("click", function () {
  job_status_btn4.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});

document.getElementById("rejected_btn5").addEventListener("click", function () {
  job_status_btn5.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});

document.getElementById("rejected_btn6").addEventListener("click", function () {
  job_status_btn6.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});

document.getElementById("rejected_btn7").addEventListener("click", function () {
  job_status_btn7.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});

document.getElementById("rejected_btn8").addEventListener("click", function () {
  job_status_btn8.innerHTML = `<button class="btn btn-error">Rejected</button>`;
});
