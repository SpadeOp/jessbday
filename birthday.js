document.addEventListener('DOMContentLoaded', () => {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    // Generate random confetti pieces
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.animationDelay = Math.random() * 2 + 's';
        confetti.appendChild(piece);
    }
});
