var scatchart = c3.generate({
  data: {
      url: 'data.csv',
      type: 'scatter',
  },
});


//This is the timeseries
var chart = c3.generate({
  data: {
      url: 'data.csv',
      type: 'line',
  },
  axis: {
    x:{label: 'time'},
    y:{label: 'random'}  
  }
});
