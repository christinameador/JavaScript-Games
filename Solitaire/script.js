$(document).ready(function() {


  


	newGame();
	noHand();
	


	
// alert("work in progress... :)\n\nMy First Project! =D\nUses a lot of jQuery, added touchpunch for mobile compatability. I've tested on a few devices but don't have a tablet to test on. let me know if everything is scaling well on your device.\n\n\nKnown glitches:\n\n	 Sometimes only the bottom right symbol on a card will seem draggable but it should go away, try just clicking higher on ther card? :/\n\n           If you're fast you can take a 2 off an ace and as its falling back on top of the ace, move that ace to another spot\n");


$("#deckSlot").on("click", function (){

  // 	$("#contdck").empty();

	
	if ($("#draw1").hasClass("press")) {
		seeHand();
		if(deck.length === 0) {
			deck = deck.concat(hand);
			hand = [];
			deck.reverse();
			oneDraw();
//			fullDeck();


			
//			console.log(deck.length);
		} else if(deck.length >= 1) {
			oneDraw();
		}
		if (deck.length == 1) {
//			noDeck();
			
		}
	}else
	if ($("#draw3").hasClass("press")) {
		seeHand();
	if(deck.length === 0) {
		deck = deck.concat(hand);
		hand = [];
		deck.reverse();
		threeDraw();
//		fullDeck();


		
//		console.log(deck.length);
	} else if(deck.length < 3) {
//		noDeck();
		threeDraw();
	} 
	else if(deck.length > 3) {
		threeDraw();
//		fullDeck();
	}else {
//		noDeck();
		threeDraw();
	}
	}
	
	$(this).addClass("press");
  setTimeout(function() {
	$("#deckSlot").removeClass("press");
  }, 50);

	click();
//  shik();
  
//	seeDeck();
});




//
//
//menu box
//
$("#dots").on("click", function(){
    click();
    
		$(this).addClass("press");
		setTimeout(function() {
			$("#dots").removeClass("press");

		}, 500);
		
	if ($("#popSett").css("display") === "none") {
		$("#popSett").show();
		$("#popSett").animate({"width": "70vw", "height": "80vh"}, 500);}else
	if ($("#popSett").css("display") != "none") {
		$("#popSett").animate({"width": "0vw", "height": "0vh"}, 500);
			setTimeout(function() {
	$("#popSett").hide();
}, 499);
		
	}

	
});

$("#close").on("click", function(){
    click();
	$("#popSett").animate({"width": "0vw", "height": "0vh"}, 500);

	setTimeout(function() {
	$("#popSett").hide();
}, 499);
});

$(".new").on("click", function(){
    $("#winner").hide();
    click();
	$(this).addClass("press");
setTimeout(function() {
	$(".new").removeClass("press");

		setTimeout(function() {
		$("#popSett").hide();
	}, 250);
	$(".hand").empty();
	$("#popSett").animate({"width": "0vw", "height": "0vh"}, 500);
	newGame();
}, 150);
		
		
		
	});
  
$(".colourBox").children().on("click", function () {
    click();
        let theColor = $(this).css("background-color");
        	$("#playArea").css("background-color", theColor);
    });

//shortened above	
// $(".redz").on("click", function () {
// 	$("#playArea").css("background-color", "red");
// });
// $(".blue").on("click", function () {
// 	$("#playArea").css("background-color", "blue");
// });
// $(".green").on("click", function () {
// 	$("#playArea").css("background-color", "green");
// });
// $(".yellow").on("click", function () {
// 	$("#playArea").css("background-color", "yellow");
// });
// $(".purple").on("click", function () {
// 	$("#playArea").css("background-color", "purple");
// });
// $(".orange").on("click", function () {
// 	$("#playArea").css("background-color", "orange");
// });
// $(".pink").on("click", function () {
// 	$("#playArea").css("background-color", "pink");
// });
// $(".goldenrod").on("click", function () {
// 	$("#playArea").css("background-color", "goldenrod");
// });
// $(".indigo").on("click", function () {
// 	$("#playArea").css("background-color", "indigo");
// });
// $(".darkgray").on("click", function () {

// 	$("#playArea").css("background-color", "darkgray");
// });

$("#draw1").on("click", function(){
    click();
	if ($(this).hasClass("press") !== true) {

  }
	$(this).addClass("press");

	$("#draw3").removeClass("press");
});

$("#draw3").on("click", function(){
    click();
	if ($(this).hasClass("press") !== true) {

  }
	$(this).addClass("press");
	$("#draw1").removeClass("press");
});


});







