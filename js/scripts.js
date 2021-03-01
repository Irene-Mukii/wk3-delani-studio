$(document).ready(function(){
    $(".clickable-design").click(function(){
        $("#design-img").toggle();
        $("#design-showing").toggle();
        $("#design-hidden").toggle();
    })
    $(".clickable-development").click(function(){
        $("#dev-img").toggle();
        $("#development-showing").toggle();
        $("#development-hidden").toggle();
    })
    $(".clickable-product").click(function(){
        $("#prod-img").toggle();
        $("#product-showing").toggle();
        $("#product-hidden").toggle();
    })
    $(document).ready(function(){
        $("#img8").hover(function(){
            $(this).find('#title').fadeIn(300);
        }, function() {
            $(this).find('#title').fadeOut(100);
        });
      });
})
function getInput(event){
    event.preventDefault()
    alert('THANK YOU FOR CONTACTING US, WE WILL GET BACK TO YOU SHORTLY');
};