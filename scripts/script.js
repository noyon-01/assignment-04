// !Interview Button Section! //
const job_status_btn1 = document.getElementById("job_status_btn1");
const job_status_btn2 = document.getElementById("job_status_btn2");
const job_status_btn3 = document.getElementById("job_status_btn3");
const job_status_btn4 = document.getElementById("job_status_btn4");
const job_status_btn5 = document.getElementById("job_status_btn5");
const job_status_btn6 = document.getElementById("job_status_btn6");
const job_status_btn7 = document.getElementById("job_status_btn7");
const job_status_btn8 = document.getElementById("job_status_btn8");

const job_card1 = document.getElementById("job_card1");
const default_interview_section = document.getElementById(
  "default_interview_section",
);

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
const rejected_job_section = document.getElementById("rejected_job_section");
const default_rejected_section = document.getElementById(
  "default_rejected_section",
);

document.getElementById("rejected_btn1").addEventListener("click", function () {
  job_status_btn1.innerHTML = `<button class="btn btn-error">Rejected</button>`;
  //   rejected_job_section.appendChild(job_card1);
  //   default_rejected_section.classList.add("hidden");
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

// !Total Jobs Count Section! //
const job_cards_section = document.getElementById("job_cards_section");
const job_cards_section_length = job_cards_section.children.length;

const total_job_count = document.getElementById("total_job_count");
total_job_count.innerText = job_cards_section_length;

const total_job_count1 = document.getElementById("total_job_count1");
total_job_count1.innerText = job_cards_section_length;

// !Interview Jobs Count Section! //

// !Machine for Button Toggle! //
function showOnly(id) {
  const interviewSection = document.getElementById("interview_job_section");
  interviewSection.classList.add("hidden");

  const jobSection = document.getElementById("job_cards_section");
  jobSection.classList.add("hidden");

  const rejectSection = document.getElementById("rejected_job_section");
  rejectSection.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
