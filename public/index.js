$(function () {

    let feedlist = $('#feedlist')

    fetchfeeds(function (feeds) {
        feedlist.empty()
        for (feed of feeds) {
            feedlist.append(createfeedcard(feed))
        }
    })

})