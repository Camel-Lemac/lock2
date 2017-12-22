(async function () {

var relay;
var rfid;
var myFirebase;

function get_date(t) {
  var varDay = new Date(),
    varYear = varDay.getFullYear(),
    varMonth = varDay.getMonth() + 1,
    varDate = varDay.getDate();
  var varNow;
  if (t == "ymd") {
    varNow = varYear + "/" + varMonth + "/" + varDate;
  } else if (t == "mdy") {
    varNow = varMonth + "/" + varDate + "/" + varYear;
  } else if (t == "dmy") {
    varNow = varDate + "/" + varMonth + "/" + varYear;
  } else if (t == "y") {
    varNow = varYear;
  } else if (t == "m") {
    varNow = varMonth;
  } else if (t == "d") {
    varNow = varDate;
  }
  return varNow;
}

function get_time(t) {
  var varTime = new Date(),
    varHours = varTime.getHours(),
    varMinutes = varTime.getMinutes(),
    varSeconds = varTime.getSeconds();
  var varNow;
  if (t == "hms") {
    varNow = varHours + ":" + varMinutes + ":" + varSeconds;
  } else if (t == "h") {
    varNow = varHours;
  } else if (t == "m") {
    varNow = varMinutes;
  } else if (t == "s") {
    varNow = varSeconds;
  }
  return varNow;
}


boardReady({device: 'aM275'}, async function (board) {
  board.systemReset();
  board.samplingInterval = 250;
  relay = getRelay(board, 6);
  rfid = getRFID(board);
  myFirebase = new Firebase("https://remote-door-locks.firebaseio.com/");
  relay.off();
  rfid.read();
  rfid.on("enter",async function(_uid){
    rfid._uid = _uid;
    if(rfid._uid == '26B27C81'){
      document.getElementById("demo-area-01-show").innerHTML = '李紹齊';
      document.getElementById("demo-area-02-show").innerHTML = (get_date("ymd"));
      document.getElementById("demo-area-03-show").innerHTML = (get_time("hms"));
      myFirebase.push({
        name:'李紹齊',
        day:get_date("ymd"),
        time:get_time("hms")
      });
      relay.on();
      await delay(2);
      relay.off();
    }
	if(rfid._uid == 'EFACF625'){
      document.getElementById("demo-area-01-show").innerHTML = '李紹齊';
      document.getElementById("demo-area-02-show").innerHTML = (get_date("ymd"));
      document.getElementById("demo-area-03-show").innerHTML = (get_time("hms"));
      myFirebase.push({
        name:'陳冠宇',
        day:get_date("ymd"),
        time:get_time("hms")
      });
      relay.on();
      await delay(2);
      relay.off();
    }
    if(rfid._uid == '044BD2DA854C80'){
      document.getElementById("demo-area-01-show").innerHTML = '王小明';
      document.getElementById("demo-area-02-show").innerHTML = (get_date("ymd"));
      document.getElementById("demo-area-03-show").innerHTML = (get_time("hms"));
      myFirebase.push({
        name:'王小明',
        day:get_date("ymd"),
        time:get_time("hms")
      });
      relay.on();
      await delay(2);
      relay.off();
    }
  });
  document.getElementById("demo-area-05-btn1").addEventListener("click",async function(){
    document.getElementById("demo-area-01-show").innerHTML = '遠端按鈕開鎖';
    document.getElementById("demo-area-02-show").innerHTML = (get_date("ymd"));
    document.getElementById("demo-area-03-show").innerHTML = (get_time("hms"));
    myFirebase.push({
      name:'遠端按鈕開鎖',
      day:get_date("ymd"),
      time:get_time("hms")
    });
    relay.on();
    await delay(2);
    relay.off();
  });
});

}());