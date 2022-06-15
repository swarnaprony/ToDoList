//jshint esversion:6

module.exports.getDate = getDate;
// module.exports.getDay = getDay;

function getDate() {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleString("en-us", options);

    return day;
}


function getDay() {

    let today = new Date();

    let options = {
        weekday: "long"
    };

    let day = today.toLocaleString("en-us", options);

    return day;
}
