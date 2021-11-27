$(document).ready(function () {
    var url =
    "http://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

    $.getJSON(url, function(data) {
        var html = "";
        $.each(data.items, function(i, item) {
            html += "<a href=" + item.media.m + " title=" + item.title + " rel=lightbox[vecta]";
            html += "<img src=" + item.media.m + " width="
            html += "</a>"
        });
        $("#newbuilding").html(html);
    });
});