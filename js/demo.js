var cars={
	sedan:['Honda city', 'hyundai verna', 'suziki sx4'],
	suv:['Mahindra', 'Tata sumo', 'Toyato Innova'],
	hatchback:['Honda BRV','Tata indigo','hyundai I20']
}

//Getting the main and sub menus

var main = document.getElementById('main-menu');
var sub =  document.getElementById('sub-menu');

//Trigger the Envent when main menu change occurs

main.addEventListener('change',function(){

//getting a selected option

var selected_option = cars[this.value];

//removing the sub menu options using while loop

while(sub.options.length > 0){
	sub.options.remove(0);
}


//conver the selected object into array and create  a options for each array elements
//using option constructor it will create html element with the given value and innerText

Array.from(selected_option).forEach(function(el){

	let option  = new Option(el,el);

	//append the child option in sub menu


	sub.appendChild(option);


});




});



