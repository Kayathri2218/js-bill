let form=document.querySelector('form');
form.addEventListener('submit',function(p){
	p.preventDefault();
	let amount=parseInt(document.querySelector('#amount').value);
	let tips=parseInt(document.querySelector('#tips').value);
	let tipamount=document.querySelector('#tipamount');
	let result=document.querySelector('#result');
	if((amount==" ")||(amount<0)||(isNaN(amount))){
		result.innerHTML="Enter your amount";
		
	}
	else if((tips==" ")||(tips<0)||(isNaN(tips))){
		result.innerHTML="Enter your tips";
	}
	else{
		let tot=(amount*(tips/100));
		tipamount.value=tot;
		result.innerHTML=tot+amount;
	}
})