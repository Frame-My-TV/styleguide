// Floating lable example
// https://github.com/geminilabs/float-labels.js

var floatlabels = new FloatLabels( 'form', {
    style: 2,
});

// Tabs example
$(function() {
  $(".product-tab").click(function() {
    $(".product-tab").removeClass("is-active")
    $(this).addClass("is-active");
  });
});
