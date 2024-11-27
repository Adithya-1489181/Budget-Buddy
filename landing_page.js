function showMainContent() {
    document.getElementById('landingScreen').classList.add('slide-up');
    setTimeout(() => {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('navbar').style.backgroundColor = '#444';
        document.body.style.overflow = 'auto';
    }, 1000);
}