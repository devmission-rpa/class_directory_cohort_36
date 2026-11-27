async function getdata() {
  const response = await fetch(
    "https://api.airtable.com/v0/appv4wH8WT59Z9uXb/Cohort%20Responses",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer patrZT0QjKVF36q8N.ab2a72cf952018ed360b2d4dff85bdc608f97a5736299c45464efe504c03c1ad",
      },
    },
  );

  const data = await response.json();
  // console.log(data);
  //from main table
  // const box = document.getElementById("author");
  const firstname = document.getElementById("bName");
  firstname.textContent = data.records[1].fields.FullName;


  console.log("Hello");
  
}

getdata();



// ----- directory cards -----
// append to #studentsGrid or #staffGrid in directory.html


let directoryProfileCard = `
    <a href="#studentNumber${index}" class="profile-card" onclick="showOverlay('student-1'); return false;">
        <div class="photo">
            <div class="formal">
                <img class="portrait-img" src="${imageUrlFormal}" alt="${studentName} formal portrait">
            </div>
            <div class="casual">
                <img class="portrait-img" src="${imageUrlCasual}" alt="${studentName} casual image">
            </div>
        </div>
        <h3>Britney</h3>
        <p>STUDENT NO. 01</p>
    </a>
`;


// ----- overlay interaction -----
const overlay = document.getElementById("profileOverlay");
// get information from airtable -- PLACEHOLDERS !!!!!!!!!!!!!!!!!!!!
function showOverlay(id) {
  //placeholder data
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
