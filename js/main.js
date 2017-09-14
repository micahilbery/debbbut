function init() {
    var primary = document.getElementById("primary");
    var secondary = document.getElementById("secondary");
    primary.onclick = smile;
    secondary.onclick = frown;
};

function smile(event) {
    var animated = document.getElementById("animated-bit");
    animated.className = "player smile";
};

function frown(event) {
    var animated = document.getElementById("animated-bit");
    animated.className = "benched frown";
};

$(function () {
    // Get Current Year
    $('#year').text((new Date).getFullYear ());
});
