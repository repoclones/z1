 kamstatusn = localStorage.getItem("kamstatusn");
      if (kamstatusn === null) {
        localStorage.setItem('kamerrorn', 2);
        window.location.assign("./failure.html");
      };
  
    if (kamstatusn == 1) {
      localStorage.setItem('kamerrorn', 1);
      window.location.assign("./failure.html");
      
      };
var nd = 0;
var tuimer = 0;
function timer(){
  setInterval(insync, 10);
  tuimer--
  if (tuimer < 0) {tuimer = 0;};
}
function insync(){
  document.getElementById("td").innerHTML=tuimer;

if (st == 1) {
  if (tuimer == 0) {
     if (nd == 0) {
       scn = Math.floor(Math.random() * 8) + 1;
       url = "./scn-" + scn + ".html";
       window.location.assign(url);
        nd = 69;
     };
     };
  };
  
  if (st == 2) {
  if (tuimer == 0) {
     if (nd == 0) {
       window.location.assign("./index.html");
        nd = 69;
     };
     };
  };
}
function fate(status){
  tuimer = 5;
  st = status;
if (status == 1) {
  setInterval(timer, 1000);
  kamscore = localStorage.getItem("kamscore");
  kamscxre = +kamscore + 1;
  localStorage.setItem('kamscore', kamscxre);
  document.getElementById("nsm").innerHTML=`You passed! Redirecting to the next stage in <timer id="td">5</timer>...`;
};
  if (status == 2) {
  localStorage.setItem('kamstatusn', 1);
  setInterval(timer, 1000);
  document.getElementById("nsm").innerHTML=`You failed. You are now banned. Redirecting in <timer id="td">5</timer>...`;
   
};
  
};