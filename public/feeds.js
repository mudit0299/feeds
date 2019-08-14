function fetchfeeds (done) {
    $.get('/api/feeds', function (data) {
        done(data)
    })
}
function createfeedcard (feed) {
    return $(`
    
    <div class="card border-info mb-3 .bg-dark " ;">
  <div class="card-header">${feed.title}</div>
  <div class="card-body text-info">
    
    <p class="card-text">${feed.content}</p>
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


