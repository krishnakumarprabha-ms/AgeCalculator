let present = new Date()
let currentYear = new Date().getFullYear();
let currentDate = new Date().getDate();
let currentMonth = new Date().getMonth() + 1;
let bdate, bmonth, byear;
let adate, amonth, ayear;
let days_feb = 28;
let days_last_month = new Date(currentYear, currentMonth - 1, 0).getDate();
function getUservalue() {
    bdate = Number(document.getElementById("date").value);
    bmonth = Number(document.getElementById("month").value);
    byear = Number(document.getElementById("year").value);
    if (byear % 4 == 0 && byear % 100 != 0 || byear % 400 == 0) {
        days_feb = 29;
    }
    if (bdate <= 0 || bdate > 31 || byear > currentYear || bmonth <= 0 || bmonth > 12) {
        alert("Enter a valid date");
    }
    if (bmonth == 2 && bdate > days_feb) {
        alert("Enter a valid date");
    }
    calculateage()
    majorcheck()
    document.getElementById("ageyear").textContent = ayear + " Years";
    document.getElementById("agemonth").textContent = amonth + " Months";
    document.getElementById("ageday").textContent = adate + " Days";    
}
function calculateage(){
    ayear = currentYear - byear;
    amonth = currentMonth - bmonth;
    adate = currentDate - bdate;
    if (adate < 0) {
        amonth--;
        days_last_month = new Date(currentYear, currentMonth - 1, 0).getDate();
        adate += days_last_month;   
    }
    if (amonth < 0) {
        ayear--;
        amonth += 12;
    }
}
function majorcheck() {
    if (ayear >= 18) {
        document.getElementById("isMajor").textContent = "You are major since " + adate + " Days " + amonth + " Months " + (ayear - 18) + " Years";
    } else {
        document.getElementById("isMajor").textContent = "You are going to be a major in " + (days_last_month - adate) + " Days " + (11 - amonth) + " Months " + (17 - ayear) + " Years";
    }
}