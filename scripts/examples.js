// ----- directory -----

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

// please connect airtable to profile overlay in directory.js !!!!