var card = {};
let value = "";
let suit = "";

var winz = 0;

var values = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
var bsuits = ["♠", "♣"];
var rsuits = ["♥", "♦"];
var allsuits = ["♠", "♣", "♥", "♦"];
var colors = ["black", "red" , "black"];

var deck = [];
var hand = [];
var hand1 = hand[0];
var hand2 = hand[1];
var hand3 = hand[2];

var suitD = [];
var suitC = [];
var suitB = [];
var suitA = [];

var donez = ["suitA","suitB","suitC","suitD"];

var playCols = [[],[],[],[],[],[],[]];

var first = playCols[0];
var firstu = [];
var second = playCols[1];
var secondu = [];
var third = playCols[2];
var thirdu = [];
var fourth = playCols[3];
var fourthu = [];
var fifth = playCols[4];
var fifthu = [];
var sixth = playCols[5];
var sixthu = [];
var seventh = playCols[6];
var seventhu = [];

var inPlay = ["first","second","third","fourth","fifth","sixth","seventh"];
var inPlayU = ["firstu","secondu","thirdu","fourthu","fifthu","sixthu","seventhu"];

var spareIndex = [];

var p = 0;



function newGame() {
  
	deck = [];
	suitD = [];
	suitC = [];
	suitB = [];
	suitA = [];
	first = [];
	second = [];
	third = [];
	fourth = [];
	fifth = [];
	sixth = [];
	seventh = [];
	hand = [];
	$(".play").empty();
	
  for( let i = 0; i < bsuits.length; i++ ) {
	for( let j = 0; j < values.length; j++ ) {
	  
	  var card ={};
	  card.suit = bsuits[i];
	  card.value = values[j];
	  card.claz = `card , hand1 , ui-widget-content , black , ${values[j]}`;
	  card.color = "black";
	  card.face = false;
	  card.down = `<div class="cardDown"></div>`;
	  card.up = `<div class="card , up , ${bsuits[i]} , ${values[j]} , drag , black , ui-widget-content">
					<div class="toplft">${bsuits[i] + values[j]}</div>
					<div class="midz">${bsuits[i] + values[j]}</div>
					<div class="btmrt">${bsuits[i] + values[j]}</div>
				</div>`;
	  
	  deck.push(card);
	}	
  }
  for( let k = 0; k < rsuits.length; k++ ) {
	for( let l = 0; l < values.length; l++ ) {
	  
	  var card = [];
	  card.suit = rsuits[k];
	  card.value = values[l];
	  card.claz = `card , hand1 , ui-widget-content , red , ${values[l]}`;
	  card.color = "red";
	  card.face = false;
	  card.down = `<div class="cardDown"></div>`;
	  card.up = `<div class="card , up , ${rsuits[k]} , ${values[l]} , drag , red">
					<div class="toplft">${rsuits[k] + values[l]}</div>
					<div class="midz">${rsuits[k] + values[l]}</div>
					<div class="btmrt">${rsuits[k] + values[l]}</div>
				</div>`;
	  
	  deck.push(card);
	}	
  }
  
  
  
  noHand();
  clearComplete();
//   fullDeck();
  shuffle(deck);
  deal();
  rules();
  downFlip();
  seeDeck();
  for (let x = 1; x < 99; x++) {
	let y = x * -0.05;
	$(`#contdck :nth-child(${x})`).css("top", `${y}em`);
}
  
    $(".wincount").empty();
    $(".wincount").append("Games won:   " + winz);	
//  console.log( "Created new deck of ", deck.length, " cards." );
//  console.log(deck[0].value + " of " + deck[0].suit);
//  console.log( "Hand of ", hand.length, " cards." );
  //console.log(seventh.value.length);
  
}
//
//shuffle function copied from ..i forgot 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }

  return array;
}

