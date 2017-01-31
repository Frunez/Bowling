$(document).ready(function() {
    var bowling = new Bowling();
    var scoreBoard = new ScoreBoard();
    var rollScore = 0;
    var scoreString = '0';
    var timeOut = 0
    var i = 0

    $('#roll').click(function() {
        $('#roll').hide();
        $('.ball').attr('class', 'rolling');
        rollScore = bowling.roll();
        scoreString = scoreBoard.getScore(rollScore);
        var num = i += 1;
        timeOut = setTimeout(function() {
            $('.rolling').attr('class', 'ball');
            $('#score').text(scoreString);
            $('#roll').show();
            $('#roll-' + num).text(scoreString);
        }, 5000);
    });
});
