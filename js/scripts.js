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
    $("#img1").hover(function(){
        $(this).find('#title1').fadeIn(300);
    }, function() {
        $(this).find('#title1').fadeOut(100);
    });
    $("#img2").hover(function(){
        $(this).find('#title2').fadeIn(300);
    }, function() {
        $(this).find('#title2').fadeOut(100);
    });
    $("#img3").hover(function(){
        $(this).find('#title3').fadeIn(300);
    }, function() {
        $(this).find('#title3').fadeOut(100);
    });
    $("#img4").hover(function(){
        $(this).find('#title4').fadeIn(300);
    }, function() {
        $(this).find('#title4').fadeOut(100);
    });
    $("#img5").hover(function(){
        $(this).find('#title5').fadeIn(300);
    }, function() {
        $(this).find('#title5').fadeOut(100);
    });
    $("#img6").hover(function(){
        $(this).find('#title6').fadeIn(300);
    }, function() {
        $(this).find('#title6').fadeOut(100);
    });
    $("#img7").hover(function(){
        $(this).find('#title7').fadeIn(300);
    }, function() {
        $(this).find('#title7').fadeOut(100);
    });
    $("#img8").hover(function(){
        $(this).find('#title8').fadeIn(300);
    }, function() {
        $(this).find('#title8').fadeOut(100);
    });

    
})
function submission(event){
    
    let name=$('NAME').val();
    let email=$('EMAIL').val();
    let message=$('MESSAGE').val();

    if (name==='' || email===''||message===''){
        alert('ERROR!PLEASE CHECK YOUR INFORMATION')
    }else{
        alert('THANK YOU FOR REACHING OUT. WE WILL GET BACK TO YOU SOON!');
    }  
};