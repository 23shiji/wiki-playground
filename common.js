$(document).ready(function(){
  function update_hash(){
    $(".p-display").css('display', 'none')
    if(window.location.hash){
      var selector = ".p-display"+window.location.hash
      $(selector).css('display', 'block')
    }
  }
  function play_audio(url){
    console.log(url)
    var audio = new Audio(url)
    audio.play();
  }
  $(window).on('hashchange', update_hash)
  update_hash()
  $('.play-audio').on('click', function(evt){
    var url_list = $(evt.target).attr('src-list').split("||")
    var url = url_list[Math.floor(url_list.length * Math.random())]
    play_audio(url)
  })
})