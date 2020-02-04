// btn click para refrescar y ver mas   
function Circlle(el) {
    $(el).circleProgress({fill: {color:'#0fbf61'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
  
        $(this).find('.progressbar__circleContainer').text(String(stepValue.toFixed(2)).substr(2) + '%');
    });
  }
  
  Circlle('.progressbar__round');