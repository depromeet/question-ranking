const main = function changeRankingHeight(foldedHeight) {
    const $questionRanking = $('.Question-ranking');
    const $questionRankingMore = $('.Question-ranking-more');
    const $questionContents = $('.question-contents');
    const $foldButton = $('.fold-button');
    const $moreButton = $('.more-button');

    $questionRankingMore.hide();
    $foldButton.hide();
    
    $moreButton.click(function(){
        $questionRanking.hide();
        $questionRankingMore.show();
        $foldButton.show();
        $questionContents.css({
            'height': parseInt(Math.max(document.documentElement.clientHeight, window.innerHeight || 0)-parseInt($('.Question-ranking-more').css('height').replace('px', ''))-172)+"px"
        });
    });
    
    $foldButton.click(function(){
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

const showQRcode = function showOrHideQuickResponsiveCode() {
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
        $('span > div').removeClass('dark-version');
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
        $('span > div').addClass('dark-version');
    });
}

const newElement = function createNewElement() {
    const $textarea = $('textarea');
    const $ul = $('ul');
    const $inputSend = $('.input-send');
    const $mobileInputSend = $('.mobile-input-send');
    const $beforeQuestionInput = $('.before-question-contents')

    $inputSend.click(function() {
        if ($textarea.val() === '') {
            alert('질문을 입력해주세요.');
        } else {
            $ul.append('<div><ol></ol><span></span></div>');
            $('ol:last').append($textarea.val());
            $('span:last').append('<img src="./images/one_star.png" alt="Button to recommend questions"><div>0</div>')
            $('span:last > div').addClass($('span > div').attr('class'));

            $textarea.val('')
            $beforeQuestionInput.hide();
        }
    });

    $mobileInputSend.click(function() {
        if ($textarea.val() === '') {
            alert('질문을 입력해주세요.');
        } else {
            $ul.append('<div><ol></ol><span></span></div>');
            $('ol:last').append($textarea.val());
            $('span:last').append('<img src="./images/one_star.png" alt="Button to recommend questions"><div>0</div>')
            $('span:last > div').addClass($('span > div').attr('class'));

            $textarea.val('');
            $beforeQuestionInput.hide();
        }
    });
}

const moreOrFold = function questionRankingTopThreeTextMoreOrFold() {

    const currentHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    for (var i = 0; i < 4; i++) {
        if ($('.ranking-text-rank-'+i).text().length < 172) {
            $('.more-rank-'+i).hide();
        }
    }
    
    $('.fold-rank-'+1).hide();

    $('.more-rank-'+1).click(function() {
        $('.ranking-text-rank-'+1).removeClass('text-more');
        $('.more-rank-'+1).hide();
        $('.fold-rank-'+1).show();
        
        const $questionRankingMoreHeight = $('.Question-ranking-more').css('height').replace('px', '');
        const mainStrechedHeight = parseInt(currentHeight-parseInt($questionRankingMoreHeight)-172)+"px";
        $('.question-contents').css({
            'height': mainStrechedHeight,
        });
    });
    $('.fold-rank-'+1).click(function() {
        $('.ranking-text-rank-'+1).addClass('text-more');
        $('.more-rank-'+1).show();
        $('.fold-rank-'+1).hide();

        const $questionRankingMoreHeight = $('.Question-ranking-more').css('height').replace('px', '');
        const mainStrechedHeight = parseInt(currentHeight-parseInt($questionRankingMoreHeight)-172)+"px";
        $('.question-contents').css({
            'height': mainStrechedHeight,
        });
    });

    $('.fold-rank-'+2).hide();

    $('.more-rank-'+2).click(function() {
        $('.ranking-text-rank-'+2).removeClass('text-more');
        $('.more-rank-'+2).hide();
        $('.fold-rank-'+2).show();

        const $questionRankingMoreHeight = $('.Question-ranking-more').css('height').replace('px', '');
        const mainStrechedHeight = parseInt(currentHeight-parseInt($questionRankingMoreHeight)-172)+"px";
        $('.question-contents').css({
            'height': mainStrechedHeight,
        });
    });
    $('.fold-rank-'+2).click(function() {
        $('.ranking-text-rank-'+2).addClass('text-more');
        $('.more-rank-'+2).show();
        $('.fold-rank-'+2).hide();

        const $questionRankingMoreHeight = $('.Question-ranking-more').css('height').replace('px', '');
        const mainStrechedHeight = parseInt(currentHeight-parseInt($questionRankingMoreHeight)-172)+"px";
        $('.question-contents').css({
            'height': mainStrechedHeight,
        });
    });

    $('.fold-rank-'+3).hide();

    $('.more-rank-'+3).click(function() {
        $('.ranking-text-rank-'+3).removeClass('text-more');
        $('.more-rank-'+3).hide();
        $('.fold-rank-'+3).show();

        const $questionRankingMoreHeight = $('.Question-ranking-more').css('height').replace('px', '');
        const mainStrechedHeight = parseInt(currentHeight-parseInt($questionRankingMoreHeight)-172)+"px";
        $('.question-contents').css({
            'height': mainStrechedHeight,
        });
    });
    $('.fold-rank-'+3).click(function() {
        $('.ranking-text-rank-'+3).addClass('text-more');
        $('.more-rank-'+3).show();
        $('.fold-rank-'+3).hide();

        const $questionRankingMoreHeight = $('.Question-ranking-more').css('height').replace('px', '');
        const mainStrechedHeight = parseInt(currentHeight-parseInt($questionRankingMoreHeight)-172)+"px";
        $('.question-contents').css({
            'height': mainStrechedHeight,
        });
    });
}

const copyURL = function pressCopyButtonThenCopyClipboard() {
    $('.box-5-col-1-contents-2 > img').click(function() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('.url-address').text()).select();
        document.execCommand("copy");
        $temp.remove();

        $('.url-copy-button').hide();
        $('.url-copy-animation').show();
        setTimeout(function() {
            $('.url-copy-animation').hide();
            $('.url-copy-button').show();
        }, 4500);
    });
}

$(function () {
    const currentHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const currentWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    const mobileStrechedHeight = parseInt(currentHeight-256)+"px";
    const mobileFoldedHeight = parseInt(currentHeight-110)+"px";
    
    const $questionRankingMoreHeight = $('.Question-ranking-more').css('height').replace('px', '');
    const mainStrechedHeight = parseInt(currentHeight-parseInt($questionRankingMoreHeight)-172)+"px";
    const mainFoldedHeight = parseInt(currentHeight-232)+"px";
    // var mainStrechedHeight = parseInt(currentHeight-378)+"px";

    if ( currentWidth <= 425 ) {
        $( ".question-contents" ).css( "height", mobileFoldedHeight );
    } else {
        $( ".question-contents" ).css( "height", mainFoldedHeight );
    }
    
    main(mainFoldedHeight, mainStrechedHeight);
    mobile(mobileFoldedHeight, mobileStrechedHeight);
    showQRcode();
    backgroundColor();
    newElement();
    moreOrFold();
    copyURL();
});