
//for quizz
function submitAnswers(){
    var total = 5;
    var score = 0;
    
    //get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
    //validation
    
    for(i = 1; i <= total; i ++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('You missed question ' + i);
            return false;
        }
    }
    
    //set correct answers
    var answers = ["b","a","d","b","d"];
    
    //check answers
    for(i = 1; i <= total; i ++){
        if(eval('q'+i) == answers[i - 1]){
            score++;
        }
    }

    //display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    
    return false;
    
}


//for gallery
$(document).ready(function(){
    $('.style-for-galerynav a').on('click', function(){
        //current class assigmant//
        $('.style-for-galerynav li.current').removeClass('current');
        $(this).parent().addClass('current');
        
        //set heading text
        $('h1#heading').text($(this).text());
        
        //get filter link tezt
        var category = $(this).text().toLowerCase().replace(' ','-');
        
        //remove hidden class id 'all-projects' is selected
        if(category == "all-projects") {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        //stop link bahaviour
        return false;
    });
    
    //mouse enter
    $('ul#gallery li').on('mouseenter',function(){
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        //validation
        if(desc == null){
            desc = 'Click To Enlarge';
        }
        
        if(title == null){
            title='';
        }
        
        // Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay');
        
        //add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        //fade in and overlay
        overlay.fadeIn(800);
    });
    
    //mouseleave overlay
    $('ul#gallery li').on('mouseleave',function(){
       // Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay'); 
        
        //fade in out overlay
        overlay.fadeOut(800);
    });
});

//for tictac
    $(document).ready(function(){
    var x = "x";
    var o = "o";   
    var turns = 0;
    
    //Spot vars
    var spot1 = $('#spot1');
    var spot2 = $('#spot2');
    var spot3 = $('#spot3');
    var spot4 = $('#spot4');
    var spot5 = $('#spot5');
    var spot6 = $('#spot6');
    var spot7 = $('#spot7');
    var spot8 = $('#spot8');
    var spot9 = $('#spot9');
    
    $('#board li').on('click', function(){
       if((spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o'))||
          (spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o'))||
          (spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o'))||
          (spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o'))||
          (spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o'))||
          (spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o'))||
          (spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o'))||
          (spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o'))
         ){
           alert('Winer: O');
           $('#board li').text('+');
           $('#board li').removeClass('disable');
           $('#board li').removeClass('o');
           $('#board li').removeClass('x');
       } else if((spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o'))||
          (spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x'))||
          (spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x'))||
          (spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x'))||
          (spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x'))||
          (spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x'))||
          (spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x'))||
          (spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x'))
         ){
           alert('Winer: X');
           $('#board li').text('+');
           $('#board li').removeClass('disable');
           $('#board li').removeClass('o');
           $('#board li').removeClass('x');
       } else if(turns == 9){
           alert('Tie Game');
           $('#board li').text('+');
           $('#board li').removeClass('disable');
           $('#board li').removeClass('o');
           $('#board li').removeClass('x');
           turns = 0;
       } else if($(this).hasClass('disable')){
           alert('This spot is already filled')
       } else if(turns%2 == 0){
           turns++;
           $(this).text(o);
           $(this).addClass('disable o');
            if ((spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o'))||
                (spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o'))||
                (spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o'))||
                (spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o'))||
                (spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o'))||
                (spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o'))||
                (spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o'))||
                (spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o'))
             ){
                    alert('Winner: O');
                    turns = 0;
                  }
              } else {
                  turns++;
                  $(this).text(x);
                  $(this).addClass('disable x');
                    if ((spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x'))||
                        (spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x'))||
                        (spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x'))||
                        (spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x'))||
                        (spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x'))||
                        (spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x'))||
                        (spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x'))||
                        (spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x'))
                     ){
                alert('Winner: X');
                turns = 0;
             }
       }
    });
                  
            //reset Handler
        $('#reset2').on('click', function(){
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
        });
}); 








































