function addDiposit(){
    let depositAmount= document.getElementById('depositAmount');
    let Amount = depositAmount.value.trim();
    if(Amount == ''){
     alert('Please enter a Amount.....')
    }
    depositAmount.value= '';
 
    const currentDeposit =document.getElementById('currentDeposit');
    const balanceAmount =document.getElementById('balanceAmount');
    
 
    currentDeposit.innerText = Amount;
    const sum =Number(1240) + Number(Amount);
    balanceAmount.innerText = sum
 
    currentDeposit.appendChild(currentDeposit)
    balanceAmount.appendChild(balanceAmount)
    const balanc =document.getElementById('balanceAmount')
    
 
 }
 function addWidraw(){
     let withdrawAmount= document.getElementById('withdrawAmount');
     let Amounte = withdrawAmount.value.trim();
     if(Amounte == ''){
      alert('Please enter a Amount.....')
     }
     withdrawAmount.value= '';
  
     const withdraw =document.getElementById('withdraw');
     const balanceAmount =document.getElementById('balanceAmount');
  
     withdraw.innerText = Amounte;
     balanceAmount.innerText = Number(1240) - Number(Amounte);
  
     withdraw.appendChild(withdraw)
     balanceAmount.appendChild(balanceAmount)
  
  
  }