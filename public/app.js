async function loadProfile() {
  const nameEl = document.getElementById("profileName");
  const taglineEl = document.getElementById("profileTagline");
  const metaEl = document.getElementById("profileMeta");

  try {
    const response = await fetch("/api/profile");
    if (!response.ok) {
      throw new Error("Profile request failed");
    }

    const profile = await response.json();
    nameEl.textContent = `${profile.name} - ${profile.role}`;
    taglineEl.textContent = profile.tagline;
    metaEl.textContent = `${profile.location} | ${profile.availability}`;
  } catch (error) {
    nameEl.textContent = "Portfolio";
    taglineEl.textContent = "Unable to load profile details right now.";
    metaEl.textContent = "Please try refreshing.";
  }
}

function renderProjects(projects) {
  const container = document.getElementById("projectGrid");
  container.innerHTML = "";

  if (!Array.isArray(projects) || projects.length === 0) {
    container.innerHTML = "<p>No projects available yet.</p>";
    return;
  }

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const stackHtml = Array.isArray(project.stack)
      ? project.stack.map((item) => `<span>${item}</span>`).join("")
      : "";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="stack">${stackHtml}</div>
      <p><a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">Open Project</a></p>
    `;

    container.appendChild(card);
  });
}

async function loadProjects() {
  try {
    const response = await fetch("/api/projects");
    if (!response.ok) {
      throw new Error("Project request failed");
    }

    const projects = await response.json();
    renderProjects(projects);
  } catch (error) {
    renderProjects([]);
  }
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending...";

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      status.textContent = result.message;
      form.reset();
    } catch (error) {
      status.textContent = error.message;
    }
  });
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const storageKey = "portfolio-theme";

  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === "ember") {
    document.body.classList.add("ember-mode");
    toggleBtn.textContent = "Toggle Night";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("ember-mode");
    const isEmber = document.body.classList.contains("ember-mode");
    localStorage.setItem(storageKey, isEmber ? "ember" : "default");
    toggleBtn.textContent = isEmber ? "Toggle Night" : "Toggle Ember";
  });
}

async function init() {
  setupThemeToggle();
  setupContactForm();
  await Promise.all([loadProfile(), loadProjects()]);
}

init();