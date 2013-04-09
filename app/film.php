<?php

$film1 = $_GET['q1'];
$film2 = $_GET['q2'];

$film1 = str_replace(" ", "+", $film1);
$film2 = str_replace(" ", "+", $film2);

$film1_file = file_get_contents("http://imdbapi.org/?q=" . $film1);
$film1_file = json_decode($film1_file, true);

// echo "<pre>";
// print_r($film1_file);
// echo "</pre>";

$film2_file = file_get_contents("http://imdbapi.org/?q=" . $film2);
$film2_file = json_decode($film2_file, true);

$film_return = array(
	"film1" => array(
		"poster" => $film1_file[0]['poster'],
		"actors" => $film1_file[0]['actors']
		),
	"film2" => array(
		"poster" => $film2_file[0]['poster'],
		"actors" => $film2_file[0]['actors']
		)
	);

echo json_encode($film_return);

?>