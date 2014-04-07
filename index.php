<?php /**/ ?><head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <title>A day at the park</title>
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jquery.rotate.1-1.js"></script>
  <script type="text/javascript" src="js/sequence.js"></script>
  <link rel="stylesheet" href="css/thickbox.css" type="text/css" media="screen" />
  <script type="text/javascript"> var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); </script> <script type="text/javascript"> var pageTracker = _gat._getTracker("UA-4187836-1"); pageTracker._initData(); pageTracker._trackPageview(); </script>
  <style>
    .container{
      border: 5px solid #fff;
      padding: 0px;
      width: 480px;
      height: 360px;
      margin-left: auto;
      margin-right: auto
    }
    .preloader{
      position:absolute;
      top:0;
      left:0;
      color:#fff;
      font-size:9px;
      background:#333;
    }
    .help{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      color:#fff;
      font-size:9px;
      border-bottom: 1px solid white;
      background:#000;
    }
    body{
      font-family: Verdana, Helvetica, Arial, sans-serif;
      background:#000;
      color:#222;
    }
  </style>

  
</head>
<body>
  <h2><br/><br/>
  <div class="help">Keys: 1-FWD  2-REW  3-RND   | Current:FWD</div>
  <div class="preloader">_loading...</div>
  <center><div class="container">
    <?php
    if( !$_GET['q'] ){
      $_GET['q'] = 'img';
    }
    $path = './'.$_GET['q'];
    $pics =  browseFiles($path,false);
    sort($pics);
  	for($i=0;$i<count($pics);$i++){
  	  $thumb = 'resize_image.php?pic='.$path.'/'.$pics[$i];
  	  $pic = $path.'/'.$pics[$i];
  		echo "<img class='frame ".getClassName($pics[$i])."' src='$pic' onload='s.preload()' />";
  	}
  ?>
  </div>
  <br/><br/><a href="/"><img src="logo.png" border="no"></a>
  </center>
  </h2>
  
</body>
</html>


<?php
function getClassName($pic){
  return str_replace(".JPG", "", $pic);
}
function browseFiles($path,$showFiles=true,$showDirs=true){
   $dir = dir($path);
   $content=array();
   while($file = $dir->read()) {
		//this is to get rid of the hidden files and the . ..
		if(!substr_count($file, '.', 0, 1)){
			if(is_file($file)){
				if($showFiles){
					array_push($content,$file);
				}
			}else{
				if($showDirs){
					array_push($content,$file);
				}
			};
		}
   }
   $dir->close();
   return $content;
}
?>