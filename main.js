const allCards = 
Array.from(document.querySelectorAll('.wrapper .card__'))

const allAlbums =
Array.from(document.querySelectorAll('.album_wrapper .album_card')
)
let albumRoots = ['/culture 3.html','/Only_Built_for_Infinity_Links.html','/god-did.html','/her-lost.html']


let PlaylistRoot = ['migos-mix.html','quavo-mix.html','takoff-mix.html','offset-mix.html','lil-baby-mix.html']



allAlbums.forEach(cardAlbum => {
  cardAlbum.addEventListener('click',function(){
    window.open(albumRoots[allAlbums.indexOf(this)])
  })
})

allCards.forEach(cardplaylist => {
  cardplaylist.addEventListener('click',function(){
    window.open(PlaylistRoot[allCards.indexOf(this)])
  })
})


const username =
document.querySelector('.username input')

const UsernameFromStorage = 
localStorage.getItem('username')

function showUserName()
{
  if (UsernameFromStorage == null) {
    username.value = 'John Doe'
  } else {
   username.value = 
   UsernameFromStorage
  }
  
}

showUserName()


window.addEventListener('beforeinstallprompt', (event) => {

  event.preventDefault();

  const promptEvent = event;

  promptEvent.prompt();

  promptEvent.userChoice.then((choiceResult) => {

    if (choiceResult.outcome === 'accepted') {

      console.log('User accepted the A2HS prompt');

    } else {

      console.log('User dismissed the A2HS prompt');

    }

    promptEvent = null;

  });

});






