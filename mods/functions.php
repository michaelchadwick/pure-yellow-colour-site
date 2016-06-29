<?php
session_start();

$uaStrings = array('iPhone', 'iPod', 'Android', 'Mobile', 'WebOS');
$uaCurrent = $_SERVER['HTTP_USER_AGENT'];
	
// mobile ua auto-switches
foreach($uaStrings as $uaString) {
	if(strstr($uaCurrent, $uaString) && !isset($_SESSION['layoutType']) ) {
		$_SESSION['layoutType'] = "mobile";
	}
}
	
// if mobile turned off, override that
if(isset($_GET['mobile']) && !$_GET['mobile']) {
	$_SESSION['layoutType'] = "default";
}
	
// if mobile enforced, tho, keep it mobile
if(isset($_GET['mobile']) && $_GET['mobile']) {
	$_SESSION['layoutType'] = "mobile";
}

if(!isset($_SESSION['layoutType'])) {
	$_SESSION['layoutType'] = "default";
}
?>