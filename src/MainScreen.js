$(document).ready(function() {
    var bowling = new Bowling();
    var scoreBoard = new ScoreBoard();
    var rollScore = 0;
    var scoreString = '0';
    var timeOut = 0;
    var i = 0;
    var total = "0";
    var turn = "0";
    var gameTotal = 0;

    $('#roll').click(function() {
        $('#roll').hide();
        $('.ball').attr('class', 'rolling');
        rollScore = bowling.roll();
        scoreString = scoreBoard.getScore(rollScore);
        total = scoreBoard.turnTotal();
        gameTotal = scoreBoard.sumTotal(rollScore);
        var num = i += 1;
        timeOut = setTimeout(function() {
            $('.rolling').attr('class', 'ball');
            $('#score').text(scoreString);
            $('#roll').show();
            $('#roll-' + num).text(scoreString);
            $('#turn-score-' + turn).text(total);
            $('#total').text(gameTotal);
            turn = scoreBoard.currentTurn().toString();
        }, 5000);
    });
});
