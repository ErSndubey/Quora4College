

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

  $( document ).ready(function() {
    //custom button for homepage
       $( ".share-btn" ).click(function(e) {
          $('.networks-5').not($(this).next( ".networks-5" )).each(function(){
             $(this).removeClass("active");
         });
       
              $(this).next( ".networks-5" ).toggleClass( "active" );
      });   
  });

  // share button ends