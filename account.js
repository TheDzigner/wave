const InputUsername = 
document.querySelector('#InputUsername');

const image = document.querySelector('.image img')
const InputFile = 
document.querySelector('#InputFile')

const getUserNameFromLocalStorage = 
localStorage.getItem('username')

if (getUserNameFromLocalStorage == null) {
  InputUsername.value = 'Enter username'
}else {
   InputUsername.value = getUserNameFromLocalStorage
   
}

InputUsername.addEventListener('input',function(){
  localStorage.setItem('username',InputUsername.value)
})


InputFile.addEventListener('change',function(){

  if (this.files[0]) {
   const picture = new FileReader()
    picture.readAsDataURL(this.files[0])
    
 picture.addEventListener('load',function(event){
    localStorage.setItem('picture',event.target.result)
      ShowProfilePicture()
    })
  }
})
const getPictureFromStorage = 
localStorage.getItem('picture')
  
  function ShowProfilePicture()
  {
    if (getPictureFromStorage == null) {
     image.src = '/wave_logo/wave.png'
    } else {
      image.src = getPictureFromStorage
    }
  }
  ShowProfilePicture()
  

const librarySongs = 
document.querySelector('.content p')

const getLibraryFromStorage = 
JSON.parse(localStorage.getItem('myLibrary'))

if (getLibraryFromStorage == null) {
  librarySongs.innerHTML = '0 song'
} else {
  librarySongs.innerHTML = `${getLibraryFromStorage.length} song(s)`
}
