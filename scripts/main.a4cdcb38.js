function change_state(){var a=$(".question").attr("data-state");"prep"==a?(start_countdown(8),$(".action").html("to go to next question"),$(".question").attr("data-state","answer"),$("#state").html("Time left to answer:")):"answer"==a?(question_number++,next_question()):(question_number++,next_question())}function next_question(){start_countdown(2),$(".action").html("to answer the question"),$(".question").attr("data-state","prep"),$("#state").html("Time left to prepare:"),display_question(),$(".question").show(),$(".instructions").show(),$(".intro").hide()}function start_countdown(a){clearInterval(counter),$("#timer").html(prettify_number(a)+":00");var b=new Date;counter=setInterval(function(){var c=new Date,d="",e=Math.ceil(60*a-(c-b)/1e3),f=Math.floor(Math.abs(e)/60);e%=60,0>e?($("#timer").addClass("error"),d="-"):$("#timer").removeClass("error"),$("#timer").html(d+prettify_number(f)+":"+prettify_number(e))},1e3)}function prettify_number(a){var a=Math.abs(a);return 10>a?"0"+a:a}function display_question(){var a=questions[question_indices[question_number]];if(console.log(question_number),console.log(question_indices[question_number]),console.log(questions[question_indices[question_number]]),a){$(".text").html("("+(question_number+1)+") "+a.question);var b=source[a.source];$("#source").html('<a href="'+b.link+'">'+b.institution.full+", "+b.year+"</a>")}else $(".text").html("Congrats! You answered all the question. <br>Come back again!"),$("#source").html("")}function shuffle(a){for(var b,c,d=a.length;d;)c=Math.floor(Math.random()*d--),b=a[d],a[d]=a[c],a[c]=b;return a}var timer,counter,question_number=-1,question_indices;$(document).ready(function(){$(".question").hide(),question_indices=Array.apply(null,Array(questions.length)).map(function(a,b){return b}),shuffle(question_indices)}),$(document).keydown(function(a){13==a.keyCode?change_state():37==a.keyCode?(console.log("Left"),question_number--,next_question()):39==a.keyCode&&(console.log("Right"),question_number++,next_question())});