function deal() {

//$("#suitA").append(deck[0].up);
	
	
//	
	//1
		firstu.unshift(deck.shift());
		$("#first").append(firstu[0].up);
		second.unshift(deck.shift());
		$("#second").append(second[0].down);
		$("#second:last-child").addClass("second");
		third.unshift(deck.shift());
		$("#third").append(third[0].down);
		$("#third:last-child").addClass("third");
		fourth.unshift(deck.shift());
		$("#fourth").append(fourth[0].down);
		$("#fourth:last-child").addClass("fourth");
		fifth.unshift(deck.shift());
		$("#fifth").append(fifth[0].down);
		$("#fifth:last-child").addClass("fifth");
		sixth.unshift(deck.shift());
		$("#sixth").append(sixth[0].down);
		$("#sixth:last-child").addClass("sixth");
		seventh.unshift(deck.shift());
		$("#seventh").append(seventh[0].down)
		$("#seventh:last-child").addClass("seventh");
		
		//2
		secondu.unshift(deck.shift());
		$("#second").append(secondu[0].up);
		third.unshift(deck.shift());
		$("#third").append(third[0].down);
		$("#third:last-child").addClass("third");
		fourth.unshift(deck.shift());
		$("#fourth").append(fourth[0].down);
		$("#fourth:last-child").addClass("fourth");
		fifth.unshift(deck.shift());
		$("#fifth").append(fifth[0].down);
		$("#fifth:last-child").addClass("fifth");
		sixth.unshift(deck.shift());
		$("#sixth").append(sixth[0].down);
		$("#sixth:last-child").addClass("sixth");
		seventh.unshift(deck.shift());
		$("#seventh").append(seventh[0].down)
		$("#seventh:last-child").addClass("seventh");
		//3
		thirdu.unshift(deck.shift());
		$("#third").append(thirdu[0].up);
		fourth.unshift(deck.shift());
		$("#fourth").append(fourth[0].down);
		$("#fourth:last-child").addClass("fourth");
		fifth.unshift(deck.shift());
		$("#fifth").append(fifth[0].down);
		$("#fifth:last-child").addClass("fifth");
		sixth.unshift(deck.shift());
		$("#sixth").append(sixth[0].down);
		$("#sixth:last-child").addClass("sixth");
		seventh.unshift(deck.shift());
		$("#seventh").append(seventh[0].down)
		$("#seventh:last-child").addClass("seventh");
		//4
		fourthu.unshift(deck.shift());
		$("#fourth").append(fourthu[0].up);
		fifth.unshift(deck.shift());
		$("#fifth").append(fifth[0].down);
		$("#fifth:last-child").addClass("fifth");
		sixth.unshift(deck.shift());
		$("#sixth").append(sixth[0].down);
		$("#sixth:last-child").addClass("sixth");
		seventh.unshift(deck.shift());
		$("#seventh").append(seventh[0].down)
		$("#seventh:last-child").addClass("seventh");
		//5
		fifthu.unshift(deck.shift());
		$("#fifth").append(fifthu[0].up);
		$("#fifth:last-child").addClass("fifth");
		sixth.unshift(deck.shift());
		$("#sixth").append(sixth[0].down);
		$("#sixth:last-child").addClass("sixth");
		seventh.unshift(deck.shift());
		$("#seventh").append(seventh[0].down)
		$("#seventh:last-child").addClass("seventh");
		//6
		sixthu.unshift(deck.shift());
		$("#sixth").append(sixthu[0].up);
		seventh.unshift(deck.shift());
		$("#seventh").append(seventh[0].down)
		//7
		seventhu.unshift(deck.shift());
		$("#seventh").append(seventhu[0].up)
}



