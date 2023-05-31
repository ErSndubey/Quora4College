

function updateElementClass() {
    var element = document.getElementById('my-element');
    if (window.innerWidth < 992) {
        element.classList.remove('col-7');
        element.classList.add('col');
    } else {
        element.classList.add('col-7');
        element.classList.remove('col');
    }
}

window.addEventListener('resize', updateElementClass);
window.addEventListener('load', updateElementClass);





let voteCount = 0;

function voteUp() {
  voteCount++;
  updateVoteCount();
}

function voteDown() {
  voteCount--;
  updateVoteCount();
}

function updateVoteCount() {
  document.getElementById("voteCount").innerText = voteCount;
}



  // share button starts


  function openShareMenu() {
    if (navigator.share) {
      navigator.share({
        title: 'Share Title',
        text: 'Share Text',
        url: 'https://quora4collage.vercel.app/'
      })
        .then(() => console.log('Share successful'))
        .catch((error) => console.log('Share error:', error));
    } else {
      console.log('Web Share API not supported');
      // Fallback behavior for platforms that do not support Web Share API
      // You can open a custom share dialog or perform other actions here
    }
  }
 

  // share button ends


  // Answer button popup




  ClassicEditor
  .create(document.querySelector('#editor'))
  .catch(error => {
      console.error(error);
  });

ClassicEditor
  .create(document.querySelector('#editor2'))
  .catch(error => {
      console.error(error);
  });

ClassicEditor
  .create(document.querySelector('#editor3'))
  .catch(error => {
      console.error(error);
  });

ClassicEditor
  .create(document.querySelector('#editor4'))
  .catch(error => {
      console.error(error);
  });