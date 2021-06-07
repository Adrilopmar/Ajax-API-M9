let pics =[];
const api_url ='http://api.icndb.com/jokes/random' ;
for(let i=1; i<11;i++){
    var pic = 'img-'+i+'.png'
    pics.push(pic)
}
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const jokes = data;
    document.getElementById('joke').textContent = jokes.value.joke
    $('#picture').html('')
    $('#joke').html(data.value.joke) 
    let RNG = Math.floor(Math.random()*10)
    $('#picture').append('<img class="rnd-img" src="images/'+pics[RNG]+'"/>')
  }
  $(document).ready( function(){ 
    getISS();
    $('#boto').click(function(e){
        e.preventDefault();
        getISS();   
    });
  });