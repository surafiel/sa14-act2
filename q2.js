function convertCurrency(sourceCurrency, targetCurrency, amount) {
    const apiKey = '043b887899f2785575b92f34f40d09da'; // Replace with your API key for currency conversion
    const url = `https://api.example.com/convert?from=${sourceCurrency}&to=${targetCurrency}&amount=${amount}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`Converted amount: ${data.result}`);
            console.log(`Exchange rate: ${data.exchangeRate}`);
        })
        .catch(error => console.error('Error converting currency:', error));
}

// Example usage for Currency Converter
const sourceCurrency = 'USD';
const targetCurrency = 'EUR';
const amount = 100;
convertCurrency(sourceCurrency, targetCurrency, amount);