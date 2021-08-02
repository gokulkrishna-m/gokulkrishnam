$(document).ready(function() {
    $('#darktheme').change(function() {
        // $('#console-event').html('Toggle: ' + $(this).prop('checked'));
        // console.log("Toggle :" + $(this).prop('checked'));
        if ($(this).prop('checked') == true) {
            console.log("Gokul Krishna...!!!" + $(this).prop('checked'));
            $("body").addClass("darktheme");
            $("body").removeClass("lighttheme");
            // $("div").toggleClass("darktheme", true);
            // $("div").toggleClass(function() {
            //     return "darktheme";
            // });
        } else {
            console.log("Lavanya...!!!" + $(this).prop('checked'));
            $("body").addClass("lighttheme");
            $("body").removeClass("darktheme");
            // $("div").toggleClass("lighttheme", true);
            // $("div").toggleClass(function() {
            //     return "lighttheme";
            // });
        }
    });
    $('#nav_about').click(function() {
        $('#about_desc').show();
        $('#portfolio_desc').hide();
    });
    $('#nav_portfolio').click(function() {
        $('#portfolio_desc').show();
        $('#about_desc').hide();
    });
});