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
  audio_title : 'Transporter', 
  audio_author : 'Lil Baby (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/ Lil Baby - Transporter Ft. Offset.mp3', 
  }
 , {
  audio_title : 'Clout', 
  audio_author : 'Offset (Feat. Cardi B)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/ Offset - Clout ft. Cardi B.mp3', 
  }
 , 
  {
  audio_title : 'Menace', 
  audio_author : 'Lil Yachty, Quavo, Offset', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/ Quality Control - Menace  ft. Lil Yachty, Quavo, Offset.mp3', 
  }
 , 
  {
  audio_title : 'Balenciaga Challenge', 
  audio_author : '6Lack (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/6LACK - Balenciaga Challenge Ft. Offset.mp3', 
  }
 , {
  audio_title : 'Lick', 
  audio_author : 'Cardi B (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Cardi B Feat. Offset _Lick.mp3', 
  }
 ,
 {
  audio_title : 'Baby Sitter', 
  audio_author : 'DaBaby (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/DaBaby - Baby Sitter ft. Offset.mp3', 
  }
 , 
 {
  audio_title : 'Dubai Shit', 
  audio_author : 'Travis Scott, Quavo (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/HUNCHO JACK, Travis Scott, Quavo - Dubai Shit.mp3', 
  }
 , 
 {
  audio_title : 'Had Enough', 
  audio_author : 'JACKBOYS Don Toliver (Feat. Quavo, Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/JACKBOYS Don Toliver - Had Enough (Feat. Quavo & Offset).mp3', 
  }
 , {
  audio_title : 'Quicker', 
  audio_author : 'Jay Critch (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Jay Critch - Quicker  ft. Offset.mp3', 
  }
 , {
  audio_title : 'ZEZE', 
  audio_author : 'Kodak Black (Feat. Travis Scott, Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Kodak Black - ZEZE (feat. Travis Scott & Offset).mp3', 
  }
 , {
  audio_title : 'Run It Up', 
  audio_author : 'Lil Tjay (Feat. Offset, Moneybagg Yo)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Lil Tjay - Run It Up ft. Offset, Moneybagg Yo.mp3', 
  }
 , {
  audio_title : 'DipSet', 
  audio_author : 'Lil Yachty (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Lil Yachty - DipSet (feat. Offset).mp3', 
  }
 , {
  audio_title : 'Menase (2)', 
  audio_author : 'Lil Yachty, Quavo, Offset', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Lil Yachty, Quavo & Offset - Menace.mp3', 
  }
 , {
  audio_title : 'Bad And Boujee', 
  audio_author : 'Migos (Feat. Lil Uzi Vert)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Migos - Bad and Boujee ft Lil Uzi Vert.mp3', 
  }
 , {
  audio_title : 'Keys', 
  audio_author : 'No Plug (Feat. Offset)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/No Plug Feat. Offset _Keys.mp3', 
  }
 , {
  audio_title : 'Ric Flair Drip', 
  audio_author : 'Offset & Metro Boomin', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Offset & Metro Boomin  Ric Flair Drip.mp3', 
  }
 , {
  audio_title : '54321', 
  audio_author : 'Offset', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Offset - 5 4 3 2 1.mp3', 
  }
 , {
  audio_title : 'Lick', 
  audio_author : 'Offset', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Offset - Lick.mp3', 
  }
 , {
  audio_title : 'Quarter Milli', 
  audio_author : 'Offset (Feat. Gucci Mane)', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Offset - Quarter Milli ft. Gucci Mane.mp3', 
  }
 , {
  audio_title : 'Rooster', 
  audio_author : 'Offset', 
  audio_cover : '/offset_mix_audio/offset-mix-cover.png', 
  audio_src : '/offset_mix_audio/Rooster- Offset.mp3', 
  }
 , 
  ]

const data = {
  title: `playlist by Wave ${audio.length} songs`,
  text: 'Give this playlist a listen /Offset mix',
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
      if (i < audio.length - 1) {
        i++
    showPlayingTitle.innerHTML = audio[i].audio_title 
    showPlayingAuthor.innerHTML = audio[i].audio_author
   showPlayingImg.src = audio[i].audio_cover
    audioPlay.src = audio[i].audio_src
   mixe_wrapper_img.src = audio[i].audio_cover
    audioPlay.play() 
      } else {
        i = 0
        showPlayingTitle.innerHTML = audio[i].audio_title
        showPlayingAuthor.innerHTML = audio[i].audio_author
        showPlayingImg.src = audio[i].audio_cover
        audioPlay.src = audio[i].audio_src
        mixe_wrapper_img.src = audio[i].audio_cover
        audioPlay.play()
      }
    
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










