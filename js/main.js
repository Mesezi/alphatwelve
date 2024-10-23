// Select necessary elements
const layout = document.getElementById("layout");
const sidebar = document.getElementById("sidebar");
const collapseBtn = document.getElementById("collapse-btn");
const darkModeBtn = document.getElementById("dark-mode-btn");
const menuItems = document.querySelectorAll(".menu-item");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
let menuCollapsed = false;
let darkMode = sessionStorage.getItem("alphaTwelve-theme") === "dark";
;

const tableData = [
    { eventName: "Annual Tech Conference", date: "2024-01-15", speaker: "John Doe", status: "completed" },
    { eventName: "Marketing Strategies Workshop", date: "2024-02-20", speaker: "Jane Smith", status: "pending" },
    { eventName: "Leadership Summit", date: "2024-03-05", speaker: "Michael Brown", status: "completed" },
    { eventName: "AI Innovations Forum", date: "2024-04-10", speaker: "Anna White", status: "cancelled" },
    { eventName: "Health and Wellness Expo", date: "2024-05-22", speaker: "John Black", status: "pending" },
    { eventName: "Sustainability in Business", date: "2024-06-12", speaker: "Chris Green", status: "completed" },
    { eventName: "Creative Arts Festival", date: "2024-07-01", speaker: "David Lee", status: "cancelled" },
    { eventName: "Annual Sports Day", date: "2024-08-18", speaker: "Mark Taylor", status: "pending" },
    { eventName: "Digital Marketing Summit", date: "2024-09-04", speaker: "Alex Turner", status: "completed" },
    { eventName: "Cybersecurity Workshop", date: "2024-10-09", speaker: "Lucy Adams", status: "pending" },
    { eventName: "Product Launch Event", date: "2024-11-15", speaker: "Tom Harris", status: "completed" },
    { eventName: "Annual Charity Gala", date: "2024-12-01", speaker: "Emma Wilson", status: "cancelled" },
    { eventName: "Tech Innovations Expo", date: "2024-01-20", speaker: "Sophia King", status: "pending" },
    { eventName: "Financial Planning Seminar", date: "2024-02-17", speaker: "James Lee", status: "completed" },
    { eventName: "Entrepreneurship Conference", date: "2024-03-25", speaker: "Olivia Brown", status: "pending" },
    { eventName: "Photography Workshop", date: "2024-04-30", speaker: "Michael Scott", status: "completed" },
    { eventName: "Cooking Masterclass", date: "2024-05-10", speaker: "Rachel Green", status: "cancelled" },
    { eventName: "Travel and Tourism Expo", date: "2024-06-15", speaker: "Daniel Robinson", status: "pending" },
    { eventName: "Health Tech Symposium", date: "2024-07-20", speaker: "Grace Lee", status: "completed" },
    { eventName: "Fashion and Design Workshop", date: "2024-08-25", speaker: "Chris Hemsworth", status: "cancelled" },
    { eventName: "Startup Pitch Night", date: "2024-09-30", speaker: "Emily Davis", status: "pending" },
    { eventName: "Environmental Awareness Program", date: "2024-10-22", speaker: "Liam White", status: "completed" },
    { eventName: "Music Festival", date: "2024-11-10", speaker: "Ava Johnson", status: "pending" },
    { eventName: "Annual Science Fair", date: "2024-12-05", speaker: "Noah Smith", status: "completed" },
    { eventName: "Web Development Bootcamp", date: "2024-01-14", speaker: "Sophia Williams", status: "cancelled" },
    { eventName: "Data Science Symposium", date: "2024-02-28", speaker: "Jackson Brown", status: "pending" },
    { eventName: "Community Outreach Program", date: "2024-03-15", speaker: "Mia Johnson", status: "completed" },
    { eventName: "Game Development Workshop", date: "2024-04-12", speaker: "Lucas Taylor", status: "cancelled" },
    { eventName: "Annual Literature Festival", date: "2024-05-09", speaker: "Isabella Miller", status: "pending" },
    { eventName: "Cultural Heritage Day", date: "2024-06-30", speaker: "Ethan Harris", status: "completed" },
    { eventName: "Annual Coding Challenge", date: "2024-07-19", speaker: "Ava Garcia", status: "pending" }
]



