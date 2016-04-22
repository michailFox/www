(function () {
    
    var container = $('#container');
    
    
    $.ajax({
        url:'data/data.json'
    }).done(function(data){
        var json = JSON.stringify(data);
        json = JSON.parse(json);
        source = $("#tepmlate").html();
        tepmlate = Handlebars.compile(source);
        html = tepmlate(json);
        container.append(html);
    })
})()

