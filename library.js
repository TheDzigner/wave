
const SearchInput = 
document.getElementById('SearchInput');

const countSaved = document.querySelector('.countSaved p')

const playAll_btn =
document.getElementById('playAll_btn');


const playlist_container = 
document.querySelector('.playlist_container')

const loopbtn = 
document.querySelector('#loop')

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

audioPlay.loop = false

const getFavFromLocal = JSON.parse(localStorage.getItem('myLibrary'))





function showCount()
{
  if (getFavFromLocal == null || getFavFromLocal.lector == 0) {
    countSaved.innerHTML = 'No liked songs'
    document.querySelector('.play_container').classList.add('hide')
  } else {
    countSaved.innerHTML = `${getFavFromLocal.length} song(s) from your library`
    document.querySelector('.play_container').classList.remove('hide')
  }
}
showCount()





async function showFav() {
  let innerFav = ''
  for (var i = 0; i < getFavFromLocal.length; i++) {
    let newFav = `
    <div class="card__" data-id="${getFavFromLocal[i].audio_title}">
      <div class="audio_img">
      <img src=${getFavFromLocal[i].audio_cover} alt="">
      </div>
      <div class="details">
       <h5>
       ${getFavFromLocal[i].audio_title}
       </h5>
       <p>
       ${getFavFromLocal[i].audio_author}
       </p>
      </div>
      <div class="addToLibrary">
     <button class="remove material-symbols-outlined">
         remove
       </button>
      </div>
    </div>
    
    `
    innerFav += newFav
  }
  
  playlist_container.innerHTML = innerFav

  let allCards = Array.from(document.querySelectorAll('.card__'))
  
  allCards.forEach(card => {
    card.addEventListener('click',function(e){
      e.preventDefault();
     e.stopImmediatePropagation();
     e.stopPropagation();
     
    playAudio(getFavFromLocal[allCards.indexOf(this)].audio_title,getFavFromLocal[allCards.indexOf(this)].audio_author, getFavFromLocal[allCards.indexOf(this)].audio_src,getFavFromLocal[allCards.indexOf(this)].audio_cover,)
    
      playNext(allCards.indexOf(this))
      
     
      
    })
    
  })
  
  
  
  const allRemoveBtns = Array.from(document.querySelectorAll('.remove'))
  
  allRemoveBtns.forEach(remove => {
    remove.addEventListener('click',function(e){
      e.preventDefault();
     e.stopImmediatePropagation();
     e.stopPropagation();
     
      removeFav(allRemoveBtns.indexOf(this))
    })
  })
  
  
  SearchInput.addEventListener('keyup', () => {
   if (SearchInput.value.length == 0) {
     showFav()
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

  
  

}
showFav()



function removeFav(index)
{
  getFavFromLocal.splice(index,1)
  localStorage.setItem('myLibrary',JSON.stringify(getFavFromLocal))
  showFav()
  showCount()
  document.querySelector('.feedback_wrapper').classList.add('active');
  setTimeout(()=>{
document.querySelector('.feedback_wrapper').classList.remove('active');
  },2000)
}



async function playAudio(title,author,src,cover)
{
  showPlayingTitle.innerHTML = title 
  showPlayingAuthor.innerHTML = author
  showPlayingImg.src = cover
  audioPlay.src = src 
  document.title = `${title} / ${author}`
  
  document.querySelector('.showPlayingWrapper').classList.add('active')
 audioPlay.play()
  playState.innerHTML = 'pause_circle'
   playAll_btn.innerHTML = 'restart_alt'
}














function playNext(index)
{
  audioPlay.addEventListener('ended',function(){
    if (index < getFavFromLocal.length - 1) {
          index++
    showPlayingTitle.innerHTML = getFavFromLocal[index].audio_title 
    showPlayingAuthor.innerHTML = getFavFromLocal[index].audio_author
   showPlayingImg.src = getFavFromLocal[index].audio_cover
    audioPlay.src = getFavFromLocal[index].audio_src
    document.title = `${getFavFromLocal[index].audio_title } / ${getFavFromLocal[index].audio_author}`
    
    audioPlay.play()
    } else {
      index = 0 
      showPlayingTitle.innerHTML = getFavFromLocal[index].audio_title 
    showPlayingAuthor.innerHTML = getFavFromLocal[index].audio_author
   showPlayingImg.src = getFavFromLocal[index].audio_cover
    audioPlay.src = getFavFromLocal[index].audio_src
   document.title = `${getFavFromLocal[index].audio_title } / ${getFavFromLocal[index].audio_author}`

    audioPlay.play()
      
    }
  })
  
  
}

let i = 0

  function playAll()
  {
    playAll_btn.innerHTML = 'restart_alt'
     playState.innerHTML = 'pause_circle'
    showPlayingTitle.innerHTML = getFavFromLocal[i].audio_title  
  showPlayingAuthor.innerHTML = getFavFromLocal[i].audio_author
  showPlayingImg.src = getFavFromLocal[i].audio_cover
  audioPlay.src = getFavFromLocal[i].audio_src
   document.title = `${getFavFromLocal[i].audio_title} / ${getFavFromLocal[i].audio_author}`

  document.querySelector('.showPlayingWrapper').classList.add('active')
 
    audioPlay.play()
    
  audioPlay.addEventListener('ended',function(){
    if (i < getFavFromLocal.length - 1) {
          i++
    showPlayingTitle.innerHTML = getFavFromLocal[i].audio_title 
    
    showPlayingAuthor.innerHTML = getFavFromLocal[i].audio_author
    
   showPlayingImg.src = getFavFromLocal[i].audio_cover
   
    audioPlay.src = getFavFromLocal[i].audio_src
    
    document.title = `${getFavFromLocal[i].audio_title} / ${getFavFromLocal[i].audio_author}`

    audioPlay.play()
    } else {
      i = 0 
      showPlayingTitle.innerHTML = getFavFromLocal[i].audio_title 
      
    showPlayingAuthor.innerHTML = getFavFromLocal[i].audio_author
    
   showPlayingImg.src = getFavFromLocal[i].audio_cover
   
    audioPlay.src = getFavFromLocal[i].audio_src
    document.title = `${getFavFromLocal[i].audio_title} / ${getFavFromLocal[i].audio_author}`

    audioPlay.play()
      
    }
  })
  
    
  }
  
playAll_btn.onclick = playAll









function playSta()
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









