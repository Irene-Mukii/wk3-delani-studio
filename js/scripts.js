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
    $(".img").hover(function(){
        $('.title',this).slideToggle(300)
     }, function(){
     $('.title',this).slideToggle(100);
     });
});
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