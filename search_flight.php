


<?php

require 'vendor/autoload.php';
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
 

$origin = $_POST['origin'];
$destination = $_POST['destination'];
$departure_date = $_POST['departure_date'];

$apiKey = 'r9MAbAWTjl8AXGAmx9lfR2ybXH6C5Unh';
$url = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';
$endPoint = $url. '?origin='. $origin. '&destination='. $destination.'&departure_date='. $departure_date. '&apikey='.$apiKey;
$client = new Client();

$response = $client->request('GET', $endPoint, ['verify' => false, 'Content-type' => 'application/json','Accept' => 'application/json']);
 
$result = $response->getBody()->getContents();
$result = json_decode($result);

// $data = $result->results[0]->itineraries[0]->outbound->flights[0];
//  echo '<div>
//   <p>Departs'.$data->departs_at." Arrives". $data->arrives_at."Origin Airport". $data->origin->airport. "Destination Airport: ".$data->destination->airport.'</p></div>';
 
//  echo '<pre>';
//  //var_dump($result->results[0]->itineraries[0]->outbound->flights[0]);
// var_dump($result);
//  echo '</pre>';
echo '<h1>CURRENCY:'.$result->currency.'</h1>';

 foreach ($result->results as $key => $data) {
     # code...
      foreach ($data->itineraries as $key => $iti) {
           
        foreach ($iti->outbound->flights as $key => $flight) {
            # code...
            echo " <p><b> Departs_at:</b> ". $flight->departs_at.",  <b>Origin:</b>  ". $flight->origin->airport.",  <b>Destination:</b>  ". $flight->destination->airport.
            ", <b>Arrives_at:</b> ".$flight->arrives_at.",  <b>Flight Number:</b> ".$flight->flight_number. ",  <b>Travel Class:</b> ". $flight->booking_info->travel_class.
            ",  <b>Seats Remaining:</b> ". $flight->booking_info->seats_remaining."</p>";
        }
          # code...
      }
 }

 ?>