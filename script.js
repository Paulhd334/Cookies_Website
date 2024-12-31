// Vérifier si l'utilisateur a déjà accepté ou refusé les cookies
if (!localStorage.getItem('cookies_accepted') && !localStorage.getItem('cookies_declined')) {
    document.getElementById('cookie-banner').style.display = 'block';
}

// Gérer le clic sur le bouton d'acceptation
document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies_accepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    // Charger Google Analytics après l'acceptation des cookies
    loadGoogleAnalytics();
});

// Gérer le clic sur le bouton de refus
document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies_declined', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
});

// Fonction pour charger Google Analytics après le consentement
function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LPWMV7F2YV';
    script.async = true;
    document.head.appendChild(script);

    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LPWMV7F2YV');
    };
}
