const SearchInput = 
document.querySelector('#SearchInput');

const mixe_wrapper_img = 
document.querySelector('.mixe_wrapper img')

const playAll_btn =
document.getElementById('playAll_btn');

const share_btn =  
document.getElementById('share_btn');

const playlist_container = 
document.querySelector('.playlist_container')


const showPlayingImg = 
document.querySelector('.showPlayingImg img');


const showPlayingTitle = 
document.querySelector('.showPlayingDetails h5');

const  showPlayingAuthor = 
document.querySelector('.showPlayingDetails p')

const audioPlay = 
document.querySelector('#playAudio')

const playState = 
document.querySelector('#playState')

const loopbtn = 
document.querySelector('#loop')


audioPlay.loop = false


const addLibrary = JSON.parse(localStorage.getItem('myLibrary') || '[]')


const audio = [
  {
  audio_title : 'Pussy & Millions', 
  audio_author : 'Drake, 21 Savage (Feat. Travis Scott)', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake & 21 Savage - Pussy & Millions ft. Travis Scott.mp3', 
  }
 , 
{
  audio_title : 'I Guess It\'s Fuck Me', 
  audio_author : 'Drake', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake - I Guess It’s Fuck Me.mp3', 
  }
 , 
 {
  audio_title : 'Middle Of The Ocean', 
  audio_author : 'Drake', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake - Middle of the Ocean.mp3', 
  }
 , 
 {
  audio_title : 'Treacherous Twins', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Treacherous Twins.mp3', 
  }
 , 
 {
  audio_title : 'Major Distribution', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Major Distribution.mp3', 
  }
 , 
 {
  audio_title : 'Broke Boys', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Broke Boys.mp3', 
  }
 , {
  audio_title : 'Hours In Silence', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Hours In Silence.mp3', 
  }
 , 
 {
  audio_title : 'Privileged Rappers', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Privileged Rappers.mp3', 
  }
 , {
  audio_title : '3AM On Glenwood', 
  audio_author : '21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/ 21 Savage - 3AM on Glenwood.mp3', 
  }
 , 
 {
  audio_title : 'Circo Loco', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Circo Loco.mp3', 
  }
 , {
  audio_title : 'Spin Bout U', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Spin Bout U.mp3', 
  }
 , 
 {
  audio_title : 'Jumbotron', 
  audio_author : 'Drake', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake - Jumbotron Shit Poppin.mp3', 
  }
 , {
  audio_title : 'More M\'S ', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - More M’s.mp3', 
  }
 , 
 {
  audio_title : 'Rich Flex', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - Rich Flex.mp3', 
  }
 , {
  audio_title : 'On Bs', 
  audio_author : 'Drake & 21 Savage', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake, 21 Savage - On BS.mp3', 
  }
 , 
 {
  audio_title : 'BackOutSideBoyz', 
  audio_author : 'Drake', 
  audio_cover : '/trending_albums_cover/her_lost_cover.jpeg', 
  audio_src : '/her_lost_audio/drake - BackOutsideBoyz.mp3', 
  }
 , 
  ]


const data = {
  title: `Drake & 21 Savage. Album ${audio.length} songs`,
  text: 'Give this album a listen / Her Lost',
  url: location.href
}

function shareData()
{
  if (navigator.canShare && navigator.canShare(data)) {
    navigator.share(data)
  } else {
    alert('Your browser does not support it')
  }
}

share_btn.onclick = shareData



async function showaudio(arg) {
  let innerAudio = ''
  for (var i = 0; i < audio.length; i++) {
    let newAudio = `
    <div class="card__" data-id="${audio[i].audio_title} ${audio[i].audio_author}">
      <div class="audio_img">
      <img src=${audio[i].audio_cover} alt="">
      </div>
      <div class="details">
       <h5>
       ${audio[i].audio_title}
       </h5>
       <p>${audio[i].audio_author}</p>
      </div>
      <div class="addToLibrary">
     <button class="favorite material-symbols-outlined">
         favorite
       </button>
      </div>
    </div>
    `
    innerAudio += newAudio
  }
  playlist_container.innerHTML = innerAudio
  
  
  let allCards = Array.from(document.querySelectorAll('.card__'))
  
  allCards.forEach(card => {
    card.addEventListener('click',function(e){
      e.preventDefault();
     e.stopImmediatePropagation();
     e.stopPropagation();
     
   playAudio(audio[allCards.indexOf(this)].audio_title,audio[allCards.indexOf(this)].audio_author, audio[allCards.indexOf(this)].audio_src,audio[allCards.indexOf(this)].audio_cover,audio[allCards.indexOf(this)].audio_title, audio[allCards.indexOf(this)].audio_author)
   playNext(allCards.indexOf(this))
    })
  })
  
  
  SearchInput.addEventListener('keyup', () => {
   if (SearchInput.value.length == 0) {
     showaudio()
   }
 const searchValue = SearchInput.value.toLowerCase();
 for (const box of allCards) {
     if (box.dataset.id.toLowerCase().includes(searchValue)) {
       box.classList.remove('hide')
    } else {
      box.classList.add('hide')
    }
   }
 });

  
  
  
  const allFavBtn = 
Array.from(document.querySelectorAll('.favorite'))

  allFavBtn.forEach(favbtn =>{
   favbtn.addEventListener('click',function(e){
     e.preventDefault();
     e.stopImmediatePropagation();
     e.stopPropagation();
     
   addFav(audio[allFavBtn.indexOf(this)].audio_author, audio[allFavBtn.indexOf(this)].audio_src, audio[allFavBtn.indexOf(this)].audio_title, audio[allFavBtn.indexOf(this)].audio_cover);
   
    },{once:true})
  })
  
  
}

