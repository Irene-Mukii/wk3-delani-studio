$(document).ready(function(){
    //let whatWeDo = ['design', 'development', 'product']
    $(".clickable-design").click(function(){
        $("#design-showing").toggle();
        $("#design-hidden").toggle();
    })
    $(".clickable-development").click(function(){
        $("#development-showing").toggle();
        $("#development-hidden").toggle();
    })
    $(".clickable-product").click(function(){
        $("#product-showing").toggle();
        $("#product-hidden").toggle();
    })
})