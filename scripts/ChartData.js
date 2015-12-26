var JS = [
      {
    value: 65,
    color:"#8e24aa"
  },
  {
    value : 35,
    color : "#e9e9e9"
  },

      ];
var CSS = [
      {
    value: 90,
    color:"#8e24aa"
  },
  {
    value : 10,
    color : "#e9e9e9"
  },
        

      ];
var DB = [
        {
    value: 70,
    color:"#8e24aa"
  },
  {
    value : 30,
    color : "#e9e9e9"
  },
        

      ];

var options = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke : true,
  
  //String - The colour of each segment stroke
  segmentStrokeColor : "#fff",
  
  //Number - The width of each segment stroke
  segmentStrokeWidth : 2,
  
  //The percentage of the chart that we cut out of the middle.
  percentageInnerCutout : 60,
  
  //Boolean - Whether we should animate the chart 
  animation : true,
  
  //Number - Amount of animation steps
  animationSteps : 100,
  
  //String - Animation easing effect
  animationEasing : "easeOutQuart",
  
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate : true,

  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale : false,
  
  //Function - Will fire on animation completion.
  onAnimationComplete : null
}

    /*  window.onload = function(){
        var ctx = document.getElementById("chart-area").getContext("2d");
      //  var ctx1 = document.getElementById("chart-areaa").getContext("2d");
        //var ctx2 = document.getElementById("chart-areaaa").getContext("2d");
        window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
          //window.myDoughnut = new Chart(ctx1).Doughnut(doughnutData, {responsive : true});
          //window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData, {responsive : true});
      };*/

window.onload=function(){
var js = new Chart(document.getElementById("js").getContext("2d")).Doughnut(JS, options);
var css = new Chart(document.getElementById("css").getContext("2d")).Doughnut(CSS, options);
var db = new Chart(document.getElementById("db").getContext("2d")).Doughnut(DB, options);




};