showaudio()


function addFav(author,src,title,cover)
{
  
  addLibrary.push({
    audio_title: title,
      audio_author: author,
      audio_cover: cover,
      audio_src: src, 
  })
 


  localStorage.setItem('myLibrary',JSON.stringify(addLibrary))
  document.querySelector('.feedback_wrapper').classList.add('active');
  setTimeout(()=>{
document.querySelector('.feedback_wrapper').classList.remove('active');
  },2000)
}




async function playAudio(title,author,src,cover,title_title,author_author) {
{
  showPlayingTitle.innerHTML = title 
  showPlayingAuthor.innerHTML = author
  showPlayingImg.src = cover
  audioPlay.src = src 
  mixe_wrapper_img.src = cover
  document.title = `${title_title} / ${author_author}`
   audioPlay.play();

  document.querySelector('.showPlayingWrapper').classList.add('active')
  
 
  playState.innerHTML = 'pause_circle'
   playAll_btn.innerHTML = 'restart_alt'
}




}
function playNext(index)
{
  //index++
  audioPlay.addEventListener('ended',function(){
    if (index < audio.length - 1) {
      index++
    showPlayingTitle.innerHTML = audio[index].audio_title 
    showPlayingAuthor.innerHTML = audio[index].audio_author
   showPlayingImg.src = audio[index].audio_cover
    audioPlay.src = audio[index].audio_src
   mixe_wrapper_img.src = audio[index].audio_cover
   document.title = `${audio[index].audio_title} / ${audio[index].audio_author}` 
    audioPlay.play()
    } else {
      index = 0 
      showPlayingTitle.innerHTML = audio[index].audio_title 
    showPlayingAuthor.innerHTML = audio[index].audio_author
   showPlayingImg.src = audio[index].audio_cover
    audioPlay.src = audio[index].audio_src
    mixe_wrapper_img.src = audio[index].audio_cover
    document.title = `${audio[index].audio_title} / ${audio[index].audio_author}` 
    audioPlay.play()
      
    }
  })
  
  
}


let i = 0

  function playAll()
  {
    playAll_btn.innerHTML = 'restart_alt'
     playState.innerHTML = 'pause_circle'
    showPlayingTitle.innerHTML = audio[i].audio_title  
  showPlayingAuthor.innerHTML = audio[i].audio_author
  showPlayingImg.src = audio[i].audio_cover
  mixe_wrapper_img.src = audio[i].audio_cover
  audioPlay.src = audio[i].audio_src 
  document.querySelector('.showPlayingWrapper').classList.add('active')
 document.title = `${audio[i].audio_title} / ${audio[i].audio_author}`
    audioPlay.play()
    
    
    
    
    audioPlay.addEventListener('ended',function(){
      i++
    showPlayingTitle.innerHTML = audio[i].audio_title 
    showPlayingAuthor.innerHTML = audio[i].audio_author
   showPlayingImg.src = audio[i].audio_cover
    audioPlay.src = audio[i].audio_src
   mixe_wrapper_img.src = audio[i].audio_cover
    audioPlay.play()
    
  })
  
    
  }
  
playAll_btn.onclick = playAll









function playSta(index)
{
  if (audioPlay.paused) {
    audioPlay.play()
    playAll_btn.innerHTML = 'restart_alt'
    playState.innerHTML = 'pause_circle'
    
  } else {
    audioPlay.pause()
    playState.innerHTML = 'play_circle'
  }
}
playState.onclick = playSta



function toggleLoop()
{
  if (audioPlay.loop == false) {
    audioPlay.loop = true 
    loopbtn.classList.add('loop_on')
  } else {
    audioPlay.loop = false
    loopbtn.classList.remove('loop_on')
  }
}

loopbtn.onclick = toggleLoop










