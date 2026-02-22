// !Total Jobs Count Section! //
const job_cards_section = document.getElementById("job_cards_section");
const job_cards_section_length = job_cards_section.children.length;

const total_job_count = document.getElementById("total_job_count");
total_job_count.innerText = job_cards_section_length;

const total_job_count1 = document.getElementById("total_job_count1");
total_job_count1.innerText = job_cards_section_length;
