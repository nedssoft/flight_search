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

$result = json_decode($result, true);

 echo '<pre>';
var_dump($result);
 echo '</pre>';
