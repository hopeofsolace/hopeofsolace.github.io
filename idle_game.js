var killCounter = 0;

// initialize
$(function(){
	console.log('initializing...')
	$('#monsters').html(createMonster())
})

renderKillCounter = function (kills) {
	var counter = $('<span>').text(kills)
	return $('<div>').addClass('killCount').text('Kill Count: ').append(counter)
}

createMonster = function() {
	monsterObject =  {
		killCounter: 0,
		element: $('<div class="monster2">')
		image: $('<img src="./assets/images/monster.jpg" alt="monster_sprite2"/>')
		button: $('<button type="button">button</button>')
	}
	
	monsterObject.element.append(monsterObject.image)
	monsterObject.element.append('<button type="button">button</button>')
	monsterObject.append('<div class="counter2"></div>')
	monsterObject.find('button').on('click', function(){
		image.hide();
		setTimeout( function () {
			$(image.show())
		}, 1000)
		killCounter = killCounter + 1
		$('.counter2').html(renderKillCounter(killCounter))
	})

	monster.find('.counter').html(renderKillCounter(killCounter))
	return monster
}

createMonster = function() {
	var killCounter = 0;
	var monster = $('<div class="monster2">')
	var image = $('<img src="./assets/images/monster.jpg" alt="monster_sprite2"/>')
	monster.append(image)
	monster.append('<button type="button">button</button>')
	monster.append('<div class="counter2"></div>')
	monster.find('button').on('click', function(){
		image.hide();
		setTimeout( function () {
			$(image.show())
		}, 1000)
		killCounter = killCounter + 1
		$('.counter2').html(renderKillCounter(killCounter))
	})

	monster.find('.counter').html(renderKillCounter(killCounter))
	return monster
}
	// <div class="monster_name" >
    // <div class="counter"></div>
    // <div class="monster_sprite">
    //   <img src="./assets/images/monster.jpg" alt="monster_sprite"/> 
    // </div>
    // <button type="button">button</button>
    // </div>