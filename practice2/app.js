$(document).ready(()=>{
  $(".btn").on('click',()=>{
    if ($("textarea").val()) {
      $("textarea").select()
      document.execCommand('copy')
      $('.message').text('copied')
      $('.message').css('transform','translate3d(173px, -37px, 10px)')
      $('.message').css('display','block')
    }else {
      $('.message').text('write somthing to copy')
      $('.message').css('display','block')
      $('.message').css('transform','translate3d(95px, -37px, 10px)')
    }
  })
})