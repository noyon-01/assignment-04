let interview_job_count_list = [];
let rejected_job_count_list = [];
let current_job_count_list = "all";

let all_job_count = document.getElementById("all_job_count");
let interview_job_count = document.getElementById("interview_job_count");
let rejected_job_count = document.getElementById("rejected_job_count");
let available_job_count = document.getElementById("available_job_count");

let job_cards_section = document.getElementById("job_cards_section");
let job_card = document.getElementById("job_card");

let job_interview_btn = document.getElementById("job_interview_btn");
let job_rejected_btn = document.getElementById("job_rejected_btn");

let all_toggle_btn = document.getElementById("all_toggle_btn");
let interview_toggle_btn = document.getElementById("interview_toggle_btn");
let rejected_toggle_btn = document.getElementById("rejected_toggle_btn");

function calculateCount() {
  all_job_count.innerText = job_cards_section.children.length;
  available_job_count.innerText = job_cards_section.children.length;
  interview_job_count.innerText = interview_job_count_list.length;
  rejected_job_count.innerText = rejected_job_count_list.length;
}
calculateCount();

function toggleStyle(id) {
  all_toggle_btn.classList.add("btn-primary", "btn-soft");
  interview_toggle_btn.classList.add("btn-primary", "btn-soft");
  rejected_toggle_btn.classList.add("btn-primary", "btn-soft");

  all_toggle_btn.classList.remove("btn-primary");
  interview_toggle_btn.classList.remove("btn-primary");
  rejected_toggle_btn.classList.remove("btn-primary");

  const selected_toggle_btn = document.getElementById(id);
  selected_toggle_btn.classList.remove("btn-primary", "btn-soft");
  selected_toggle_btn.classList.add("btn-primary");
}

job_cards_section.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const job_title = parentNode.querySelector(".job_title").innerText;
    const job_position = parentNode.querySelector(".job_position").innerText;
    const job_information =
      parentNode.querySelector(".job_information").innerText;
    const job_description =
      parentNode.querySelector(".job_description").innerText;

    const status_btn = parentNode.querySelector(".status_btn").innerText;
    parentNode.querySelector(".status_btn").innerText = "INTERVIEW";
    parentNode.querySelector(".status_btn").classList.remove("btn-soft");
    parentNode.querySelector(".status_btn").classList.remove("btn-error");
    parentNode.querySelector(".status_btn").classList.add("btn-success");

    const jobs = {
      job_title,
      job_position,
      job_information,
      status_btn,
      job_description,
    };

    const job_exist = interview_job_count_list.find(
      (item) => item.job_title === jobs.job_title,
    );
    if (!job_exist) {
      interview_job_count_list.push(jobs);
    }

    calculateCount();
  } else if (event.target.classList.contains("rejected_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const job_title = parentNode.querySelector(".job_title").innerText;
    const job_position = parentNode.querySelector(".job_position").innerText;
    const job_information =
      parentNode.querySelector(".job_information").innerText;
    const status_btn = parentNode.querySelector(".status_btn").innerText;
    const job_description =
      parentNode.querySelector(".job_description").innerText;
    parentNode.querySelector(".status_btn").innerText = "REJECTED";
    parentNode.querySelector(".status_btn").classList.remove("btn-success");
    parentNode.querySelector(".status_btn").classList.remove("btn-soft");
    parentNode.querySelector(".status_btn").classList.add("btn-error");

    const jobs = {
      job_title,
      job_position,
      job_information,
      status_btn,
      job_description,
    };

    const job_exist = rejected_job_count_list.find(
      (item) => item.job_title === jobs.job_title,
    );
    if (!job_exist) {
      rejected_job_count_list.push(jobs);
    }

    calculateCount();
  }
});
