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
  audio_title : 'Us vs Them', 
  audio_author : 'Quavo, Takeoff (Feat. Gucci Mane)', 
  audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
  audio_src : '/migos_mixe_audio/Quavo & Takeoff Ft. Gucci Mane - Us vs. Them (Official Video) (128 kbps).mp3', 
  }
 , 
  {
    audio_title : 'T-Shirt', 
    audio_author : 'Migos', 
    audio_cover : '/wave_logo/wave.png', 
    audio_src : '/migos_mixe_audio/Migos - T-Shirt.mp3', 
  }
 , 
  {
    audio_title : 'Top Down On da nawf', 
    audio_author : 'Migos', 
    audio_cover : '/wave_logo/wave.png', 
    audio_src : '/migos_mixe_audio/Migos - Top Down On Da NAWF .mp3', 
  }
 , 
  {
    audio_title : 'avalanche', 
    audio_author : 'migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Avalanche_(Lyrics)(256k).mp3', 
  }
 , 
  {
    audio_title : 'handle my business', 
    audio_author : 'migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Handle_My_Business_(Official_Audio)(256k).mp3', 
  }
 , 
  {
    audio_title : 'jane', 
    audio_author : 'migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Jane_(Official_Audio)(256k).mp3', 
  }
 , 
  {
    audio_title : 'menace', 
    audio_author : 'migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Menace_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3', 
  }
 , 
  {
    audio_title : 'moderne day', 
    audio_author : 'migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src:'/migos_mixe_audio/Migos_-_Modern_Day_(Official_Video)(256k).mp3'
  }
  
  ]


const data = {
  title: `playlist by Wave ${audio.length} songs`,
  text: 'Give this playlist a listen /Migos mix',
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
 const searchValue = SearchInput.value;
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










