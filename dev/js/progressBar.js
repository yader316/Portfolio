$('.progressbar__round').circleProgress({fill: {color:'#0fbf61'}})
.on('circle-animation-progress', function(event, progress, stepValue){

    $(this).find('.progressbar__circleContainer').text(String(stepValue.toFixed(2)).substr(2) + '%');
});