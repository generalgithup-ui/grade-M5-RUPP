/**
 * ============================================================================
 * MANAGEMENT TEAM ASSIGNMENT - M5
 * Application Logic: Grouping, Searching, Filtering & UI Rendering
 * ============================================================================
 */

let currentSubjectCode = "ADS";

document.addEventListener("DOMContentLoaded", () => {
    updateDashboardStats();
    renderSubjectCards();
    renderSubjectPills();
    renderSubjectTeams(currentSubjectCode);
    renderMasterTable();
    setupEventListeners();
});

/**
 * 1. NAVIGATION & SECTION SWITCHING
 */
function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll(".content-section").forEach(sec => {
        sec.classList.add("d-none");
    });

    // Show target section
    const targetSection = document.getElementById(`section-${sectionName}`);
    if (targetSection) {
        targetSection.classList.remove("d-none");
    }

    // Update active state in navbar
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-nav") === sectionName) {
            link.classList.add("active");
        }
    });

    // Collapse mobile navbar menu if open
    const navbarCollapse = document.getElementById("mainNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * 2. DASHBOARD METRICS & SUBJECT CARDS
 */
function getTeamsForSubject(subjectCode) {
    const groups = {};

    students.forEach(student => {
        const teamName = student.teams[subjectCode] || "Unassigned";
        if (!groups[teamName]) {
            groups[teamName] = [];
        }
        groups[teamName].push(student);
    });

    // Sort team names naturally (Team 1, Team 2, ..., Team 10)
    const sortedTeamNames = Object.keys(groups).sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );

    return sortedTeamNames.map((teamName, index) => {
        const extractedNumber = teamName.match(/\d+/);
        return {
            teamName: teamName,
            teamNumber: extractedNumber ? extractedNumber[0] : index + 1,
            members: groups[teamName]
        };
    });
}

function updateDashboardStats() {
    document.getElementById("stat-total-students").textContent = students.length;
    document.getElementById("stat-total-subjects").textContent = SUBJECT_INFO.length;

    let totalTeamsAcrossSubjects = 0;
    SUBJECT_INFO.forEach(sub => {
        totalTeamsAcrossSubjects += getTeamsForSubject(sub.code).length;
    });
    document.getElementById("stat-total-teams").textContent = totalTeamsAcrossSubjects;
}

