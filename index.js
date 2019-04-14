function foldOrStretchRanking() {
    $( ".Question-ranking-more" ).hide();
    $( ".fold-button" ).hide();
    
    $( ".pass-down-button" ).click(function(){
        $( ".Question-ranking" ).hide();
        $( ".Question-ranking-more" ).show();
        $( ".fold-button" ).show();
        $( ".question-contents" ).css( "height", "702px" );
    });
    
    $( ".pass-up-button" ).click(function(){
        $( ".Question-ranking" ).show();
        $( ".Question-ranking-more" ).hide();
        $( ".fold-button" ).hide();
        $( ".question-contents" ).css( "height", "848px" );
    });

    $( ".mobile-circle-button" ).click(function(){
        $( ".Question-ranking" ).hide();
        $( ".Question-ranking-more" ).show();
        $( ".question-contents" ).css( "height", "276px" );
    });

    $( ".mobile-circle-button-2" ).click(function(){
        $( ".Question-ranking" ).show();
        $( ".Question-ranking-more" ).hide();
        $( ".question-contents" ).css( "height", "422px" );
    });
}

function showQRcode() {
    $( ".box-5-title-3" ).click(function(){
        $( ".modal" ).show();
    });
    $( ".modal" ).click(function(){
        $( ".modal" ).hide();
    });
}

$(function () {
    foldOrStretchRanking();
    showQRcode();
});