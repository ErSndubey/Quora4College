

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




  // Get the upvote and downvote buttons and vote count element
  var upvoteButton = document.getElementById('upvote-button');
  var downvoteButton = document.getElementById('downvote-button');
  var voteCountElement = document.getElementById('vote-count');

  // Get the initial vote count
  var voteCount = parseInt(voteCountElement.textContent);

  // Add a click event listener to the upvote button
  upvoteButton.addEventListener('click', function() {
    // Increment the vote count
    voteCount++;
    // Update the vote count element
    voteCountElement.textContent = voteCount;
  });

  // Add a click event listener to the downvote button
  downvoteButton.addEventListener('click', function() {
    // Decrement the vote count
    voteCount--;
    // Update the vote count element
    voteCountElement.textContent = voteCount;
  });
