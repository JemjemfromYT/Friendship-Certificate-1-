function showCertificate() {
    const name = document.getElementById('nameInput').value || 'Inchet Hannah :)';
    document.getElementById('recipientName').textContent = name;
    document.getElementById('certificate').style.display = 'block';
    document.getElementById('backgroundMusic').play();
}

function shareCertificate() {
    const name = document.getElementById('recipientName').textContent;
    const shareText = `Check out this special certificate awarded to ${name} for excellence in friendship!`;
    const shareUrl = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: 'Special Certificate',
            text: shareText,
            url: shareUrl,
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Sharing is not supported on this browser.');
    }
}

window.onload = function() {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.textContent = 'Good Morning, Inchet!';
    } else if (hour < 18) {
        greeting.textContent = 'Good Afternoon, Inchet!';
    } else {
        greeting.textContent = 'Good Evening, Inchet!';
    }
}
