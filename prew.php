<?php 
header("Content-type: application/json");
header("Access-Control-Allow-Credentials: true");
$domain_url = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
header("AMP-Access-Control-Allow-Source-Origin: " . $domain_url);
header('Content-Security-Policy: script-src https://cdn.ampproject.org:*');
header("Access-Control-Expose-Headers: AMP-Access-Control-Allow-Source-Origin");
$name = $_POST["name"];
$email = $_POST["email"];


echo json_encode(array("data"=>"$name"));