function downFlip() {
	//Make facedown cards flip
$(".cardDown").on("click", function() {
//	if ($(this).is("#first div:last-child")) {
//		firstu.unshift(first.shift());
//		$(this).replaceWith(firstu[0].up);}else
	if ($(this).is("#second div:last-child")) {
		secondu.unshift(second.shift());
		$(this).replaceWith(secondu[0].up);}else
	if ($(this).is("#third div:last-child")) {
		thirdu.unshift(third.shift());
		$(this).replaceWith(thirdu[0].up);}else
	if ($(this).is("#fourth div:last-child")) {
		fourthu.unshift(fourth.shift());
		$(this).replaceWith(fourthu[0].up);}else
	if ($(this).is("#fifth div:last-child")) {
		fifthu.unshift(fifth.shift());
		$(this).replaceWith(fifthu[0].up);}else
	if ($(this).is("#sixth div:last-child")) {
		sixthu.unshift(sixth.shift());
		$(this).replaceWith(sixthu[0].up);}else
	if ($(this).is("#seventh div:last-child")) {
		seventhu.unshift(seventh.shift());
		$(this).replaceWith(seventhu[0].up);}
		
	rules();
click();
  
});
};

////////////Audio
//
//

function shik(url){
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = "http://www.soundjay.com/button/sounds/button-16.mp3";
  audio.autoplay = true;
  audio.onended = function(){
	audio.remove(); //Remove when played.
  };
  document.body.appendChild(audio);
}

function click(url){
  var audio = document.createElement('audio');
  audio.style.display = "none";
  audio.src = 'http://soundbible.com/grab.php?id=772&type=wav';
  audio.autoplay = true;
  audio.onended = function(){
	audio.remove(); //Remove when played.
  };
  document.body.appendChild(audio);
}

//
//
  //
  //RULES
  //
  


