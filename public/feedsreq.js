function fetchfeeds (done) {
    $.get('/feeds', function (data) {
        done(data)
    })
}
function createfeedcard (feed) {
    return $(`
<div class="container" id=${feed.id}>
  <div class="card border-info mb-3 .bg-dark " ;">
    <div class="card-header">${feed.author}</div>
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
function addfeed (content,done) {
  console.log("start")
 // console.log(author)
    $.post('/feeds', {
      
        //author: author,
        content: content,
        
    }, function (data) {
      console.log("done")
        done(data)
    })
    console.log("done")
}
 function deletetweet(id,done){
     console.log(id)
     $.ajax({
        url: '/feeds/'+id,
     type: 'POST',
     data: { id:id },
     success: done(),
    })
  }

// }function adduser (username, email,password,phoneno,firstname,lastname,firstname,done) {
//   $.post('/api/log', {
//       username:username,
//       password:password,
//       email:email,
// phoneno:phoneno,
// firstname:firstname,
// lastname:lastname


     
//   }, function (data) {
//       done(data)
//   })
// }



