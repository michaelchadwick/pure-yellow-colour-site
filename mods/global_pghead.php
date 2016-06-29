<?php include "functions.php"; ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<meta name="keywords" content="pure, yellow, colour, pyc, acoustic, rock, lestats, twiggs, guitar, band, gently, rocking" />
	<link rel="shortcut icon" href="/img/favicon.ico" />
	<link rel="icon" type="image/ico" href="/img/favicon.ico" />
	
	<?php
	if(isset($_SESSION['layoutType']) && $_SESSION['layoutType'] == "mobile")	{
	?>
		<meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
		<link rel="stylesheet" type="text/css" href="/css/screen-mobile.css" />
	<?php
	}	else {
	?>
		<link rel="stylesheet" type="text/css" href="/css/screen.css" />
	<?php
	}
	?>
	
	<script type="text/javascript" src="/js/jquery-1.3.2.min.js"></script>
	<script type="text/javascript" src="/js/default.js"></script>
