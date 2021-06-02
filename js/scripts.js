let pics =[];
for(let i=1; i<11;i++){
    var pic = 'img-'+i+'.png'
    pics.push(pic)
}
function INSjoke(){
    $.getJSON("http://api.icndb.com/jokes/random",
    function (data) {
        $('#picture').html('')
        $('#joke').html(data.value.joke) 
        let RNG = Math.floor(Math.random()*10)
        $('#picture').append('<img class="rnd-img" src="images/'+pics[RNG]+'"/>')
    });
}
$(document).ready( function(){      
    INSjoke()
    $('#boto').click(function(e){
        e.preventDefault();
        INSjoke() 
    });
});