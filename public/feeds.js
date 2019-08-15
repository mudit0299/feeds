function fetchfeeds (done) {
    $.get('/api/feeds', function (data) {
        done(data)
    })
}
function createfeedcard (feed) {
    return $(`
<div class="container" id=${feed.id}>
  <div class="card border-info mb-3 .bg-dark " ;">
    <div class="card-header">${feed.title}</div>
    <div class="card-body text-info">   
      <p class="card-text">${feed.content}</p>
       <div class ="card-footer">
         <button class =" btn btn-danger" id='del'>DELETE</button>
       </div>
    </div>
  </div>
</div>`
        )
}
function addfeed (title, content,done) {
    $.post('/api/feeds', {
        title: title,
        content: content,
       
    }, function (data) {
        done(data)
    })
}
 function deletetweet(id,done){
     console.log(id)
     $.ajax({
        url: '/api/feeds/'+id,
     type: 'POST',
     data: { id:id },
     success: done(),
    });
   

}



