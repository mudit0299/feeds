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
    feedlist.on("click","#del" ,function(event){
      //console.log(event.target.parentElement.parentElement.parentElement.attr('id'))
      // console.log($(event.target).attr('id'))
       //console.log($(event.target).parent().parent().parent().parent().attr('id'))
      // console.log(event)
      deletetweet($(event.target).parent().parent().parent().parent().attr('id'),()=>{
          location.reload()
         // console.log("succcessfully deleted")
      })
      })
   

})