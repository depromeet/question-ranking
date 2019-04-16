function changeRankingHeight() {
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
}

function mobileChangeRankingHeight(mobileStrechedHeight, mobileFoldedHeight) {
    $( ".mobile-circle-button" ).click(function(){
        $( ".Question-ranking" ).hide();
        $( ".Question-ranking-more" ).show();
        $( ".question-contents" ).css( "height", mobileStrechedHeight );
    });

    $( ".mobile-circle-button-2" ).click(function(){
        $( ".Question-ranking" ).show();
        $( ".Question-ranking-more" ).hide();
        $( ".question-contents" ).css( "height", mobileFoldedHeight );
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
    const contnetsHeight = $( ".question-contents" ).css( "height" );
    const mobileFoldedHeight = (parseInt(contnetsHeight.replace(/px/,""))-218)+"px";
    const mobileStrechedHeight = (parseInt(contnetsHeight.replace(/px/,""))-364)+"px";

    if ( Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 425 ) {
        $( ".question-contents" ).css( "height", mobileFoldedHeight );
    };
    
    changeRankingHeight();
    mobileChangeRankingHeight(mobileStrechedHeight, mobileFoldedHeight);
    showQRcode();
});