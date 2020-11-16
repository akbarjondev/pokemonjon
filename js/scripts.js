// functions
var getObject = function(selector, node = document) {
	return document.querySelector(selector);
}

var getObjects = function(selector, node = document) {
	return document.querySelectorAll(selector);
}

// variables
var elForm = getObject('.form');
var elSearch = getObject('.form__search', elForm);
var elPokemons = getObject('.pokemons');
var elCard = getObject('.card');

// pokemon information variables
var elCardHeader = getObject('.card-header');
var elCardImage = getObject('.card-image');
var elCardId = getObject('.card-id');
var elCardNum = getObject('.card-num');
var elCardName = getObject('.card-name');
var elCardType = getObject('.card-type');
var elCardHeight = getObject('.card-height');
var elCardWeight = getObject('.card-weight');

// iterate pokemons
for(var i = 0; i < pokemons.length; i++) {
	
	// create new elements
	var elNewPokemon = document.createElement('li');
	elNewPokemon.setAttribute('class', 'list-group-item list-group-item-action body__item');
	var elNewPokemonLink = document.createElement('a');
	elNewPokemonLink.href = '#';
	elNewPokemonLink.setAttribute('data-id', i);
	elNewPokemonLink.classList.add('body__link');
	
	// trigger
	elNewPokemonLink.addEventListener('click', function(evt) {
		evt.preventDefault();

		// data id
		var elDataId = this.attributes['data-id'].value;
		
		// pokemon information
		elCardHeader.textContent = pokemons[elDataId].name;
		elCardImage.src = '';
		elCardImage.src = pokemons[elDataId].img;
		elCardImage.alt = pokemons[elDataId].name;
		elCardId.textContent = pokemons[elDataId].id;
		elCardNum.textContent = pokemons[elDataId].num;
		elCardName.textContent = pokemons[elDataId].name;
		elCardType.textContent = pokemons[elDataId].type;
		elCardHeight.textContent = pokemons[elDataId].height;
		elCardWeight.textContent = pokemons[elDataId].weight;

		elCard.classList.remove('d-none');
	});

	// append
	elNewPokemonLink.textContent = pokemons[i].name;
	elNewPokemon.appendChild(elNewPokemonLink);
	elPokemons.appendChild(elNewPokemon);
}

// searching
elForm.addEventListener('submit', function(evt) {
	evt.preventDefault();

	if(elSearch.value !== '') {
		var quest = elSearch.value.trim().toLowerCase();
		
		elPokemons.innerHTML = '';
		var isFind = false;
		for(var i = 0; i < pokemons.length; i++) {
		  var pokemonName = pokemons[i].name.toLowerCase();
		  if(pokemonName.includes(quest)) {
		  	// create new elements
				var elNewPokemon = document.createElement('li');
				elNewPokemon.setAttribute('class', 'list-group-item list-group-item-action body__item');
				var elNewPokemonLink = document.createElement('a');
				elNewPokemonLink.href = '#';
				elNewPokemonLink.setAttribute('data-id', i);
				elNewPokemonLink.classList.add('body__link');
				
				// trigger
				elNewPokemonLink.addEventListener('click', function(evt) {
					evt.preventDefault();

					// data id
					var elDataId = this.attributes['data-id'].value;
					
					// pokemon information
					elCardHeader.textContent = pokemons[elDataId].name;
					elCardImage.src = '';
					elCardImage.src = pokemons[elDataId].img;
					elCardImage.alt = pokemons[elDataId].name;
					elCardId.textContent = pokemons[elDataId].id;
					elCardNum.textContent = pokemons[elDataId].num;
					elCardName.textContent = pokemons[elDataId].name;
					elCardType.textContent = pokemons[elDataId].type;
					elCardHeight.textContent = pokemons[elDataId].height;
					elCardWeight.textContent = pokemons[elDataId].weight;

					elCard.classList.remove('d-none');
				});
				
				// append
				elNewPokemonLink.textContent = pokemons[i].name;
				elNewPokemon.appendChild(elNewPokemonLink);
				elPokemons.appendChild(elNewPokemon);
				isFind = true;
				if(isFind) {
					// return;
				}
		  }
		} // for loop
	} // if search is empty
});