function createParagraph(){
    var wordOne = document.getElementById('word1').value;
    var wordTwo = document.getElementById('word2').value;
    var wordThree = document.getElementById('word3').value;
    var wordFour = document.getElementById('word4').value;
    var wordFive = document.getElementById('word5').value;
    var wordSix = document.getElementById('word6').value;
    var wordSeven = document.getElementById('word7').value;
    var wordEight = document.getElementById('word8').value;


/*<p>“I am the "word1" of my sword.
"word2" is my body, and fire is my "word3".
"I have created over a thousand "word4".
"Unknown to death. Nor known to "word5".
"Have withstood "word6" to create many weapons.
"Yet, those hands will never hold "word7".
"So as I "word8", ‘Unlimited Blade Works’.” – Archer</p>*/





var paragragh = " I am the " + wordOne + " of my sword." + wordTwo + " is my body, and fire is my " + wordThree + ". I have created over a thousand " + wordFour + ". Unknown to death. Nor known to " + wordFive + ". Have withstood" + wordSix + " to create many weapons. Yet, those hands will never hold " + wordSeven + ". So as I " + wordEight + ", 'Unlimited Blade Works'.- Archer" 


document.getElementById('anwser').innerHTML= paragraph;
}