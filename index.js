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

const backgroundColor = function ChangeBackgroundColorYellowOrDark() {
    const $yellowButton = $('.yellow-button');
    const $darkButton = $('.dark-button');
    const $body = $('body');
    const $blank = $('#blank');
    const $initialBody = $('#initial-body');
    const $questionRankingText = $('.question-ranking-text');
    const $pleaseInputQuestions = $('.please-input-questions');
    const $modal = $('.modal');
    const $modalContents = $('.modal-content');
    const $starBesideNumber = $('span > div');

    $yellowButton.click(function() {
        $body.css({
            'background-color': '#f1f1f1'
        });
        $blank.css({
            'background-color': '#f1f1f1'
        });
        $initialBody.css({
            'background-color': '#feb519'
        })
        $questionRankingText.css({
            'color': 'rgba(0, 0, 0, 0.87)'
        })
        $pleaseInputQuestions.css({
            'color': 'rgba(0, 0, 0, 0.87)'
        })
        $modal.css({
            'background-color': 'rgba(0, 0, 0, 0.54)',
            'border': '1px solid #888'
        })
        $modalContents.css({
            'border': '1px solid #888'
        })
        $starBesideNumber.css({
            'color': 'rgba(0, 0, 0, 0.87)'
        })
    });
    $darkButton.click(function() {
        $body.css({
            'background-color': '#363a43'
        });
        $blank.css({
            'background-color': '#363a43'
        });
        $initialBody.css({
            'background-color': '#363a43'
        })
        $questionRankingText.css({
            'color': 'rgba(255, 255, 255, 0.87)'
        })
        $pleaseInputQuestions.css({
            'color': 'rgba(255, 255, 255, 0.87)'
        })
        $modal.css({
            'background-color': 'rgba(255, 255, 255, 0.72)',
        })
        $modalContents.css({
            'border': '0'
        })
        $starBesideNumber.css({
            'color': 'rgba(255, 255, 255, 0.87)'
        })
    });
}

const newElement = function createNewElement() {
    const $textarea = $('textarea');
    const $ul = $('ul');
    const $inputSend = $('.input-send');
    const $mobileInputSend = $('.mobile-input-send');
    const $beforeQuestionInput = $('.before-question-contents')

    $inputSend.click(function() {
        $ul.append('<div><ol></ol><span></span></div>');
        $('ol:last').append($textarea.val());
        $('span:last').append('<img src="./images/one_star.png" alt="Button to recommend questions"><div>0</div>')

        $textarea.val('')
        $beforeQuestionInput.hide();
    });

    $mobileInputSend.click(function() {
        $ul.append('<div><ol></ol><span></span></div>');
        $('ol:last').append($textarea.val());
        $('span:last').append('<img src="./images/one_star.png" alt="Button to recommend questions"><div>0</div>')

        $textarea.val('')
        $beforeQuestionInput.hide();
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
    backgroundColor();
    newElement();
});