$(document).ready(function() {
    var bowling = new Bowling();
    var scoreBoard = new ScoreBoard();
    var rollScore = 0;
    var scoreString = '0';
    var timeOut = 0
    // function updateScore() {
    //   scoreBoard.frame.forEach(function(score) {
    //     return score;
    //   });
    // }

    $('#roll').click(function() {
        $('#roll').hide();
        $('.ball').attr('class', 'rolling');
        timeOut = setTimeout(function() {
            $('.rolling').attr('class', 'ball');
            rollScore = bowling.roll();
            scoreString = scoreBoard.getScore(rollScore);
            $('#score').text(scoreString);
            $('#roll').show();
        }, 5000);
    });
});
