 
    const apiKey = 'r9MAbAWTjl8AXGAmx9lfR2ybXH6C5Unh';
    const url = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';
    
   
    const $origin = $('#origin');
    const $destination = $('#destination');
    const $departure_date = $('#departure_date');
    const $submit    = $('#submit');
    const $responseField = $('#responseField');
    const $row      =     $('#data_row');
    
    // AJAX functions
    
    async function searchFlight() {
      const endPoint = url + '?origin=' + $origin.val() + '&destination=' + $destination.val() +'&departure_date='+ $departure_date.val() + '&apikey=' +apiKey;
      try {
        let response = await fetch(endPoint);
        if (response.ok) {
          let jsonResponse = await response.json();
          $responseField.append('<p>Currency: ' + jsonResponse.currency+ '</p>');
          jsonResponse.results.forEach(function(el){
            $row.append('<td>'+el.fare.price_per_adult.tax + '</td>');
            $row.append('<td>'+ el.fare.price_per_adult.total_fare + '</td>');
           
           el.itineraries[0].outbound.flights.forEach(elem=>{
                   //console.log(elem.departs_at);
                   $row.append('<td>'+elem.aircraft+'</td>');
                   $row.append('<td>'+elem.arrives_at+'</td>');
                   // $row.append('<td>'+elem.booking_info.booking_code+'</td>');
                   $row.append('<td>'+elem.booking_info.seats_remaining+'</td>');
                   $row.append('<td>'+elem.booking_info.travel_class+'</td>');
                   $row.append('<td>'+elem.departs_at+'</td></tr>');
                   $row.append('<td>'+elem.flight_number+'</td>');
                   $row.append('<br>')
                   // $row.append('<td>'+elem.marketing_airline+'</td></tr>');
                   // $row.append('<td>'+elem.operating_airline+'</td></tr>')
                   //console.log("aircrafts: " + elem.aircraft);
           });
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