const messages = [
    "for their unwavering support, kindness, and excellence in friendship.",
    "for always being there with a smile and a helping hand.",
    "for their incredible ability to brighten anyone's day.",
    "for their outstanding dedication and loyalty.",
    "for being a beacon of positivity and joy.",
    "for their remarkable kindness and generosity.",
    "for their exceptional ability to make everyone feel special.",
    "for their unwavering commitment to friendship.",
    "for their inspiring kindness and compassion.",
    "for their extraordinary support and encouragement.",
    "for their amazing ability to bring out the best in others.",
    "for their heartfelt kindness and understanding.",
    "for their incredible patience and empathy.",
    "for their wonderful sense of humor and joy.",
    "for their steadfast loyalty and trustworthiness.",
    "for their boundless energy and enthusiasm.",
    "for their creative spirit and inspiring ideas.",
    "for their unwavering honesty and integrity.",
    "for their exceptional ability to listen and understand.",
    "for their remarkable strength and resilience."
];

function showCertificate() {
    const name = document.getElementById('nameInput').value || '[Name]';
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('recipientName').textContent = name;
    document.getElementById('introText').textContent = `This certificate is proudly presented to ${name}`;
    document.getElementById('supportText').textContent = randomMessage;
    document.getElementById('achievementText').textContent = `Your achievements and the joy you bring to those around you are truly commendable, ${name}.`;
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
        greeting.textContent = 'Good Morning!';
    } else if (hour < 18) {
        greeting.textContent =
