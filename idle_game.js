var killCounter = 0;

// initialize
$(function(){
	console.log('initializing...')
	$('button').on('click', IM_hide)
	$('#game').prepend(renderKillCounter())
})

renderKillCounter = function () {
	var counter = $('<span>').text(killCounter)
	return $('<div>').addClass('killCount').text('Kill Count: ').append(counter)
}
increase_killcount = function(){
	killCounter = killCounter + 1
}
// setTimeout(function(){}, 1000)
// var IM = './assets/images/monster.jpg';
// var monsterImage = $()
console.log('loading...');
var IM_hide = function(image){
	// hide image
	$('div.monster_sprite img').hide()
	console.log('asdfg')
	setTimeout(function(){$('div.monster_sprite img').show()}, 1000)
	increase_killcount()
	$('#game').prepend(renderKillCounter())
}  