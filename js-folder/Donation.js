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

});