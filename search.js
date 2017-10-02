 
    const apiKey = 'r9MAbAWTjl8AXGAmx9lfR2ybXH6C5Unh';
    const url = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';
    
   
    const $origin = $('#origin');
    const $destination = $('#destination');
    const $departure_date = $('#departure_date');
    const $submit    = $('#submit');
    const $responseField = $('#responseField');
    
    // AJAX functions
    
    async function searchFlight() {
      const endPoint = url + '?origin=' + $origin.val() + '&destination=' + $destination.val() +'&departure_date='+ $departure_date.val() + '&apikey=' +apiKey;
      try {
        let response = await fetch(endPoint);
        if (response.ok) {
          let jsonResponse = await response.json();
          $responseField.append('<p>Currency: ' + jsonResponse.currency+ '</p>');
          jsonResponse.results.forEach(function(el){
            $responseField.append('<p> Total fare: ' + el.fare.price_per_adult.total_fare+ "   Tax: "+el.fare.price_per_adult.tax + '</p>');
          
          });
          console.log(jsonResponse);
        
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    function search(){
        searchFlight();
        return false;
    
    }
    
    $submit.click(search);