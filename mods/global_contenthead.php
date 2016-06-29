</head>

<body>

<div id="page">

	<div id="content">

		<?php
		if(isset($_SESSION['layoutType']) && $_SESSION['layoutType'] == "mobile")	{
		?>
		<div id="content-top"><a href="/">Pure Yellow Colour</a></div>
		<?php
		}	else {
		?>
		<a href="/"><img src="img/header.jpg" alt="Pure Yellow Colour" title="Pure Yellow Colour" /></a>
		<?php
		}
		?>
		<br />

		<div id="content-header"></div>
		<div id="content-header-menu">
			<!-- navigation images -->
			<a class="rev" href="/">Home/News</a> |
			<a class="rev" href="/about.php">About PYC</a> | 
			<a class="rev" href="/liveshows.php">PYC Live!</a> | 
			<a class="rev" href="/music.php">Music</a> | 
			<a class="rev" href="/gallery.php">Gallery</a> | 
			<a class="rev" href="/store.php">Store</a> | 
			<a class="rev" href="/links.php">Links</a>
			<!-- navigation images -->
		</div>
		
		<div id="content-body">

			<div id="content-menu">
				<?php include "global_topnav.php"; ?>
			</div>
			<div id="content-col">