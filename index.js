
async function showdata(){
    let money=document.getElementById("amount").value;
    let fr=document.getElementById("fromCurrency").value;
    let too=document.getElementById("toCurrency").value;
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${fr}&to=${too}&amount=${money}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1f59aaf7d9msh9aecb633b208fefp162999jsnd6c59eae84be',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    document.getElementById("result").value=result.result;
} catch (error) {
	console.error(error);
}
}





