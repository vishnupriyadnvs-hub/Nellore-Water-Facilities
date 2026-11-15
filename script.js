
const app = document.getElementById("app");
const page = document.body.dataset.page;

// Demo areas for testing only.
// Replace with verified Nellore town area data later.
const areas = [
  "AC Nagar",
  "Stonehousepet",
  "Magunta Layout",
  "Balaji Nagar",
  "Vedayapalem",
  "Dargamitta",
  "Nawabpet",
  "Ramalingapuram"
];

const links = [
  ["Home", "index.html"],
  ["Water Availability", "availability.html"],
  ["Water Quality", "quality.html"],
  ["Water Facilities", "facilities.html"],
  ["Complaint", "complaint.html"],
  ["About", "about.html"]
];

function header() {
  return `
    <header>
      <h1>💧 Nellore Water Facilities</h1>
      <p>Water Facilities and Drinking Water Availability</p>
      <p>Nellore Town, Andhra Pradesh</p>
    </header>

    <nav>
      ${links.map(([name, url]) =>
        `<a href="${url}">${name}</a>`
      ).join("")}
    </nav>
  `;
}

function footer() {
  return `
    <footer>
      <p>© 2026 Nellore Water Facilities Project</p>
      <p>B.Tech Community Service Project</p>
    </footer>
  `;
}

function homePage() {
  return `
    <div class="container">
      <section class="hero">
        <h2>Welcome to Nellore Water Information</h2>
        <p>
          Find information about drinking water,
          water availability and water facilities.
        </p>

        <div class="search-box">
          <input
            type="text"
            id="areaSearch"
            placeholder="Search your town area..."
          >
          <button onclick="searchArea()">Search</button>
        </div>

        <div id="searchResults"></div>
      </section>

      <h2 style="margin-top:35px;text-align:center">
        Main Highlights
      </h2>

      <div class="cards">
        <div class="card">
          <h1>💧</h1>
          <h2>Water Availability</h2>
          <p>Explore water availability information.</p>
          <a href="availability.html">Click Here →</a>
        </div>

        <div class="card">
          <h1>🔬</h1>
          <h2>Water Quality</h2>
          <p>Explore water quality information.</p>
          <a href="quality.html">Click Here →</a>
        </div>

        <div class="card">
          <h1>🚰</h1>
          <h2>Water Facilities</h2>
          <p>Learn about drinking water facilities.</p>
          <a href="facilities.html">Click Here →</a>
        </div>

        <div class="card">
          <h1>📝</h1>
          <h2>Register Complaint</h2>
          <p>Submit a water-related complaint.</p>
          <a href="complaint.html">Click Here →</a>
        </div>
      </div>
    </div>
  `;
}

function searchArea() {
  const input = document.getElementById("areaSearch")
    .value.trim().toLowerCase();

  const results = document.getElementById("searchResults");

  if (!input) {
    results.innerHTML = "<p>Please enter an area name.</p>";
    return;
  }

  const matches = areas.filter(area =>
    area.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    results.innerHTML =
      "<p>No matching area found. Please try another name.</p>";
    return;
  }

  results.innerHTML = matches.map(area => `
    <div class="result">
      <strong>${area}</strong>
      <a href="availability.html?area=${encodeURIComponent(area)}">
        View Details →
      </a>
    </div>
  `).join("");
}

function availabilityPage() {
  const params = new URLSearchParams(window.location.search);
  const area = params.get("area");

  return `
    <div class="container">
      <h2>💧 Water Availability</h2>

      <div class="card">
        <h3>${area ? "Selected Area: " + escapeHTML(area) : "Nellore Town"}</h3>
        <p>
          Water availability information will be displayed here
          after adding verified local data.
        </p>
        <p><strong>Status:</strong> Demo information not yet available.</p>
      </div>

      <p style="margin-top:20px">
        Please check with the local water supply authority
        for current supply timings.
      </p>
    </div>
  `;
}

function qualityPage() {
  return `
    <div class="container">
      <h2>🔬 Drinking Water Quality</h2>

      <div class="card">
        <p>Water quality information for Nellore Town.</p>
        <p>Test results will be added after obtaining
        verified water testing reports.</p>
        <p><strong>Important:</strong> No water safety
        certification is provided by this demo website.</p>
      </div>
    </div>
  `;
}

function facilitiesPage() {
  return `
    <div class="container">
      <h2>🚰 Water Facilities</h2>

      <div class="cards">
        <div class="card">
          <h2>Public Water Supply</h2>
          <p>Information about public water supply services.</p>
        </div>

        <div class="card">
          <h2>Drinking Water Points</h2>
          <p>Information about drinking water points.</p>
        </div>

        <div class="card">
          <h2>Water Storage</h2>
          <p>Information about water storage facilities.</p>
        </div>

        <div class="card">
          <h2>Water Distribution</h2>
          <p>Information about distribution services.</p>
        </div>
      </div>
    </div>
  `;
}

function complaintPage() {
  return `
    <div class="container">
      <h2>📝 Register Your Complaint</h2>

      <div class="card">
        <form id="complaintForm">
          <label>Your Name</label>
          <input type="text" id="name" required>

          <label>Area Name</label>
          <input type="text" id="area" required>

          <label>Complaint Type</label>
          <select id="type" required>
            <option value="">Select Complaint</option>
            <option>No Water Supply</option>
            <option>Water Leakage</option>
            <option>Water Quality Issue</option>
            <option>Other</option>
          </select>

          <label>Complaint Details</label>
          <textarea id="details" rows="4" required></textarea>

          <button type="submit">Submit Complaint</button>
        </form>

        <p id="complaintMessage"></p>
      </div>
    </div>
  `;
}

function aboutPage() {
  return `
    <div class="container">
      <div class="card">
        <h2>About Our Project</h2>
        <p>
          Project Name: Water Facilities and Drinking
          Water Availability.
        </p>
        <p>Location: Nellore Town, Andhra Pradesh.</p>
        <p>Project Type: B.Tech Community Service Project.</p>
        <p>Technologies: HTML, CSS and JavaScript.</p>
        <p>Objective: To provide accessible information
        about drinking water facilities and services.</p>
      </div>
    </div>
  `;
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

let content = "";

switch (page) {
  case "home":
    content = homePage();
    break;
  case "availability":
    content = availabilityPage();
    break;
  case "quality":
    content = qualityPage();
    break;
  case "facilities":
    content = facilitiesPage();
    break;
  case "complaint":
    content = complaintPage();
    break;
  case "about":
    content = aboutPage();
    break;
  default:
    content = "<div class='container'><h2>Page not found</h2></div>";
}

app.innerHTML = header() + content + footer();

const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {
  complaintForm.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("complaintMessage").textContent =
      "Demo only: Your form works, but the complaint has not been saved. Firebase connection is needed.";

    complaintForm.reset();
  });
}
