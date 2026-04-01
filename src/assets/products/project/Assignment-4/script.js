const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all"
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all"
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Designer",
    location: "Austin, TX",
    type: " Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "all"
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "all"
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "all"
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "all"
  }
];

let activeTab = "all";

const container = document.getElementById("jobContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderJobs() {
  container.innerHTML = "";

  const filtered =
    activeTab === "all"
      ? jobs
      : jobs.filter(job => job.status === activeTab);

  totalCount.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;

  tabCount.innerText = `${filtered.length} Jobs`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-lg p-16 text-center max-w-xl mx-auto">
        <img src="./images/jobs.png"
             class="mx-auto w-16 h-16 mb-4 opacity-80"
             alt="No Jobs">
        <h3 class="text-base font-semibold text-gray-700">
          No jobs available
        </h3>
        <p class="text-sm text-gray-500 mt-1">
        Check back soon for new job opportunities
        </p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white border border-gray-200 rounded-lg p-6 space-y-4";

    card.innerHTML = `
      <div class="flex justify-between items-start">

        <div>
          <h3 class="text-base font-semibold text-gray-800">
            ${job.companyName}
          </h3>
          <p class="text-sm text-gray-500">
            ${job.position}
          </p>
        </div>

        <button onclick="deleteJob(${job.id})"
          class="text-gray-400 hover:text-red-500 transition">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>

      <p class="text-sm text-gray-500">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <div class="mt-3">
        <span class="text-xs font-medium px-3 py-1 rounded
          ${
            job.status === "all"
              ? "bg-gray-100 text-gray-500"
              : job.status === "interview"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }">
          ${
            job.status === "all"
            ? "NOT APPLIED"
              : job.status.toUpperCase()
          }
        </span>
      </div>

      <p class="text-sm text-gray-600 leading-relaxed">
        ${job.description}
      </p>

      <div class="flex gap-3 pt-2">
        <button onclick="updateStatus(${job.id}, 'interview')"
          class="text-xs font-medium px-4 py-2 rounded border transition
          ${
            job.status === "interview"
              ? "bg-green-600 text-white border-green-600"
              : "border-green-500 text-green-600 hover:bg-green-50"
          }">
          INTERVIEW
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')"
          class="text-xs font-medium px-4 py-2 rounded border transition
          ${
            job.status === "rejected"
              ? "bg-red-600 text-white border-red-600"
              : "border-red-500 text-red-600 hover:bg-red-50"
          }">
          REJECTED
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

function updateStatus(id, status) {
  const job = jobs.find(j => j.id === id);

  if (job.status === status) {
    job.status = "all";
  } else {
    job.status = status;
  }

  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(job => job.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;

    tabButtons.forEach(b => {
      b.classList.remove("border-blue-600", "text-blue-600");
      b.classList.add("border-transparent", "text-gray-500");
    });

    btn.classList.add("border-blue-600", "text-blue-600");
    btn.classList.remove("text-gray-500");

    renderJobs();
  });
});

renderJobs();