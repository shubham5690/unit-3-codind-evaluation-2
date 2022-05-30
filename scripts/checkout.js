

  let id;
  function checkOut(e)
  {
    e.preventDefault();
      alert ("Your order is accepted ")
  
      const myTimeout=setTimeout(mygreeting,0)
  
  
      function mygreeting()
      {
        alert("Your order is being Packed")
      }
  
      function myStopFunction()
      {
        clearTimeout(myTimeout)
      }
  
      const transit=setTimeout(transitFood,3000)
      
  
      function transitFood(){
      alert("Your order is in transit ")
      }
      function myStopFunction()
      {
        clearTimeout(transit)
      }
  
      
      const delivery=setTimeout(deliveryFood,8000)
      
  
      function deliveryFood(){
      alert(" Your order is out for delivery ")
      }
      function myStopFunction()
      {
        clearTimeout(delivery)
      }
  
      const delivered=setTimeout(deliveredFood,10000)
      
  
      function deliveredFood(){
      alert(" Order delivered ")
      }
      function myStopFunction()
      {
        clearTimeout(delivered)
      }
  }
  
  console.log('checkout')
  
  