const ctx = document.getElementById("myChart").getContext("2d");

// Create a new chart instance
const myChart = new Chart(ctx, {
  type: "bar", // Specify the chart type
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // X-axis labels
    datasets: [
      {
        label: "My First Dataset",
        data: [620, 900, 780, 420, 1000, 570, 820, 380, 810, 630, 970, 600], // Data points
        fill: true,
        borderColor: "white", // Line color
        backgroundColor: "#8576FF",
      },
    ],
  },
  options: {
    responsive: true, // Make the chart responsive
    scales: {
      y: {
        beginAtZero: true, // Start the Y-axis at zero
        border: {
          dash: [5, 5],
          display: true,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light mode grid color
          drawOnChartArea: true, // Ensure grid lines are drawn
          color: darkMode ? "rgba(0, 0, 0, 0.1)" : "",
        },
        ticks: {
          callback: function (value, index) {
            // Display the value for even index labels, hide it for odd index labels
            return index % 2 === 0 ? value : ""; // Show label on even indices
          },
        },
      },
      x: {
        beginAtZero: true, // Start the Y-axis at zero
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light mode grid color
        },
        border: {
          dash: [5, 5],
          display: true,
        },
      },
    },
  },
});
menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  layout.classList.toggle("menu-open", menuOpen);
});

const closeMenu = () => {
  menuOpen = false;
  layout.classList.toggle("menu-open");
};

// Toggle the sidebar collapse
collapseBtn.addEventListener("click", () => {
  menuCollapsed = !menuCollapsed;
  layout.classList.toggle("menu-collapsed", menuCollapsed);
  collapseBtn.innerHTML = menuCollapsed
    ? `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.45831 1.29167L4.37498 4.00001L1.45831 6.70834M5.62498 1.29167L8.54165 4.00001L5.62498 6.70834"
  stroke='currentColor' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    : `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.37498 1.29166L1.45831 4L4.37498 6.70833M8.54165 1.29166L5.62498 4L8.54165 6.70833" stroke='currentColor' 
 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <div>Collapse </div>`;
});


// Toggle dark mode
// Get the checkbox element (toggle button)
const darkModeToggle = document.getElementById("darkModeToggle");

// If dark mode is enabled, set the toggle to checked and apply dark mode styles
if (darkMode) {
    document.body.classList.add("dark");
    darkModeToggle.checked = true; // Reflect the state in the toggle
    updateChartColors(true); // Update chart colors for dark mode
}

// Add event listener to the toggle button
darkModeToggle.addEventListener("change", () => {
    darkMode = !darkMode;
    
    if (darkMode) {
        document.body.classList.add("dark");
        sessionStorage.setItem("alphaTwelve-theme", "dark");
    } else {
        document.body.classList.remove("dark");
        sessionStorage.setItem("alphaTwelve-theme", "light");
    }

    // Update chart options based on dark mode state
    updateChartColors(darkMode);
});

// Function to update chart colors
function updateChartColors(darkMode) {
    myChart.options.scales.x.ticks.color = darkMode ? "#F2F2F7" : "#000"; // X-axis label color
    myChart.options.scales.x.grid.color = darkMode
        ? "#F2F2F7"
        : "rgba(0, 0, 0, 0.1)";

    myChart.options.scales.y.ticks.color = darkMode ? "#F2F2F7" : "#000"; // Y-axis label color
    myChart.options.scales.y.grid.color = darkMode
        ? "#F2F2F7"
        : "rgba(0, 0, 0, 0.1)";

    myChart.options.plugins.legend.labels.color = darkMode ? "#F2F2F7" : "#000"; // Legend label color

    // Update the chart
    myChart.update();
}





const cardsData = [
  {
    title: "Total Events",
    value: "100,000",
    trendDirection: "positive",
    trendPercentage: "+5.0%",
  },
  {
    title: "Active Speakers",
    value: "25",
    trendDirection: "negative",
    trendPercentage: "-5.0%",
  },
  {
    title: "Total Registrations",
    value: "300",
    trendDirection: "positive",
    trendPercentage: "+5.0%",
  },
  {
    title: "Total Revenue",
    value: "$500,000",
    trendDirection: "positive",
    trendPercentage: "+5.0%",
  },
];

// Select the container for the cards
const dashboardCards = document.getElementById("dashboard-cards");

// Create cards dynamically
cardsData.forEach((item, idx) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
        <h4>${item.title} <span class="info-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.66666V9.99999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33329 5.99999C8.33329 6.18409 8.18405 6.33332 7.99996 6.33332C7.81586 6.33332 7.66663 6.18409 7.66663 5.99999C7.66663 5.81589 7.81586 5.66666 7.99996 5.66666C8.18405 5.66666 8.33329 5.81589 8.33329 5.99999Z" stroke="currentColor"/>
<path d="M12.8333 7.99999C12.8333 10.6694 10.6693 12.8333 7.99996 12.8333C5.33058 12.8333 3.16663 10.6694 3.16663 7.99999C3.16663 5.33061 5.33058 3.16666 7.99996 3.16666C10.6693 3.16666 12.8333 5.33061 12.8333 7.99999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span></h4>
        <div>
            <p>${item.value}</p>
            <span id="${item.trendDirection}">
                ${
                  item.trendDirection === "positive"
                    ? `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 7.16667V1.5H2.83333M8.33333 1.66667L1.5 8.5" stroke="currentColor"
 stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                    : `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 2.83333V8.5H2.83333M8.33333 8.33333L1.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
                }
                ${item.trendPercentage}
            </span>
        </div>
    `;
  dashboardCards.appendChild(card);
});



