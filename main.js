// UI interactions
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

// http request-response handling (index.js로 옮기기)

// update seminar information (Ajax)
var seminarID = null;

// request QR code (Ajax)
// <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="" />
// 위에 형식 사용하기 (embed in html and update image src by js)

// Web Socket configuration
var stompClient = null;
const connectWebSockets = () => {
    var socket = new SockJS('/q-rank-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, (frame) => {
        setConnected(true);
        console.log('Connected: ' + frame);
        // 원래 path: `/seminar/${seminarID}`
        stompClient.subscribe(`/seminar/112`, (res) => {
            // parse JSON response
            // const type = JSON.parse(res.body).type;
            console.log(res);

            // update messages
            // if (data.type == "comment") {
                const ul = document.querySelector(".question-lists");
                const ol = document.createElement("ol");
                ol.textContent = res;
                ul.appendChild(ol);
            //}

            
            // update message likes
            // if (data.type == "likes") {}

            // update rankings
            // if (data.type == "ranking") {}

        });
    });
}

// Send message via web sockets
function sendNewQuestion() {
    $( ".send-question" ).click(function(){
        const seminarId = 112;
        const content = document.querySelector(".new-question").value;
        const message = JSON.stringify({'seminarId': seminarId, 'content': content});
        console.log("JSON: ", message);
        stompClient.send("/updates", {}, message);
    });
}

// Load when document is ready
$(function () {
    foldOrStretchRanking();
    showQRcode();
    connectWebSockets();
    sendNewQuestion();
});