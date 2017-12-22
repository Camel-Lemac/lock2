<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>遠端門鎖DEMO</title>
<link href="css/myremote.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script src="https://webduino.io/components/webduino-js/dist/webduino-all.min.js"></script>
  <script src="https://blockly.webduino.io/webduino-blockly.js"></script>
  <script src="https://blockly.webduino.io/lib/firebase.js"></script>
  <script src="https://blockly.webduino.io/lib/runtime.min.js"></script>
  <script src="JS3.js"></script>
</head>

<body>
<div class="container"> 
  <header class="header"><h1>遠端門鎖DEMO</h1></header>
  <div class="button" align="center" style = "width:100%;height:100%;">
  <button type="button" id="demo-area-05-btn1" class="db5">
  <img src="image1.png" width="100%" height="100%" alt="">
  </button>
  </div>
  <div class="cardhead"> <h1>開鎖時間紀錄</h1></div>
  <div class="cardtext">
  
  <li>姓名:<span id="demo-area-01-show"></span></li>
  <li>日期:<span id="demo-area-02-show"></span></li>
  <li>時間:<span id="demo-area-03-show"></span></li>
  </div>
</div>
</body>
</html>
