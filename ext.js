$(":button").click(function(){
    var textValue = ($(":text").val());
    $("body").append("<ul><li>"+textValue+"</li><ul>")
})