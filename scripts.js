// Cotação de moedas do dia. 01/12/2024
const USD = 5.97;
const EUR = 6.34;
const GBP = 7.6;

// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captando o envento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(currency.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(currency.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(currency.value, GBP, "£");
      break;

    default:
      break;
  }
};

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol);
}
