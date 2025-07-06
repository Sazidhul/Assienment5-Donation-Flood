// The amount we want to grow to the top we will do it from the beginning function we want to do what it takes to be derived to the  function :

function getInputFieldValueById(id){
   const inputValue = document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
   return inputNumber;
}


//  text fields  for the inner text 

function getTextFiedlValueById(id){
   const textValue = document.getElementById(id).innerText;
   const textNumber = parseFloat(textValue);
   return textNumber;
}

// show the section bye clicking the button 
function showSectionById(id){
   // hide all the sections
   document.getElementById('add-money-form').classList.add('hidden');
   document.getElementById('transaction-section').classList.add('hidden');
   // Show the section with the provide id as parameter 
   document.getElementById(id).classList.remove('hidden');
}


//  transaction-container 
function addTransactionHistory(message) {
   const p = document.createElement('p');
   p.classList.add('my-2'); // optional styling
   p.innerText = message;
   document.getElementById('transaction-container').appendChild(p);
}