function rules() {
	
	// 	$("#contdck").empty();


	
	var vwid = $(document).width() ;
 
  var jmod = vwid / 1;
	
	var vmod = vwid / jmod ;
  var fmod = vwid / 17;
  var sfmod = fmod / 2.5;
	
	
	
	// console.log(vwid);
	// console.log(vmod);
	// console.log(fmod);

  // if ($(innerWidth) > 690) {
  //   $("#inPlay").css("width", "666px");
  // }

  
	$(".midz ").css("transform", `translateY(1em)`);
	$(".midz ").css("font-size", fmod);
	$(".toplft ").css("font-size", sfmod);
	$(".btmrt ").css("font-size", sfmod);

//Make cards draggable
$( function() {

	$( `.drag`).draggable( {
		containment: '#playarea',
		cursor: 'move',
//		snap: '#suitA , #suitB , #suitC , #suitD , .card , .cardArea',
		revert: "invalid",
		stack: ".card",
		start: function() {
shik();
			if ($(this).parents().hasClass("inPlay") || $(this).parents().hasClass("complete")) {
			$(this).parent().droppable("enable");}

			if ($(this).parent().hasClass("hand3") && hand.length > 1) {

				$("#handpreview").append(hand[1].up);
			}
			rules();
	  
	  


// 			$(this).css("z-index", 50);
// 			for (let x = 0; x < inPlay.length; x++) {
// 				if ($(this).parents().hasClass(inPlay[x])) {console.log("Dragging from column " + inPlay[x] + " !");}
// 			}
		},
		stop: function() {
		shik();

			if (hand.length > 0) {
		$("#handpreview").empty();
		rules();
		   
	  }
	  

		}
	});
	
});
//Slots accept kings
$("#first , #second , #third , #fourth , #fifth , #sixth , #seventh").droppable({
	accept: function(w) {
		if(w.hasClass("K") && $(this).children().length == 0) {
			return true;
		}
	},
	drop: function(e, ui) {
		
		if (ui.draggable.parents().hasClass("hand1")) {
					$("#hand2 :last-child").addClass("drag");
//					rules();
					hand.shift();
//					console.log("Dragged from hand1!");
				}
		if (ui.draggable.parents().hasClass("hand2")) {
					$("#hand3 :last-child").addClass("drag");
//					rules();
					hand.shift();
//					console.log("Dragged from hand2!");
				}
		if (ui.draggable.parents().hasClass("hand3")) {
			
		if ($("#draw1").hasClass("press")) {
			if (ui.draggable.parents().hasClass("hand3")) {
					hand.shift();
						if (hand.length > 0) {
							$("#hand3").empty();
							$("#hand3").append(hand[0].up);rules();}
					
					

	
				}
		}else
		if ($("#draw3").hasClass("press")) {
			if (ui.draggable.parents().hasClass("hand3")) {
					hand.shift();
//					console.log("Dragged from hand3!");
						if (hand.length > 0) {
							$("#hand1").empty();
							$("#hand1").append(hand[0].up);}else
						if (hand.length > 1) {
							$(".hand2").empty();
							$(".hand2").append(hand[1].up);
							$(".hand2 :last-child").removeClass("drag");}else
						if (hand.length > 2) {
							$(".hand3").empty();
							$(".hand3").append(hand[2].up);
							$(".hand3 :last-child").removeClass("drag");}
					
					
					
	
				}
		}
						
					
	
				}
		ui.draggable.detach().css({top: 0,left: 0}).appendTo($(this));
//		$(e.target).droppable("disable");
rules();
	}
});

//Make cards accept cards of lower value

$(".play :last-child").droppable({
	accept: function(w) {
	
	if ($("#inPlay").has(this)) {	
		for (let x = 0; x <= 1; x++) {
			for (let y = 0; y < values.length; y++) {
				
					if($(this).children().length == 3 && w.hasClass(values[y]) && w.hasClass(colors[x]) && $(this).hasClass(values[y+1]) && $(this).hasClass(colors[x+1])) {
						return true;
					}
			}
		}
	}
	
	//
	//Shortened above
	//
	//
// 		if ($("#inPlay").has(this)) {
// 			if(w.hasClass("A") && w.hasClass("red") && $(this).hasClass("2") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("A") && w.hasClass("black") && $(this).hasClass("2") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("2") && w.hasClass("red") && $(this).hasClass("3") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("2") && w.hasClass("black") && $(this).hasClass("3") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("3") && w.hasClass("red") && $(this).hasClass("4") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("3") && w.hasClass("black") && $(this).hasClass("4") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("4") && w.hasClass("red") && $(this).hasClass("5") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("4") && w.hasClass("black") && $(this).hasClass("5") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("5") && w.hasClass("red") && $(this).hasClass("6") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("5") && w.hasClass("black") && $(this).hasClass("6") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("6") && w.hasClass("red") && $(this).hasClass("7") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("6") && w.hasClass("black") && $(this).hasClass("7") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("7") && w.hasClass("red") && $(this).hasClass("8") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("7") && w.hasClass("black") && $(this).hasClass("8") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("8") && w.hasClass("red") && $(this).hasClass("9") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("8") && w.hasClass("black") && $(this).hasClass("9") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("9") && w.hasClass("red") && $(this).hasClass("10") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("9") && w.hasClass("black") && $(this).hasClass("10") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("10") && w.hasClass("red") && $(this).hasClass("J") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("10") && w.hasClass("black") && $(this).hasClass("J") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("J") && w.hasClass("red") && $(this).hasClass("Q") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("J") && w.hasClass("black") && $(this).hasClass("Q") && $(this).hasClass("red")) {
// 				return true;
// 			}else
// 			if(w.hasClass("Q") && w.hasClass("red") && $(this).hasClass("K") && $(this).hasClass("black")) {
// 				return true;
// 			}else
// 			if(w.hasClass("Q") && w.hasClass("black") && $(this).hasClass("K") && $(this).hasClass("red")) {
// 				return true;
// 			}
// 		}
	},
	drop: function(e, ui) {
		
//		$(ui.draggable).hasClass("hand1") varg = 20;
//		$(ui.draggable).hasClass("drag") varg = -20;



		for (let x = 0; x < inPlay.length; x++) {
				if (ui.draggable.parents().hasClass(inPlay[x])) {
					
//					console.log("Dropped from column " + inPlay[x] + " !");}
				}
			}
		if (ui.draggable.parents().hasClass("hand1")) {
					$("#hand2 :last-child").addClass("drag");
//					rules();
					hand.shift();
//					console.log("Dragged from hand1!");
				}
		if (ui.draggable.parents().hasClass("hand2")) {
					$("#hand3 :last-child").addClass("drag");
//					rules();
					hand.shift();
//					console.log("Dragged from hand2!");
				}
// 	if ($("#draw3").hasClass("press")) {	
// 		if (ui.draggable.parents().hasClass("hand3")) {

// //					hand.shift();
// //					console.log("Dragged from hand3!");
//						 if (hand.length > 2) {
// 							$(".hand1").empty();
// 							$(".hand1").append(hand[0].up);
// 							$(".hand1 :last-child").removeClass("drag");rules();}else
// 						if (hand.length > 1) {
// 							$(".hand2").empty();
// 							$(".hand2").append(hand[1].up);
// 							$(".hand2 :last-child").removeClass("drag");rules();}else
// 						if (hand.length > 0) {
// 							$("#hand3").empty();
// 							$("#hand3").append(hand[2].up);rules();}
						
						
					
					
// //						rules();
	
// 		}
// 	}
	else

	
			if ($("#draw1").hasClass("press")) {
			if (ui.draggable.parents().hasClass("hand3")) {
					hand.shift();
						if (hand.length > 0) {
							$("#hand3").empty();
							$("#hand3").append(hand[0].up);rules();}
					
					
//						rules();
	
				}
		}else
		if ($("#draw3").hasClass("press")) {
			if (ui.draggable.parents().hasClass("hand3")) {
					hand.shift();
//					console.log("Dragged from hand3!");
						if (hand.length > 2) {
							$(".hand1").empty();
							$(".hand1").append(hand[0].up);
//						    $(".hand2").empty();
							$(".hand2").append(hand[1].up);
							$(".hand2 :last-child").removeClass("drag");
//							$("#hand3").empty();
							$("#hand3").append(hand[2].up);
							$(".hand3 :last-child").removeClass("drag");

						}else
						if (hand.length > 1) {
							$(".hand2").empty();
							$(".hand2").append(hand[0].up);
						    $("#hand3").empty();
							$("#hand3").append(hand[1].up);
							$(".hand3 :last-child").removeClass("drag");

						}else
						if (hand.length > 0) {
							$("#hand3").empty();
							$("#hand3").append(hand[0].up);}
					
					
						rules();
	
	  }
		}
		

		

//ui.draggable.detach().css({top: "-.9em" ,left: 0}).appendTo($(this));
		
		
	if ($(window).width() >= 400) {
	    				if ($(ui.draggable).parents().hasClass("complete")) {
				    ui.draggable.detach().css({top: "1.25em" ,left: 0}).appendTo($(this));
				}else

			ui.draggable.detach().css({top: "-1.5em" ,left: 0}).appendTo($(this));
		}else

		if ($(window).width() < 400)	{
		        if ($(ui.draggable).parents().hasClass("complete")) {
				    ui.draggable.detach().css({top: "1em" ,left: 0}).appendTo($(this));
				}else
			ui.draggable.detach().css({top: "-.63em" ,left: 0}).appendTo($(this));
			
		}else
	if ($(window).width() >= 500) {
	    		if ($(ui.draggable).parents().hasClass("complete")) {
				    ui.draggable.detach().css({top: "1.25em" ,left: 0}).appendTo($(this));
				}else
			ui.draggable.detach().css({top: "-2em" ,left: 0}).appendTo($(this));
		}
		
		
//		$(e.target).css("position:", "relative");
//		$(e.target).droppable("disable");
	
	rules();
		
	}
});







//Final suit collection
$("#suitA , #suitB , #suitC , #suitD").droppable({

	accept: function(q) {
		
		if(q.hasClass("A") && $(this).children().length == 0) {
//			console.log(q.has().children().length);
			return true;
		}else 
		
		//
		//cycle through array of suits and values to accept the next value higher of same suit
		//
		if (q.children().length == 3) {
		for (let x = 0; x < allsuits.length; x++) {
			for (let y = 1; y < values.length; y++) {
				if(q.hasClass(values[y]) && q.hasClass(allsuits[x]) && $(this).children([0]).hasClass(values[y - 1]) && $(this).children([0]).hasClass(allsuits[x])) {
					
			return true;
		}
			}
		}
		}
//		console.log(q.children().length);
		
		
	},
	drop: function(e, ui) {
		
		if (ui.draggable.parents().hasClass("hand1")) {
					$("#hand2 :last-child").addClass("drag");
//					rules();
					hand.shift();
//					console.log("Dragged from hand1!");
				}
		if (ui.draggable.parents().hasClass("hand2")) {
					$("#hand3 :last-child").addClass("drag");
//					rules();
					hand.shift();
//					console.log("Dragged from hand2!");
				}
			if ($("#draw1").hasClass("press")) {
			if (ui.draggable.parents().hasClass("hand3")) {
					hand.shift();
						if (hand.length > 0) {
							$("#hand3").empty();
							$("#hand3").append(hand[0].up);}
					
					
//						rules();
	
				}
		}else
				if ($("#draw3").hasClass("press")) {
			if (ui.draggable.parents().hasClass("hand3")) {
					hand.shift();
//					console.log("Dragged from hand3!");
						if (hand.length > 2) {
							$(".hand1").empty();
							$(".hand1").append(hand[0].up);
//						    $(".hand2").empty();
							$(".hand2").append(hand[1].up);
							$(".hand2 :last-child").removeClass("drag");
//							$("#hand3").empty();
							$("#hand3").append(hand[2].up);
							$(".hand3 :last-child").removeClass("drag");

						}else
						if (hand.length > 1) {
							$(".hand2").empty();
							$(".hand2").append(hand[0].up);
						    $("#hand3").empty();
							$("#hand3").append(hand[1].up);
							$(".hand3 :last-child").removeClass("drag");

						}else
						if (hand.length > 0) {
							$("#hand3").empty();
							$("#hand3").append(hand[0].up);}
					
					
						rules();
	
	  }
		}
		
		
		
		if ($(ui.draggable).hasClass("drag")) {
			if ($(this) === $("#suitA")) {
				for (let y = 0; y < inPlay.length; y++) {
//					if (ui.draggable.parents().hasClass(inPlay[y])) {
//					var tempd = inPlay[y];
//					console.log(inPlay[0]);
//					}
			   
//				inPlay[y].unshift(denz[0].shift());
				}
				
			}else
			if ($(this) === $("#suitB")) {
				suitB.shift(hand[0].shift());
			}else
			if ($(this) === $("#suitC")) {
				suitC.shift(hand[0].shift());
			}
			if ($(this) === $("#suitD")) {
				suitD.shift(hand[0].shift());
			}
		}else
		if ($(ui.draggable).hasClass("hand1")) {
			if ($(this) === $("#suitA")) {
				suitA.shift(hand[0].shift());
			}else
			if ($(this) === $("#suitB")) {
				suitB.shift(hand[0].shift());
			}else
			if ($(this) === $("#suitC")) {
				suitC.shift(hand[0].shift());
			}
			if ($(this) === $("#suitD")) {
				suitD.shift(hand[0].shift());
			}
		}
		
		
		ui.draggable.detach().css({position: "absolute",top: 0,left: 0}).appendTo($(this));
		
			//$(e.target).droppable("disable");
	
	rules();	
		
	}
	
	

});

if ($("#suitA").children().length == 13 & $("#suitB").children().length == 13 & $("#suitC").children().length == 13 & $("#suitD").children().length == 13) {
    winz++;
    	
	winner();
// 	$(".new").on("click", function(){
// 	$("#winner").hide();
// 	$(".hand").empty();
// 	newGame();

		
		
// 	});
}

//seeDeck();
for (let x = 1; x < 99; x++) {
	let y = x * -0.05;
	$(`#contdck :nth-child(${x})`).css("top", `${y}em`);
}

// #contdck :last-child {
// 	top: -0.35em;
// }

}


