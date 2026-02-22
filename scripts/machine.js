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