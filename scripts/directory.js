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
  
  // Fetching names
  let nameTags = document.getElementsByClassName("name");
  let nameCounter = 0;

  data.records.forEach((rec) => {
    nameTags[nameCounter].textContent = `${rec.fields.fullName}`;
    nameCounter++;
  })

  // Fetching images
  let pictureFrames = document.getElementsByClassName("student");
  let imageCounter = 0;

  data.records.forEach((rec) => {
    pictureFrames[imageCounter].children[0].children[0].src = `${rec.fields.professionalHeadshot[0].url}`;
    pictureFrames[imageCounter].children[1].children[0].src = `${rec.fields.personalityHeadshot[0].url}`;
    imageCounter++;
  })

}

async function getStaffData() {
  const response = await fetch(
    "https://api.airtable.com/v0/appv4wH8WT59Z9uXb/Staff%20Responses",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer patrZT0QjKVF36q8N.ab2a72cf952018ed360b2d4dff85bdc608f97a5736299c45464efe504c03c1ad",
      },
    },
  );

  const data = await response.json();

  // Fetching images
  let pictureFrames = document.getElementsByClassName("staff");
  let counter = 0;

  data.records.forEach((rec) => {
    pictureFrames[counter].children[0].children[0].src = `${rec.fields.professionalHeadshot[0].url}`;
    pictureFrames[counter].children[1].children[0].src = `${rec.fields.personalityHeadshot[0].url}`;
    counter++;
  })

  // Fetching Staff Names
  let nameTagsStaff = document.getElementsByClassName("nameStaff");
  let nameCounter = 0;

  data.records.forEach((rec) => {
    nameTagsStaff[nameCounter].textContent = `${rec.fields.fullName}`;
    nameCounter++;
  });
}

getdata();
getStaffData();



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
// get information from airtable -- PLACEHOLDERS !!!!!!!!!!!!!!!!!!!!
async function showOverlay(id) {
  //placeholder data
  let response;

  if (id.search("student") != -1) {
    response = await fetch(
      "https://api.airtable.com/v0/appv4wH8WT59Z9uXb/Cohort%20Responses",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer patrZT0QjKVF36q8N.ab2a72cf952018ed360b2d4dff85bdc608f97a5736299c45464efe504c03c1ad",
        },
      },
    );
  } else if (id.search("staff") != -1) {
    response = await fetch(
      "https://api.airtable.com/v0/appv4wH8WT59Z9uXb/Staff%20Responses",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer patrZT0QjKVF36q8N.ab2a72cf952018ed360b2d4dff85bdc608f97a5736299c45464efe504c03c1ad",
        },
      },
    );
  } else {
    return;
  }

  const data = await response.json();
  let index = (id.match(/\d+/)[0]) - 1;
  console.log(index);

  let info = {
    name: data.records[index].fields.fullName,
    headline: "ASPIRING WEB DEVELOPER",
    summary: data.records[index].fields.description,
    image: data.records[index].fields.personalityHeadshot[0].url,
    portfolio: data.records[index].fields.aboutmeLink, //about me link
    linkedin: data.records[index].fields.linkedinLink,
    github: data.records[index].fields.githubLink,
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
  let overlay = document.getElementById("profileOverlay");
  overlay.style.display = "flex";
}

function hideOverlay() {
  let overlay = document.getElementById("profileOverlay");
  overlay.style.display = "none";
}


