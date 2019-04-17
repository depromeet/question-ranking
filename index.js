const main = function changeRankingHeight(foldedHeight, strechedHeight) {
    const $questionRanking = $('.Question-ranking');
    const $questionRankingMore = $('.Question-ranking-more');
    const $questionContents = $('.question-contents');
    const $foldButton = $('.fold-button');
    const $passDownButton = $('.pass-down-button');
    const $passUpButton = $('.pass-up-button');

    $questionRankingMore.hide();
    $foldButton.hide();
    
    $passDownButton.click(function(){
        $questionRanking.hide();
        $questionRankingMore.show();
        $foldButton.show();
        $questionContents.css({
            'height': strechedHeight,
        });
    });
    
    $passUpButton.click(function(){
        $questionRanking.show();
        $questionRankingMore.hide();
        $foldButton.hide();
        $questionContents.css({
            'height': foldedHeight,
        });
    });
}

const mobile = function mobileChangeRankingHeight(foldedHeight, strechedHeight) {
    const $questionRanking = $('.Question-ranking');
    const $questionRankingMore = $('.Question-ranking-more');
    const $questionContents = $('.question-contents');
    const $circleButton = $('.mobile-circle-button');
    const $secondCircleButton = $('.mobile-circle-button-2')

    $circleButton.click(function() {
        $questionRanking.hide();
        $questionRankingMore.show();
        $questionContents.css({
            'height': strechedHeight,
        });
    });

    $secondCircleButton.click(function() {
        $questionRanking.show();
        $questionRankingMore.hide();
        $questionContents.css({
            'height': foldedHeight,
        });
    });
}

const QRcode = function showOrHideQuickResponsiveCode() {
    const $quickResponsiveCode = $('.box-5-title-3');
    const $modal = $('.modal');

    $quickResponsiveCode.click(function() {
        $modal.show();
    });
    $modal.click(function() {
        $modal.hide();
    });
}

$(function () {
    const currentHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const currentWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const mobileFoldedHeight = parseInt(currentHeight-110)+"px";
    const mobileStrechedHeight = parseInt(currentHeight-256)+"px";
    const mainFoldedHeight = parseInt(currentHeight-232)+"px";
    const mainStrechedHeight = parseInt(currentHeight-378)+"px";

    if ( currentWidth < 425 ) {
        $( ".question-contents" ).css( "height", mobileFoldedHeight );
    } else {
        $( ".question-contents" ).css( "height", mainFoldedHeight );
    }
    
    main(mainFoldedHeight, mainStrechedHeight);
    mobile(mobileFoldedHeight, mobileStrechedHeight);
    QRcode();
});