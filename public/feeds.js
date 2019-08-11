function fetchfeeds (done) {
    $.get('/feeds', function (data) {
        done(data)
    })
}
function createfeedcard (feed) {
    return $(`
    <div class="card border-info mb-3" style="max-width: 18rem;">
  <div class="card-header">${feed.title}</div>
  <div class="card-body text-info">
    
    <p class="card-text">${feed.content}</p>
  </div>
</div>`
        )
}
function addProduct (title, content,done) {
    $.post('/feeds', {
        title: title,
        content: content,
       
    }, function (data) {
        done(data)
    })
}


