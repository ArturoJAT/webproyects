$(document).ready(function() {
  random();

  function random() {
    var quotes = ["You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.", "Defeat is a state of mind; no one is ever defeated until defeat has been accepted as a reality.", "The moment has no yesterday or tomorrow. It is not the result of thought and therefore has no time.", "Real living is living for others.", "Never waste energy on worries or negative thoughts, all problems are brought into existence -drop them.", "A goal is not always meant to be reached. It often serves simply as something to aim at.", "Those who are unaware they are walking in darkness will never seek the light.", "Because one does not want to be disturbed, to be made uncertain, he establishes a pattern of conduct, of thought, a pattern of relationship to man etc. Then he becomes a slave to the pattern and takes the pattern to be the real thing."];

    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $('.quoteText').text(randomQuote);
  }

  $(".getBtn").on("click", function() {
    random();
  });
   $(".tweetBtn").click(function(){
    window.open('https://twitter.com/intent/tweet?text=' + randomQuote,'_blank');
  });
});