let currentFilters = {
  search: "",
  date: "",
  status: "",
  name: "",
  sort: ""
};

document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent closing the dropdown immediately after opening

    const dropdownContent = this.nextElementSibling;

    // Toggle visibility of the dropdown content
    dropdownContent.classList.toggle("show");

    // Toggle active class for caret rotation
    this.classList.toggle("active");

    // Close other dropdowns
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      if (content !== dropdownContent) {
        content.classList.remove("show");
      }
    });

    document.querySelectorAll(".dropdown-btn").forEach((otherBtn) => {
      if (otherBtn !== this) {
        otherBtn.classList.remove("active");
      }
    });
  });

  // Handle selection of dropdown items
  btn.nextElementSibling.querySelectorAll("div").forEach((option) => {
    option.addEventListener("click", function () {
      const selectedValue = this.getAttribute("data-value");
      const label = btn.querySelector("span");
      const filterType = btn.getAttribute("data-filter"); // Use a custom data-filter attribute for filter type

      // Update the button label with the selected value
      label.textContent = selectedValue;

      // Update the global filter state
      updateFilter(filterType, selectedValue);

      // Hide dropdown after selection
      btn.nextElementSibling.classList.remove("show");
      btn.classList.remove("active");
    });
  });
});

// Function to update filters and apply them
function updateFilter(filterType, value) {
  currentFilters[filterType] = value;
  applyFilters(); // Call the apply filters function
}

// Close the dropdown if clicked outside
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
    document.querySelectorAll(".dropdown-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
  }
});

function openModal(userName) {
  // Display the modal
  console.log("omo");
  const modal = document.getElementById("userModal");
  modal.classList.add("show");

  // Set the user name or other details in the modal
  const modalUserName = document.getElementById("modalUserName");
  modalUserName.textContent = `Details for ${userName}`;
}

