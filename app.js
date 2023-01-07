"use strict";
function validateForm() {

    var text_box_Price1 = document.getElementsByName("text_box_Price1")[0].value
    var text_box_Price2 = document.getElementsByName("text_box_Price2")[0].value
    var text_box_days = document.getElementsByName("text_box_days")[0].value
    var date1 = document.getElementsByName("date1")[0].value
    var date2 = document.getElementsByName("date2")[0].value

    //let buttonPrice = document.getElementsByName(buttonPrice; text_box_days
    console.log(text_box_Price1);
    //add here the logic or export func form here
    //-------------------------------------------------
    // text_box_Price1 is the price of plan text_box_Price2 is the price of plan after the change
    // date1 is the first date when the price was change date2 is the price the change in price later when it was change 
    //

    //-------------------------------------------------
    //first find how much refund per month
    var refund_per_month = text_box_Price1 - text_box_Price2;

    //now log how much par month
    console.log('this is how much to refund per month====' + refund_per_month)
    const temp_date_1 = new Date(date1);
    const temp_date_2 = new Date(date2);
    // we want to know how many full month it was on the price1 the var month need to be only the
    // full months without days leftover
    //now how may month form the next 15 until the 14 of the last month
    // this is how many month not counting the days

    // we need to get first month and last month as date var using get_month so we can know
    ///before we doing that we need to know what is the date of the billing cycle
    // if the billing cycle is 15 then
   // var billingCycle = 15;
    // now we can change it later if needed
    // we need to make bill ver
    // const bill = new Bill();

    let month_date_1 = temp_date_1;
    let month_date_2 = temp_date_2;

    if (Difference(temp_date_1, temp_date_2) > 33) {
        var now = temp_date_1;
        if (now.getMonth() == 11) {
            var current = new Date(now.getFullYear() + 1, 15, 1);
            month_date_2 = current;
        } else {
            var current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        }
    }
    
    let bill = new Bill(text_box_Price1 - text_box_Price2, temp_date_1, temp_date_2,  text_box_days) 

    //---------------------
    //if (bill.days > 33) {
    //    var current
    //    if (temp_date_1.getMonth() == 11) {
    //        current = new Date(temp_date_1.getFullYear() + 1, 0, 1);
    //    } else {
    //        current = new Date(temp_date_1.getFullYear(), temp_date_1.getMonth() + 1, 1);
    //    }
    //    if (Difference(temp_date_2, current) > 0) {

    //        ///do it
    //        if (Difference(temp_date_2, current) < 33) {

    //        }
    //        console.log("days dif == "+Difference(temp_date_2, current));
    //    } else {
    //        current
    //        console.log("do it 2");
    //    }

    //}
    ///-----------------------------------
    // and last date need to be in compere to billing cycle ver
    // so bill.first_date_day < billing_cycle then last date is =billing_cycle - bill.first_date_day

    //--------------------------
    ///Bill first_month = getFirstMonth(first_date_day, last_date_day, first_month, last_month, temp_date_1, temp_date_2);

    //--------------------------
    //get_price_total_days(bill, temp_date_1, temp_date_2);
    //----------------------------------
        //what if it's not just the first month ...
            // then this is bill.days
    // we need to know how many days there is in the month
    // to get it we need "function getDaysInMonth(year, month)"
    // now we can calculate the payment_per_day
    console.log(" bill.month_total_days"+bill.month_total_days);

    //the price monthly after change

    //

    /////////

    //........... end of ......for now

    // print to html text_box_days
    document.getElementsByName("price-before")[0].innerHTML = text_box_Price1;
    document.getElementsByName("price-after")[0].innerHTML = + bill.price;
    document.getElementsByName("price-jump")[0].innerHTML = bill.first_date_day;
    document.getElementsByName("package-changed")[0].innerHTML = bill.last_date_day;
    document.getElementsByName("the-refund")[0].innerHTML = bill.payment_per_day;
    document.getElementsByName("refund-full-days")[0].innerHTML = bill.price_total_days;
    document.getElementsByName("days")[0].innerHTML = bill.days;
    document.getElementsByName("edit-box")[0].innerHTML = "from " + new Intl.DateTimeFormat('en-US').format(bill.first_date) + " to " + Intl.DateTimeFormat('en-US').format(bill.last_date) + " price" + bill.price + " * days " + bill.days
        + " / " + bill.months + " = " + bill.price_total_days;

/*
    var month = temp_date_2.getMonth() - temp_date_1.getMonth();
    console.log('month = temp_date_2.getUTCMonth() - temp_date_1.getUTCMonth();====' + month)
    // check if it's less then month
    if (month < 1) {
        if (month == 0) {

        } else {

        }
    }

    //what's the date of the first and last date
    const day1 = temp_date_1.getDate();
    const day2 = temp_date_2.getDate();
    console.log('the first day====' + day1)
    console.log('the last day' + day2)
    // how many days in the first month and the last month
    var month1 = temp_date_1.getMonth() + 1;
    var month2 = temp_date_2.getMonth() + 1;
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
    console.log('days2 in priv month' + (getDaysInMonth(temp_date_2.getFullYear(), temp_date_2.getMonth()) - 15 + day2));

    if (day2 < 15) {
        // if it's before the 15 it's by prv month
        //month--;
        days2 = getDaysInMonth(temp_date_2.getFullYear(), month2 - 1) - 15 + day2;
    } else if (day2 > 15) {
        days2 = 14 - day2;
    } else {

    }
    
    console.log('days1====' + days1)
    console.log('days2====' + days2)

    //all the days with the months
    var refund = month * refund_per_month;
    console.log('refund = month * refund_per_month;====' + refund)

    console.log('getDaysInMonth(temp_date_1.getFullYear(),temp_date_1.getMonth()+1)====' + getDaysInMonth(temp_date_1.getFullYear(), month1))
    console.log('getDaysInMonth(temp_date_2.getFullYear(),temp_date_2.getMonth()+1)====' + getDaysInMonth(temp_date_2.getFullYear(), month2))
    console.log('days1 * refund_per_month / getDaysInMonth(temp_date_1.getFullYear(), temp_date_1.getMonth()))====' + days1 * refund_per_month / getDaysInMonth(temp_date_1.getFullYear(), month1))


    var refund-full-days = ((days1) * refund_per_month / getDaysInMonth(temp_date_1.getFullYear(), month1)) + (days2 * refund_per_month / getDaysInMonth(temp_date_2.getFullYear(), month2)) + refund;

    console.log('refund-full-days = (days1 * refund_per_month / temp_date_1.getUTCMonth()) + (days2 * refund_per_month / temp_date_2.getUTCMonth()) + refund;====' + refund-full-days)

    //console before rendering
    console.log(text_box_Price1 + "refund ===>" + refund + 'refund-full-days' + refund-full-days);
    //reader the data form the user and the logic
    //res.render('test1', { text_box_Price1, text_box_Price2, date1, date2, refund-full-days, month, refund, });

    document.getElementsByName("price-before")[0].innerHTML = text_box_Price1;
    document.getElementsByName("price-after")[0].innerHTML =  + text_box_Price2;
    document.getElementsByName("price-jump")[0].innerHTML = date1;
    document.getElementsByName("package-changed")[0].innerHTML =date2;
    document.getElementsByName("the-refund")[0].innerHTML =  refund;
    document.getElementsByName("refund-full-days")[0].innerHTML =  refund-full-days;
    */

    return false;
}
function getDaysInMonth(date) {


    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}
function Bill(price, temp_date_1, temp_date_2, month_total_days) {
    this.price = price;
    this.first_date = temp_date_1;
    this.last_date = temp_date_2;
    this.first_date_day = temp_date_1.getDate();;
    this.last_date_day = temp_date_2.getDate();
    this.payment_per_day = price * 1 / month_total_days;
    this.months = lastday(temp_date_1.getFullYear(), temp_date_1.getMonth());
    this.days = Difference(temp_date_2, temp_date_1);
    this.month_total_days = month_total_days;
    this.price_total_days = price * this.days / month_total_days;
    this.first_month = temp_date_1.getMonth();
    this.last_month = temp_date_2.getMonth();
}
function Difference(date_1, date_2) {
    let difference = date_1.getTime() - date_2.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
}
function DifferenceMonths(date_1, date_2) {
    let difference = date_1.getTime() - date_2.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
}
var lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
}
//function get_price_total_days(bill, temp_date_1, temp_date_2) {
//    bill.m
//}

