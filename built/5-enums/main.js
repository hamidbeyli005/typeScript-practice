var months;
(function (months) {
    months[months["january"] = 0] = "january";
    months[months["february"] = 1] = "february";
    months[months["march"] = 2] = "march";
    months[months["april"] = 3] = "april";
    months[months["may"] = 4] = "may";
    months[months["june"] = 5] = "june";
    months[months["july"] = 6] = "july";
    months[months["august"] = 7] = "august";
    months[months["september"] = 8] = "september";
    months[months["october"] = 9] = "october";
    months[months["november"] = 10] = "november";
    months[months["december"] = 11] = "december";
})(months || (months = {}));
console.log(months.january); // 0
console.log(months.april); // 3
console.log(months.october); // 9
var weekdays;
(function (weekdays) {
    weekdays[weekdays["monday"] = 1] = "monday";
    weekdays[weekdays["tuesday"] = 2] = "tuesday";
    weekdays[weekdays["wednesday"] = 3] = "wednesday";
    weekdays[weekdays["thursday"] = 4] = "thursday";
    weekdays[weekdays["friday"] = 5] = "friday";
    weekdays[weekdays["saturday"] = 6] = "saturday";
    weekdays[weekdays["sunday"] = 7] = "sunday";
})(weekdays || (weekdays = {}));
console.log(weekdays.monday); // 1
console.log(weekdays.thursday); // 4
console.log(weekdays.sunday); // 7
var operators;
(function (operators) {
    operators["naxtel"] = "060";
    operators["azercell"] = "050/051/010";
    operators["bakcell"] = "055/099";
    operators["nar"] = "070";
})(operators || (operators = {}));
console.log(operators.naxtel); // 060
console.log(operators.bakcell); // 050/099
