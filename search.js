const searchInput = 
document.querySelector('#SearchInput')


const container = 
document.querySelector('.container')

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
  audio_src : '/migos_mixe_audio/- Quavo & Takeoff Ft. Gucci Mane - Us vs. Them (Official Video) (128 kbps).mp3', 
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


async function showResults() {
  
  let InnerBoxes = ''
  
  for (var i = 0; i < audio.length; i++) {
    let newBoxes = `
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
    InnerBoxes += newBoxes
  }
 container.innerHTML = InnerBoxes 
 

 
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
 
 
 
 
  const boxes = Array.from(document.querySelectorAll('.card__'))
  boxes.forEach(box => {
   box.addEventListener('click',function(e){
     playNext(boxes.indexOf(this))
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
  playAudio(audio[boxes.indexOf(this)].audio_title, audio[boxes.indexOf(this)].audio_author, audio[boxes.indexOf(this)].audio_src, audio[boxes.indexOf(this)].audio_cover, audio[boxes.indexOf(this)].audio_title, audio[boxes.indexOf(this)].audio_author)
   
   })
})

  
 searchInput.addEventListener('keyup', () => {
   if (searchInput.value.length == 0) {
    showResults()
   }
 const searchValue = searchInput.value;
 for (const box of boxes) {
     if (box.dataset.id.toLowerCase().includes(searchValue)) {
       box.classList.remove('hide')
    } else {
      box.classList.add('hide')
    }
   }
 });

  
}
showResults()




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
  document.title = `${title_title} / ${author_author}`
  
   audioPlay.play();

  document.querySelector('.showPlayingWrapper').classList.add('active')
  
 
  playState.innerHTML = 'pause_circle'
}




}


function playNext(index)
{
  audioPlay.addEventListener('ended',function(){
    if (index < audio.length - 1) {
          index++
    showPlayingTitle.innerHTML = audio[index].audio_title 
    showPlayingAuthor.innerHTML = audio[index].audio_author
   showPlayingImg.src = audio[index].audio_cover
    audioPlay.src = audio[index].audio_src
    audioPlay.play()
    } else {
      index = 0 
      showPlayingTitle.innerHTML = audio[index].audio_title 
    showPlayingAuthor.innerHTML = audio[index].audio_author
   showPlayingImg.src = audio[index].audio_cover
    audioPlay.src = audio[index].audio_src
    audioPlay.play()
      
    }
  })
  
  
}


function playSta()
{
  if (audioPlay.paused) {
    audioPlay.play()
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