function closeModal() {
  // Hide the modal
  const modal = document.getElementById("userModal");
  modal.classList.remove("show");
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("userModal");
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};

let currentPage = 1;
let entriesPerPage = 10;
let filteredData = [];
let searchTimeout;


function renderTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const pageData = filteredData.slice(start, end);
  pageData.forEach((row) => {
    tableBody.innerHTML += `
              <div class="table">
              <div>
               <button id="event-name" onclick="openModal('${row.eventName}')">
            ${row.eventName}
                  </button>    
                  </div>
                
                  <div>${row.date}</div>
                   <div>${row.speaker}</div>
                  <div class="status-con"> <p class='status ${row.status}'>
                  <span> </span> 
                  ${
                    row.status === "completed"
                      ? "Completed"
                      : row.status === "pending"
                      ? "In progress"
                      : "Cancelled"
                  }</p>
                    </div>
              </div>
          `;
  });
  renderMobileTable();
  renderPagination();
}

function renderMobileTable() {
  const mobileTableBody = document.getElementById("mobileTableBody");
  mobileTableBody.innerHTML = "";
  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach((row) => {
    mobileTableBody.innerHTML += `
            <div class="mobile-table-body">
                <div class="mobile-row" onclick="toggleDetails(this)">
                <article>
  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 0.75L4.25 4L0.75 7.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                   <button id="event-name" onclick="openModal('${
                     row.eventName
                   }')">${row.eventName} </button>
                    
                </article>
              
          <div class='status-con'>
              <p class='status ${row.status}'>${
      row.status === "completed"
        ? "Completed"
        : row.status === "pending"
        ? "In progress"
        : "Cancelled"
    }</p>
          </div>
                  
                    
                </div>
                <div class="mobile-details" > <!-- Hidden by default -->
                    <p>${row.speaker}</p>
                    <p>${row.date}</p>
                </div>
            </div>
        `;
  });
}

// Function to toggle details display using classList
function toggleDetails(element) {
  const details = element; // Get the next sibling (the details div)

  // Toggle visibility of details using classList
  details.classList.toggle("active"); // Toggle 'hidden' class
}

function renderPagination() {
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const paginationNumbers = document.getElementById("paginationNumbers");
  paginationNumbers.innerHTML = "";

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.innerHTML += `<button class="${
      i === currentPage ? "active" : ""
    }" onclick="goToPage(${i})">${i}</button>`;
  }
}

function goToPage(page) {
  currentPage = page;
  renderTable();
}

function nextPage() {
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

// Delayed search with 1 second delay
// Delayed search with 1-second delay
function delayedSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    updateFilter("search", document.getElementById("search").value);
  }, 1000);
}

function applyFilters() {
  const searchValue = currentFilters.search.toLowerCase();
  const dateValue = currentFilters.date;
  const statusValue = currentFilters.status.toLowerCase();
  const nameValue = currentFilters.name.toLowerCase();
  const sort = currentFilters.name.toLowerCase();

  console.log(searchValue);

  filteredData = tableData.filter((event) => {
    const matchesSearch =
      event.eventName.toLowerCase().includes(searchValue) ||
      event.speaker.toLowerCase().includes(searchValue); // Check both event and speaker names
    const matchesDate = dateValue ? event.date === dateValue : true;
    const matchesStatus = statusValue ? event.status === statusValue : true;
    const matchesName = nameValue
      ? event.eventName.toLowerCase().includes(nameValue)
      : true;

    // Return true only if all conditions are met
    return matchesSearch && matchesDate && matchesStatus && matchesName;
  });

  renderTable();
  goToPage(1);
  document.getElementById("resultCount").textContent = filteredData.length;
}

function changeEntriesPerPage() {
  entriesPerPage = parseInt(document.getElementById("entriesSelect").value);
  currentPage = 1; // Reset to the first page
  renderTable();
}

window.onload = () => {
  filteredData = [...tableData]; // Initialize filtered data with all data
  renderTable();
};
