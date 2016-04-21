$(function(){
		$('input, textarea').on('keydown', function(){
			$(this).parent().removeClass("error-r");
			$(this).parent().removeClass("error-in");
      $(this).parent().removeClass("error-num");
		});

	$("input[type=button]").on('click', function(){
		var nameElm = $('.name');
  		var name = nameElm.find('input').val();
  		nameElm.removeClass('error-r');
  		nameElm.removeClass('error-min');
  		if(!name){
  			nameElm.addClass('error-r');
  		} else if(name.length < 2){
  			nameElm.addClass('error-min');
  		}

  		var emailElm = $(".email");
  		var email = emailElm.find('input').val();
  		emailElm.removeClass('error-r');
  		emailElm.removeClass('error-in');
  		if(!email){
  			emailElm.addClass('error-r');
  		}else if(!validateEmail(email)){
  			emailElm.addClass('error-in');
  		}

  		var phoneElm = $(".phone");
  		var phone = phoneElm.find('input').val();
  		phoneElm.removeClass('error-r');
      phoneElm.removeClass('error-num');
  		if(!phone){
  			phoneElm.addClass('error-r');
  		}else if(!/^[0-9]+$/.test(phone)){
        phoneElm.addClass('error-num');
      }

  		var messageElm = $(".message");
  		var message = messageElm.find('textarea').val();
  		messageElm.removeClass('error-r');
      messageElm.removeClass('error-min');
  		if(!message){
  			messageElm.addClass('error-r');
  		} else if(message.length < 10){
        messageElm.addClass('error-min');
      }

      var genderElm = $(".gender");
      var gender = genderElm.find('input:checked').val();
      genderElm.removeClass('error-r');
      if(!gender){
        genderElm.addClass('error-r');
      }
      var checkboxElm = $(".checkbox");
      var checkbox = checkboxElm.find('input:checked').val();
      checkboxElm.removeClass('error-r');
      if(!checkbox){
        checkboxElm.addClass('error-r');
      }
  	});
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}