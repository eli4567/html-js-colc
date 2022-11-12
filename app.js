function validateForm() {

    var textboxPrice1 = document.getElementsByName("textboxPrice1")[0].value
    var textboxPrice2 = document.getElementsByName("textboxPrice2")[0].value
    var date1 = document.getElementsByName("date1")[0].value
    var date2 = document.getElementsByName("date2")[0].value
    //let buttonPrice = document.getElementsByName(buttonPrice;
    console.log(textboxPrice1);
    //add here the logic or export func form here
    //-------------------------------------------------
    //-------------------------------------------------
    //first find how much refund per month
    var monthdisc = textboxPrice1 - textboxPrice2;

    //now log how much par month
    console.log('this is how much to refund per month====' + monthdisc)

    // now let's get the first date and the last date 
    const tempdate1 = new Date(date1);
    const tempdate2 = new Date(date2);
    //now how may month form the next 15 until the 14 of the last month
    // this is how many month not counting the days
    var month = tempdate2.getMonth() - tempdate1.getMonth();
    console.log('month = tempdate2.getUTCMonth() - tempdate1.getUTCMonth();====' + month)
    // chack if it's less then month
    if (month < 1) {
        if (month == 0) {

        } else {

        }
    }

    //what's the date of the first and last date
    const day1 = tempdate1.getDate();
    const day2 = tempdate2.getDate();
    console.log('the first day====' + day1)
    console.log('the last day' + day2)
    // how many days in the first month and the last month
    var month1 = tempdate1.getMonth() + 1;
    var month2 = tempdate2.getMonth() + 1;
    // is the day is before 14 or after ?
    // and how many days in the month 
    var days1 = 0;
    if (day1 > 15) {
        // if it's after 15 then it's by this month
        // and it's one month less to count 
        month--;
        days1 = day1 - 15;
    } else if (day1 < 15) {
        // if it's less then it's by prv month 
        month1--;
        days1 = 14 - day1;
    } else {
        //the same day no change
    }
    var days2 = 0;
    console.log('days2 in priv month' + (getDaysInMonth(tempdate2.getFullYear(), tempdate2.getMonth()) - 15 + day2));

    if (day2 < 15) {
        // if it's before the 15 it's by prv month
        //month--;
        days2 = getDaysInMonth(tempdate2.getFullYear(), month2 - 1) - 15 + day2;
    } else if (day2 > 15) {
        days2 = 14 - day2;
    } else {

    }

    console.log('days1====' + days1)
    console.log('days2====' + days2)

    //all the days with the months
    var refund = month * monthdisc;
    console.log('refund = month * monthdisc;====' + refund)

    console.log('getDaysInMonth(tempdate1.getFullYear(),tempdate1.getMonth()+1)====' + getDaysInMonth(tempdate1.getFullYear(), month1))
    console.log('getDaysInMonth(tempdate2.getFullYear(),tempdate2.getMonth()+1)====' + getDaysInMonth(tempdate2.getFullYear(), month2))
    console.log('days1 * monthdisc / getDaysInMonth(tempdate1.getFullYear(), tempdate1.getMonth()))====' + days1 * monthdisc / getDaysInMonth(tempdate1.getFullYear(), month1))


    var refundfulldays = ((days1) * monthdisc / getDaysInMonth(tempdate1.getFullYear(), month1)) + (days2 * monthdisc / getDaysInMonth(tempdate2.getFullYear(), month2)) + refund;

    console.log('refundfulldays = (days1 * monthdisc / tempdate1.getUTCMonth()) + (days2 * monthdisc / tempdate2.getUTCMonth()) + refund;====' + refundfulldays)

    //console before rendering
    console.log(textboxPrice1 + "refund ===>" + refund + 'refundfulldays' + refundfulldays);
    //reder the data form the user and the logic
    //res.render('test1', { textboxPrice1, textboxPrice2, date1, date2, refundfulldays, month, refund, });

    document.getElementsByName("price-before")[0].innerHTML = textboxPrice1;
    document.getElementsByName("price-after")[0].innerHTML =  + textboxPrice2;
    document.getElementsByName("price-jamp")[0].innerHTML = date1;
    document.getElementsByName("package-changed")[0].innerHTML =date2;
    document.getElementsByName("the-refund")[0].innerHTML =  refund;
    document.getElementsByName("refundfulldays")[0].innerHTML =  refundfulldays;


    return false;
}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
