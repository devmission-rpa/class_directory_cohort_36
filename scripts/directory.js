const overlay = document.getElementById("profileOverlay");

function showOverlay(id) {
  // get information -- PLACEHOLDERS !!!!!!!!!!!!!!!!!!!!
  let info = {
    name: "NAME",
    headline: "ASPIRING WEB DEVELOPER",
    summary:
      "PLEASE ADD THE 2-3 SENTENCE SUMMARIES FROM THE GOOGLE FORM HERE PLEASE! IMPORT FROM AIRTABLE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP90t0WvWK1s8RhWNxDCymIvO_9EWf29r_sz2B0Pq7-g&s=10",
    portfolio: "https://google.com", //about me link
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
  };

  // update information
  document.getElementById("overlayName").textContent = info.name;
  document.getElementById("overlayHeadline").textContent = info.headline;
  document.getElementById("profileSummary").textContent = info.summary;
  document.getElementById("overlayPhoto").src = info.image;

  document.getElementById("overlayPortfolio").innerHTML =
    `<a href="${info.portfolio}" target="_blank" rel="noopener">Portfolio</a>`;

  document.getElementById("overlayLinkedin").innerHTML =
    `<a href="${info.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`;

  document.getElementById("overlayGithub").innerHTML =
    `<a href="${info.github}" target="_blank" rel="noopener">Github</a>`;

  // show overlay
  overlay.style.display = "flex";
}

function hideOverlay() {
  overlay.style.display = "none";
}
