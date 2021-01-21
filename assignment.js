// https://github.com/ashikrobi/basic-js

//project kilometerToMeter
function kilometerToMeter(kilometer){
    let meter = kilometer * 1000;
    return meter;
}

//project budgetCalculator
function budgetCalculator(watch, phone, laptop){
    let watchPerUnitCost = 50;
    let watchExpense = 50 * watch;
    let phonePerUnitCost = 100;
    let phoneExpense = 100 * phone;
    let laptopPerUnitCost = 500;
    let laptopExpense = 500 * laptop;
    let total = watchExpense + phoneExpense + laptopExpense;
    return total;
}

//project hotelCost
function hotelCost(stayingDays){
    let rentFor10Days = 100;
    let rentFor20Days = 80;
    let rentForMore = 50;
    let pay = 0;
    if(stayingDays >= 1 && stayingDays <= 10){
        pay = rentFor10Days * stayingDays;
        return pay;
    }
    else if(stayingDays > 10 && stayingDays <=20){
        pay = (stayingDays - 10) * rentFor20Days + (rentFor10Days * 10);
        return pay;
    }
    else if(stayingDays > 20){
        pay = (rentFor10Days * 10) + (rentFor20Days * 10) + (stayingDays - 20) * rentForMore;
        return pay;
    }
    else{
        console.log("Enter a positive number");
    }
}
console.log(hotelCost(21));

//project megaFriend
function megaFriend(){

}