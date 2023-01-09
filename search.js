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
  }, {
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
    audio_title : 'Top Down On da Nawf', 
    audio_author : 'Migos', 
    audio_cover : '/wave_logo/wave.png', 
    audio_src : '/migos_mixe_audio/Migos - Top Down On Da NAWF .mp3', 
  }
 , 
  {
    audio_title : 'Avalanche', 
    audio_author : 'Migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Avalanche_(Lyrics)(256k).mp3', 
  }
 , 
  {
    audio_title : 'Handle My Business', 
    audio_author : 'Migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Handle_My_Business_(Official_Audio)(256k).mp3', 
  }
 , 
  {
    audio_title : 'Jane', 
    audio_author : 'Migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Jane_(Official_Audio)(256k).mp3', 
  }
 , 
  {
    audio_title : 'Menace', 
    audio_author : 'Migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src : '/migos_mixe_audio/Migos_-_Menace_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3', 
  }
 , 
  {
    audio_title : 'Moderne Day', 
    audio_author : 'Migos', 
    audio_cover : '/trending_albums_cover/Culture-3-cover.jpeg', 
    audio_src:'/migos_mixe_audio/Migos_-_Modern_Day_(Official_Video)(256k).mp3'
  }
 , {
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
 {
  audio_title : 'Rooster', 
  audio_author : 'Offset', 
  audio_cover : '/wave_logo/wave.png', 
  audio_src : '/offset_mix_audio/Rooster- Offset.mp3', 
  }
 ,  
  
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









