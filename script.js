window.onload = function() {
    const bandage = document.getElementById('bandage');
    const message = document.getElementById('message');
    const bleeding = document.getElementById('bleeding');
    const backgroundMusic = document.getElementById('backgroundMusic');

    let isDragging = false;
    
    bandage.addEventListener('mousedown', function(e) {
        isDragging = true;
        backgroundMusic.play();
        message.style.visibility = 'visible';
        bleeding.style.visibility = 'visible';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const rect = bandage.parentElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            bandage.style.left = `${x - bandage.offsetWidth / 2}px`;
            bandage.style.top = `${y - bandage.offsetHeight / 2}px`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        backgroundMusic.pause();
    });

    window.addEventListener('beforeunload', function() {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    });
};