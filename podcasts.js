// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const voteForm = document.querySelector('.poll form');
    voteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your vote!');
    });

    const subscribeForm = document.querySelector('#subscribe form');
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing!');
    });
});
