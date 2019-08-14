$(function () {

    let feedlist = $('#feedlist')

    fetchfeeds(function (feeds) {
        feedlist.empty()
        for (feed of feeds) {
            feedlist.append(createfeedcard(feed))
        }
    })
   
        let title = $('#title')
        let content = $('#content')
      
        
        $('#add').click(function () {
    if(title.val()===''&& content.val===''){
        alert("kindly give title and content")
    }else{
            addfeed(
                title.val(),
                content.val(),
                
               
            )
    
    
       
            }
    })

})