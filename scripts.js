// const converted_dol = document.querySelector('txt_dolar');
// const converted_euro = document.querySelector('_euro');
// const converted_btc = document.querySelector('#span_btc');







function applyCot(dollar, euro, bitcoin, var_dolar, var_euro, var_btc) {
    /*
    Apply the values ​​received by the API to the HTML.
    Receives: the dollar, euro and bitcoin avaluated in reais.
    Returns: nothing.
    */
    var actualDollar = document.getElementById("usd");
    var actualEuro = document.getElementById("eur");
    var actualBitcoin = document.getElementById("btc");

    if(var_dolar < 0){
        document.getElementById("seta_dolar").src="seta_queda.png";
    }
    if(var_euro < 0){
        document.getElementById("seta_euro").src="seta_queda.png";
    }
    if(var_btc < 0){
        document.getElementById("seta_btc").src="seta_queda.png";
    }

    actualDollar.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'brl' }).format(dollar);
    actualEuro.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'brl' }).format(euro);
    actualBitcoin.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'brl' }).format(bitcoin);
}

function requestAPI(url) {
    /*
    Requests the API that returns conversions to BRL currency.
    Receives: the API's URL.
    Returns: a dictionary that contains information about USD-BRL, EUR-BRL and BTC-BRL conversions.
    */
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return JSON.parse(request.responseText);
}

function convert_dol(){
    const inputed_dol = document.getElementById('inputed_dol').value;
    const coinData = requestAPI("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
    var dolar = coinData["USDBRL"]["bid"];
    var result = dolar*inputed_dol;
    document.getElementById('txt_dolar').innerText="R$ " + result.toFixed(2);
};
function convert_euro(){
    const inputed_euro = document.getElementById('inputed_euro').value;
    const coinData = requestAPI("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
    var euro = coinData["EURBRL"]["bid"];
    var result = euro*inputed_euro;
    document.getElementById('txt_euro').innerText="R$ " + result.toFixed(2);
}
function convert_btc(){
    const inputed_btc = document.getElementById('inputed_btc').value;
    const coinData = requestAPI("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL");
    var btc = coinData["BTCBRL"]["bid"];
    var result = btc*inputed_btc;
    document.getElementById('txt_btc').innerText="R$ " + result.toFixed(2);
}

function main() {
    const coinData = requestAPI(
        "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
    );

    var dollar = coinData["USDBRL"]["bid"],
        euro = coinData["EURBRL"]["bid"],
        bitcoin = coinData["BTCBRL"]["bid"],
        var_dolar = coinData["USDBRL"]["varBid"],
        var_euro = coinData["EURBRL"]["varBid"],
        var_btc = coinData["BTCBRL"]["varBid"];

    applyCot(dollar, euro, bitcoin, var_dolar, var_euro, var_btc);
}

main();


// updates every 1 second
setInterval(main, 1000)