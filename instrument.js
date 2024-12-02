let myAudio = new (window.AudioContext || window.webkitAudioContext)();

document.addEventListener('keydown', function(event) {
    let myNote = myAudio.createOscillator();

    if (event.key === 'a') {
        myNote.frequency.value = 440;
    } else if (event.key === 's') {
        myNote.frequency.value = 520;
    } else if (event.key === 'd') {
        myNote.frequency.value = 650;
    } else if (event.key === 'f') {
        myNote.frequency.value = 770;
    } else {
        return;
    }

    myNote.type = "sine";
    myNote.connect(myAudio.destination);
    myNote.start();
    setTimeout(function() {
        myNote.stop();
    }, 400);
})