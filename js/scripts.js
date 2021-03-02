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
        $('.title',this).show(300)
     }, function(){
     $('.title',this).hide(100);
     });
});
function submission(event){
    
    let name=document.getElementsByName('FNAME').values;
    let email=document.getElementsByName('EMAIL').values;
    let message=document.getElementsByName('MESSAGE').values;
    console.log(name,email,message);
    if (name==='' || email===''||message===''){
        alert('ERROR!PLEASE CHECK YOUR INFORMATION')
        document.getElementById("mc-embedded-subscribe-form").reset();
    }else{
        alert('THANK YOU FOR REACHING OUT. WE WILL GET BACK TO YOU SOON!');
        document.getElementById("mc-embedded-subscribe-form").reset();
    }  
};