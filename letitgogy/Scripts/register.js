$(window).on('load', function () {
    $("#registerModal").modal({ backdrop: "static", keyboard: false });
    $('#registerModal').modal('show');
});

$(document).ready(function () {


    //initialise the date picker and set up options.

    var date = new Date();
    //var day = date.getDate();
    //var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var startYear = year - 100;
    var endyear = year - 16;

    //if (day < 10) {
    //    day = "0" + day;
    //}
    //if (month < 10) {
    //    month = "0" + month;
    //}
    var endDate = endyear + "/12/31";
    var startDate = startYear + "/01/01";
    
    $('#date_field').datepicker({
        format: 'yyyy/mm/dd',
        startDate: startDate,
        endDate: endDate,
        autoclose: true,
        assumeNearbyYear: true,
        immediateUpdates: true, 
        startView: 2,
        maxViewMode: 2,
        leftArrow: '<i class="fa fa-long-arrow-left"></i>',
        rightArrow: '<i class="fa fa-long-arrow-right"></i>'

    });
});


$("#confirmPassword,#password").keyup(function () {
    if ($("#password").val() != $("#confirmPassword").val()) {

        $("#statusText").removeClass("text-success").addClass("text-danger").html("password does not match");
        $("#statusIcon").removeClass().addClass("fa fa-times").css("color", "red");
        $("#signUp").toggleClass("disabled");
    }
    else {
        $("#statusText").removeClass("text-danger").addClass("text-success").html("password matches");
        $("#statusIcon").removeClass().addClass("fa fa-check").css("color", "green");
        $("#signUp").toggleClass("disabled");
    }
});