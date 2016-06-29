	<div id="foot">

	<?php
		$path = $_SERVER['REQUEST_URI'];
		$lastFwdSlash = strrpos($path,"/")+1;
		$lastPeriod = strrpos($path,".")+1;
		$curPage = substr($path, $lastFwdSlash, strlen($path)-$lastPeriod);
	?>

		<div id="foot_links">
		<!-- navigation images -->
		<a class="rev" href="/">Home/News</a> |
		<a class="rev" href="/about.php">About PYC</a> | 
		<a class="rev" href="/liveshows.php">PYC Live!</a> | 
		<a class="rev" href="/music.php">Music</a> | 
		<a class="rev" href="/gallery.php">Gallery</a> | 
		<a class="rev" href="/store.php">Store</a> | 
		<a class="rev" href="/links.php">Links</a>
		<!-- navigation images -->

		<br /><br />
		</div>

		All content &copy; <?php echo date('Y'); ?> Pure Yellow Colour
		
		<?php if(isset($_SESSION['layoutType']) && $_SESSION['layoutType'] == "mobile") { ?>
		<span id="layoutChange">
			<a href='?mobile=0'>Desktop</a> | Mobile
		</span>
		<?php } ?>

	</div>
