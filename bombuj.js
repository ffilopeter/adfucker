// Remove most of the ads from Bombuj.si
$(function() {
    adBlockNotDetected();
    SkrytReklamuCasino2();
    SkrytReklamuCasino3();
    SkrytReklamuPopUp2();

    let selectors = [
        //".movie_prazdne_h",
        "#reklamacasino2",
        "#reklamacasino2",
        "#ad_banner",
        "#reklaama-casino2",
        "#successMessage2",
    ];

    let selectorsString = selectors.join(", ");
    $(selectorsString).remove();
})();