/////////////////////////////////






function moveMenu() {
	if ($("#popSett").css("display") === "none") {
		$("#popSett").show();
		$("#popSett").animate({"width": "70vw", "height": "80vh"}, 500);}else
	if ($("#popSett").css("display") != "none") {
		$("#popSett").animate({"width": "0vw", "height": "0vh"}, 500);
		$("#popSett").hide();
		
	}
}

function winner() {
	$("#winner").show();
	$(".wincount").empty();
    $(".wincount").append("Games won:   " + winz);
}

function winHide() {
	$("#winner").hide();
}

function noDeck() {
	$("#contdck").empty();
}
function curDeck() {
	if (deck.length > 1) {
   
	}
}
function seeDeck() {
//	$(".deck").show();
	
		$("#contdck").empty();
		 	for (let x = 0; x < deck.length; x++) {
				$("#contdck").append(`<div class="deck" ></div>`);
		}

//console.log(deck.length);
}
function seeHand() {
	$("#handbox").show();
}
function noHand() {
	$("#handbox").hide();
}
function clearComplete() {
	$("#suitA , #suitB , #suitC , #suitD").empty();
}

function threeDraw() {
    

		if(deck.length >= 4) {
//		fullDeck();
		hand.unshift(deck.shift());
		hand.unshift(deck.shift());
		hand.unshift(deck.shift());seeDeck();
    	} else if(deck.length === 3) {
    		hand.unshift(deck.shift());
    		hand.unshift(deck.shift());
    		hand.unshift(deck.shift());seeDeck();
    //		noDeck();
    	} else if(deck.length === 2) {
    		hand.unshift(deck.shift());
    		hand.unshift(deck.shift());seeDeck();
    //		noDeck();
    	} else if(deck.length === 1) {
    		hand.unshift(deck.shift());seeDeck();
    //		noDeck();
    	} else if(deck.length === 0) {
    //		noDeck();
    	}
	
	    if (deck.length + hand.length > 2) {
	        $("#hand1").empty();
        	$("#hand1").append(hand[0].up);
        	$(".hand2").empty();
        	$(".hand2").append(hand[1].up);
        	$(".hand2 :last-child").removeClass("drag");
        	$(".hand3").empty();
        	$(".hand3").append(hand[2].up);
        	$(".hand3 :last-child").removeClass("drag");
	    }else
	    if (deck.length + hand.length == 2) {
	        $("#hand1").empty();
        	$(".hand2").empty();
        	$(".hand2").append(hand[0].up);
        	$(".hand3").empty();
        	$(".hand3").append(hand[1].up);
        	$(".hand3 :last-child").removeClass("drag");
	    }else
	    if (deck.length + hand.length === 1) {
	        $("#hand1").empty();
        	$(".hand2").empty();
        	$(".hand3").empty();
        	$(".hand3").append(hand[0].up);
	    }

	
	

	rules();
	
}

function oneDraw() {
		if(deck.length >= 1) {
		hand.unshift(deck.shift());seeDeck();
	}
	
	$("#hand2").empty();
	$("#hand1").empty();
	
	$("#hand3").empty();
	$("#hand3").append(hand[0].up);


	rules();
}