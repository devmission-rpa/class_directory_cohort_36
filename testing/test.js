


var catImage = document.getElementById("catImage");
var catInfo = document.getElementById("catInfo");
var backButton = document.getElementById("backButton");


catImage.addEventListener("click", function() {

    catImage.style.display = "none";

    catInfo.style.display = "block";

});


backButton.addEventListener("click", function() {

    catInfo.style.display = "none";

    catImage.style.display = "block";

});
