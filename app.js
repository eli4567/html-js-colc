"use strict";
function validateForm() {

    var text_box_Price1 = document.getElementsByName("text_box_Price1")[0].value
    var text_box_Price2 = document.getElementsByName("text_box_Price2")[0].value
    var text_box_days = document.getElementsByName("text_box_days")[0].value
    var date1 = document.getElementsByName("date1")[0].value
    var date2 = document.getElementsByName("date2")[0].value

    var refund_per_month = text_box_Price1 - text_box_Price2;

    const temp_date_1 = new Date(date1);
    const temp_date_2 = new Date(date2);
    //-----------
    let pre_15 = temp_date_1;
    let next_14 = dayfourteen(temp_date_1);
    
    var bills = [];
    if (temp_date_2.getTime() < next_14.getTime()) {
        bills.push(new Bill(refund_per_month, pre_15, next_14, text_box_days));
        console.log("small bill");
    }
    while (temp_date_2.getTime() > next_14.getTime()) {
        bills.push(new Bill(refund_per_month, pre_15, next_14, text_box_days));
        let pre15 = next_14;
        pre15 = new Date(pre15.getFullYear(), pre15.getMonth(), pre15.getDate() + 1);
        next_14 = dayfourteen(next_14);
        pre_15 = pre15;
    }
    if (temp_date_2.getDate() > next_14.getDate()) {
        console.log("small bill+ > " + dateFormat(pre_15) + "   " + dateFormat(temp_date_2));
        bills.push(new Bill(refund_per_month, pre_15, temp_date_2, text_box_days));
    }

    if (temp_date_2.getDate() < next_14.getDate()) {
        let d = next_14;
        let b = temp_date_2;
        let k = pre_15;
        bills.push(new Bill(refund_per_month, pre_15, temp_date_2, text_box_days));
        console.log("small bill+ < " + dateFormat(pre_15) + "   " + dateFormat(temp_date_2));
    }
    if (temp_date_2.getDate() == next_14.getDate()) {
        // bills.push(new Bill(refund_per_month, pre_15, temp_date_2, text_box_days));
        console.log("small bill+ ==  " + dateFormat(temp_date_2) + "   " + dateFormat(next_14));
    }


    let priter = "";
    //let bill = new Bill(refund_per_month, temp_date_1, temp_date_2, text_box_days)
    let total = 0;
    for (var i = 0; i < bills.length; i++) {
        total += bills[i].price_total_days;
        priter += dateFormat(bills[i].first_date) + " to " + dateFormat(bills[i].last_date) + " price= " + bills[i].price_total_days;
        priter += " \n ";
        priter += bills[i].price + " * " + bills[i].days + " / " + bills[i].months + " = "+bills[i].price_total_days;
        priter += " \n ";
        //priter += " month days = " + bills[i].months;
        //priter += " \n ";
        //priter += " per day = " + bills[i].payment_per_day;
        //priter += " \n ";

    }
    priter += "from " + dateFormat(temp_date_1) + " to " + dateFormat(temp_date_2) + " price= " + total + ", days= " + Difference(temp_date_2, temp_date_1);

   // alert(bills[bills.length - 1].price_total_days);

    
   // document.getElementsByName("price-before")[0].innerHTML = text_box_Price1;
   // document.getElementsByName("price-after")[0].innerHTML = + bill.price;
   // document.getElementsByName("price-jump")[0].innerHTML = bill.first_date_day;
   // document.getElementsByName("package-changed")[0].innerHTML = bill.last_date_day;
   // document.getElementsByName("the-refund")[0].innerHTML = bill.payment_per_day;
   // document.getElementsByName("refund-full-days")[0].innerHTML = bill.price_total_days;
    //  document.getElementsByName("days")[0].innerHTML = bill.days;
    document.getElementsByName("edit-box")[0].innerHTML = priter;

    return false;
}
function Bill(price, temp_date_1, temp_date_2, month_total_days) {
    this.price = price;
    this.first_date = temp_date_1;
    this.last_date = temp_date_2;
    this.first_date_day = temp_date_1.getDate();;
    this.last_date_day = temp_date_2.getDate();
    this.months = lastday(temp_date_1);
    this.payment_per_day = price * 1 / this.months;
    this.days = Difference(temp_date_2, temp_date_1);
    this.month_total_days = month_total_days;
    this.price_total_days = price * this.days / this.months;
    this.first_month = temp_date_1.getMonth();
    this.last_month = temp_date_2.getMonth();
}
function Difference(date_1, date_2) {
    let difference = date_1.getTime() - date_2.getTime() ;
    let testtemp = Math.round(difference / (1000 * 3600 * 24));
    return testtemp +1;
}
var lastday = function (date) {
    let y = date.getFullYear();
    let m = date.getMonth();
    if (date.getDate() < 14) {
        return new Date(y, m , 0).getDate();
    } else {
        return new Date(y, m + 1, 0).getDate();
    }
}
var dayfourteen = function (date) {
    if (date.getDate() < 14) {
        return new Date(date.getFullYear(), date.getMonth(), 14);
    } else {
        return new Date(date.getFullYear(), date.getMonth() + 1, 14);
    }
}
var dateFormat = function (date) { return new Intl.DateTimeFormat('en-GB').format(date); };



