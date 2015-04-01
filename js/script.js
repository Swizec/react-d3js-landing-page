
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

(function ($) {
    var coupon = getUrlParameter("c");

    if (!coupon) {
        return;
    }

    var coupons = {
        dashingd3js: {
            basic: 14,
            premium: 39,
            team: 199,
            platinum: 349
        },
        html5weekly: {
            basic: 15,
            premium: 47,
            team: 239,
            platinum: 399
        },
        d3noob: {
            basic: 14,
            premium: 44,
            team: 219,
            platinum: 369
        }
    };
    var coupon_hi = {
        dashingd3js: "Hey DashingD3js reader, enjoy your <strong style='font-size: 1.2em'>25%</strong> coupon! :)",
        html5weekly: "Hey HTML5 Weekly reader, enjoy your <strong style='font-size: 1.2em'>20%</strong> coupon! :)",
        d3noob: "Hey D3 Tips and Tricks reader, enjoy your <strong style='font-size: 1.2em'>25%</strong> coupon! :)"
    };

    $(".navbar").css("display", "block")
        .find("p")
        .html(coupon_hi[coupon]);

    $(".btn-buy").each(function (i, el) {
        var $el = $(el),
            href = $el.attr("href");

        var price = $el.html().match(/\$([0-9]+)/)[1];

        $el.attr("href", href.replace("new", "c/"+coupon))
            .html($el.html().replace(/\$[0-9]+/, 
                                     "<s style='opacity: .4'>$"+price+"</s> $"+coupons[coupon][$el.data("type")]));
    });
})(jQuery);