function renderSubjectCards() {
    const grid = document.getElementById("subject-cards-grid");
    grid.innerHTML = "";

    SUBJECT_INFO.forEach(sub => {
        const teams = getTeamsForSubject(sub.code);
        const col = document.createElement("div");
        col.className = "col-6 col-md-4";

        col.innerHTML = `
            <div class="card subject-card h-100 shadow-sm" onclick="openSubjectView('${sub.code}')">
                <div class="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div class="subject-icon-box">
                                <i class="${sub.icon}"></i>
                            </div>
                            <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 fw-semibold">
                                ${teams.length} Teams
                            </span>
                        </div>
                        <h3 class="h5 fw-bold text-dark mb-1">${sub.code}</h3>
                        <p class="text-muted small mb-3">${sub.fullName}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-3 border-top">
                        <span class="small text-muted"><i class="fa-solid fa-users me-1"></i> ${students.length} Students</span>
                        <span class="text-primary fw-semibold small">View Teams <i class="fa-solid fa-arrow-right ms-1"></i></span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

/**
 * 3. SUBJECT TEAM DISPLAY (GROUPED AUTOMATICALLY)
 */
function openSubjectView(subjectCode) {
    currentSubjectCode = subjectCode;
    renderSubjectTeams(subjectCode);
    switchSection("subjects");
}

function renderSubjectPills() {
    const pillBar = document.getElementById("subject-pill-bar");
    pillBar.innerHTML = "";

    SUBJECT_INFO.forEach(sub => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `btn subject-pill-btn ${sub.code === currentSubjectCode ? "btn-primary" : "btn-outline-primary"}`;
        btn.setAttribute("data-subject-pill", sub.code);
        btn.textContent = sub.code;
        btn.onclick = () => {
            currentSubjectCode = sub.code;
            renderSubjectTeams(sub.code);
        };
        pillBar.appendChild(btn);
    });
}

function renderSubjectTeams(subjectCode) {
    const subjectMeta = SUBJECT_INFO.find(s => s.code === subjectCode);
    const teams = getTeamsForSubject(subjectCode);

    // Update Header & Pills
    document.getElementById("active-subject-title").innerHTML = `
        <i class="${subjectMeta.icon} text-primary me-2"></i>${subjectMeta.code} — ${subjectMeta.fullName}
    `;
    document.getElementById("active-subject-subtitle").textContent =
        `Showing ${teams.length} teams across ${students.length} students in Class M5`;

    document.querySelectorAll("[data-subject-pill]").forEach(btn => {
        if (btn.getAttribute("data-subject-pill") === subjectCode) {
            btn.className = "btn subject-pill-btn btn-primary";
        } else {
            btn.className = "btn subject-pill-btn btn-outline-primary";
        }
    });

    // Render Team Cards
    const container = document.getElementById("teams-container");
    container.innerHTML = "";

    teams.forEach(team => {
        const col = document.createElement("div");
        col.className = "col-lg-6";

        const memberRows = team.members.map(member => `
            <tr>
                <td class="ps-3 fw-semibold text-primary">#${member.id}</td>
                <td class="fw-medium">${escapeHtml(member.firstName)}</td>
                <td class="fw-medium">${escapeHtml(member.lastName)}</td>
                <td class="pe-3">${formatGenderBadge(member.gender)}</td>
            </tr>
        `).join("");

        col.innerHTML = `
            <div class="team-card h-100 shadow-sm">
                <div class="team-card-header d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-2">
                        <span class="team-badge-number">#${team.teamNumber}</span>
                        <h3 class="h6 fw-bold mb-0 text-dark">${escapeHtml(team.teamName)}</h3>
                    </div>
                    <span class="badge bg-secondary-subtle text-dark rounded-pill px-3 py-2">
                        <i class="fa-solid fa-user-group me-1"></i> ${team.members.length} Members
                    </span>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0 team-table">
                        <thead class="table-light">
                            <tr>
                                <th class="ps-3">Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th class="pe-3">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${memberRows}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

/**
 * 4. STUDENT SEARCH (ID, FIRST NAME, LAST NAME, OR FULL NAME)
 */
function handleStudentSearch(query) {
    const container = document.getElementById("search-results-container");
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
        container.innerHTML = `
            <div class="text-center py-5 text-muted bg-white rounded-3 shadow-sm">
                <i class="fa-solid fa-id-card fa-2x mb-2 text-primary opacity-50"></i>
                <p class="mb-0">Start typing above to view your team across ADS, DC, DB, CA, JAVA, and ENGLISH.</p>
            </div>
        `;
        return;
    }

    const matches = students.filter(s => {
        const idStr = String(s.id);
        const first = s.firstName.toLowerCase();
        const last = s.lastName.toLowerCase();
        const full = `${first} ${last}`;
        const reverseFull = `${last} ${first}`;

        return (
            idStr === cleanQuery ||
            first.includes(cleanQuery) ||
            last.includes(cleanQuery) ||
            full.includes(cleanQuery) ||
            reverseFull.includes(cleanQuery)
        );
    });

    if (matches.length === 0) {
        container.innerHTML = `
            <div class="alert alert-warning border-0 shadow-sm text-center py-4">
                <i class="fa-solid fa-circle-exclamation fa-lg mb-2 d-block"></i>
                No student found matching "<strong>${escapeHtml(query)}</strong>". Please check your ID or spelling.
            </div>
        `;
        return;
    }

    container.innerHTML = matches.map(student => {
        const subjectCards = SUBJECT_INFO.map(sub => {
            const assignedTeam = student.teams[sub.code] || "Unassigned";
            return `
                <div class="col-6 col-md-4">
                    <div class="p-3 rounded-3 bg-light border h-100 d-flex flex-column justify-content-between">
                        <div class="small text-muted fw-bold mb-1">
                            <i class="${sub.icon} text-primary me-1"></i> ${sub.code}
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <span class="team-pill">${escapeHtml(assignedTeam)}</span>
                            <button class="btn btn-link btn-sm p-0 text-decoration-none"
                                onclick="openSubjectView('${sub.code}')" title="View full ${sub.code} team">
                                View <i class="fa-solid fa-arrow-up-right-from-square small"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        return `
            <div class="card border-0 shadow-sm student-profile-card mb-3">
                <div class="card-body p-4">
                    <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-3 mb-3 gap-2">
                        <div>
                            <span class="badge bg-primary mb-1">Student ID: #${student.id}</span>
                            <h3 class="h5 fw-bold mb-0 text-dark">
                                ${escapeHtml(student.firstName)} ${escapeHtml(student.lastName)}
                            </h3>
                        </div>
                        <div>${formatGenderBadge(student.gender)}</div>
                    </div>
                    <div class="row g-2 g-md-3">
                        ${subjectCards}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

/**
 * 5. FULL STUDENT LIST TABLE & FILTERS
 */
function renderMasterTable() {
    const tbody = document.getElementById("master-table-body");
    const searchVal = document.getElementById("table-search-input").value.trim().toLowerCase();
    const subjectVal = document.getElementById("table-subject-filter").value;
    const teamVal = document.getElementById("table-team-filter").value;

    const filteredStudents = students.filter(s => {
        const fullName = `${s.firstName} ${s.lastName}`.toLowerCase();
        const matchesText =
            !searchVal ||
            String(s.id) === searchVal ||
            s.firstName.toLowerCase().includes(searchVal) ||
            s.lastName.toLowerCase().includes(searchVal) ||
            fullName.includes(searchVal);

        const matchesSubjectAndTeam =
            subjectVal === "ALL" ||
            teamVal === "ALL" ||
            s.teams[subjectVal] === teamVal;

        return matchesText && matchesSubjectAndTeam;
    });

    document.getElementById("table-count-label").textContent =
        `Showing ${filteredStudents.length} of ${students.length} students`;

    if (filteredStudents.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="11" class="text-center py-4 text-muted">
                    No matching students found for the selected filter.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = filteredStudents.map((s, idx) => `
        <tr>
            <td class="ps-3 text-muted">${idx + 1}</td>
            <td class="fw-bold text-primary">#${s.id}</td>
            <td class="fw-medium">${escapeHtml(s.firstName)}</td>
            <td class="fw-medium">${escapeHtml(s.lastName)}</td>
            <td>${formatGenderBadge(s.gender)}</td>
            <td><span class="team-pill">${escapeHtml(s.teams.ADS)}</span></td>
            <td><span class="team-pill">${escapeHtml(s.teams.DC)}</span></td>
            <td><span class="team-pill">${escapeHtml(s.teams.DB)}</span></td>
            <td><span class="team-pill">${escapeHtml(s.teams.CA)}</span></td>
            <td><span class="team-pill">${escapeHtml(s.teams.JAVA)}</span></td>
            <td class="pe-3"><span class="team-pill">${escapeHtml(s.teams.ENGLISH)}</span></td>
        </tr>
    `).join("");
}

function updateTeamFilterDropdown() {
    const subjectVal = document.getElementById("table-subject-filter").value;
    const teamSelect = document.getElementById("table-team-filter");

    if (subjectVal === "ALL") {
        teamSelect.innerHTML = `<option value="ALL">All Teams (Select Subject First)</option>`;
        teamSelect.disabled = true;
        return;
    }

    const teams = getTeamsForSubject(subjectVal);
    teamSelect.disabled = false;
    teamSelect.innerHTML = `<option value="ALL">All ${subjectVal} Teams (${teams.length})</option>` +
        teams.map(t => `<option value="${escapeHtml(t.teamName)}">${escapeHtml(t.teamName)} (${t.members.length} members)</option>`).join("");
}

/**
 * 6. EVENT LISTENERS & HELPERS
 */
function setupEventListeners() {
    const searchInput = document.getElementById("student-search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");

    searchInput.addEventListener("input", e => handleStudentSearch(e.target.value));
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        handleStudentSearch("");
        searchInput.focus();
    });

    document.getElementById("table-search-input").addEventListener("input", renderMasterTable);

    document.getElementById("table-subject-filter").addEventListener("change", () => {
        updateTeamFilterDropdown();
        renderMasterTable();
    });

    document.getElementById("table-team-filter").addEventListener("change", renderMasterTable);
}

function formatGenderBadge(gender) {
    const isFemale = gender.trim().toLowerCase() === "female";
    return isFemale
        ? `<span class="gender-badge-f"><i class="fa-solid fa-venus me-1"></i>Female</span>`
        : `<span class="gender-badge-m"><i class="fa-solid fa-mars me-1"></i>Male</span>`;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}