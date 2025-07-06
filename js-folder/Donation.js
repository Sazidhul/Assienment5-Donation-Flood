// Noakhali
document.getElementById('btn-donate-money').addEventListener('click',function(event){
   event.preventDefault();

   const addMoney = getInputFieldValueById('input-add-money');
   const mainBalance  = getTextFiedlValueById('account-balance');
   const noakhaliTk   = getTextFiedlValueById('n-tk');

      if (addMoney <= 0 || isNaN(addMoney)) {
      alert('Please enter a valid donation amount.');
      return;
   }

   if (addMoney > mainBalance) {
      alert('Insufficient balance!');
      return;
   }


   // sum we need to add 
   const newBalance = mainBalance - addMoney;
   const newDonation = noakhaliTk + addMoney;

  document.getElementById('account-balance').innerText = newBalance;
   document.getElementById('n-tk').innerText = newDonation;

   // ✅ add to transaction history
   addTransactionHistory(`Donated ${addMoney} BDT to Noakhali. New Balance: ${newBalance} BDT.`);

});

// Fani 

document.getElementById('btn-feni-donate').addEventListener('click',function(event){
   event.preventDefault();

   const addMoney = getInputFieldValueById('input-Donation-money');
   const mainBalance  = getTextFiedlValueById('account-balance');
   const FaniTK   = getTextFiedlValueById('f-tk');

      if (addMoney <= 0 || isNaN(addMoney)) {
      alert('Please enter a valid donation amount.');
      return;
   }

   if (addMoney > mainBalance) {
      alert('Insufficient balance!');
      return;
   }


   // sum we need to add 
   const newBalance = mainBalance - addMoney;
   const newDonation = FaniTK + addMoney;

  document.getElementById('account-balance').innerText = newBalance;
   document.getElementById('f-tk').innerText = newDonation;

    // ✅ add to transaction history
   addTransactionHistory(`Donated ${addMoney} BDT to Feni. New Balance: ${newBalance} BDT.`);
});


//Quta 

document.getElementById('btn-quota-donate').addEventListener('click',function(event){
   event.preventDefault();

   const addMoney = getInputFieldValueById('input-contribute-money');
   const mainBalance  = getTextFiedlValueById('account-balance');
   const QutaTK   = getTextFiedlValueById('q-tk');

      if (addMoney <= 0 || isNaN(addMoney)) {
      alert('Please enter a valid donation amount.');
      return;
   }

   if (addMoney > mainBalance) {
      alert('Insufficient balance!');
      return;
   }


   // sum we need to add 
   const newBalance = mainBalance - addMoney;
   const newDonation = QutaTK + addMoney;

  document.getElementById('account-balance').innerText = newBalance;
   document.getElementById('q-tk').innerText = newDonation;

    // ✅ add to transaction history
   addTransactionHistory(`Donated ${addMoney} BDT to Quota Movement. New Balance: ${newBalance} BDT.`);

});


//  add to transaction history 
