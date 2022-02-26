var billamount=document.querySelector("#bill-amount");
var discount=document.querySelector("#discount");
var discountamount=document.querySelector("#discount-amnt");
var amount=document.querySelector("#amount-paid");
var btn=document.querySelector("#button");
var output=document.querySelector("#output");

 btn.addEventListener('click',calculate)


function calculate(){
   output.innerText=""

   if((billamount.value !=="") && (discount.value !=="")){
     let dis=discount.value/100*(billamount.value);
     discountamount.value=dis;
     let amounttopay=billamount.value-discountamount.value;
     amount.value=amounttopay;
   }
   else{
      if(billamount.value===""){
      output.innerText="enter valid  billamount";
   }
   else if (discount.value==="")
   {
      output.innerText="enter valid  discount";

   }
   
}}

   
