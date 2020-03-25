$(document).ready(function () { 
    $(".services-block .services-block--btn").hover(function() {
        $(this).parents(".services-block").toggleClass("active"); 
     });
    
    $("#viewBtn").click(function () { 
        $("#worksWrap").css("display","flex");
        $("#viewBtn").css("display","none");
    });

    $("#allBtn").click(function () { 
        $(".ui, .web, .mock").css("display","block");
        $(this).addClass('activeBtn');
        $('#webBtn, #uiBtn, #mockupBtn').removeClass('activeBtn');
     });
    $("#webBtn").click(function () { 
        $(".web").css("display","block");
        $(".ui, .mock").css("display","none");
        $(this).addClass('activeBtn');
        $('#uiBtn, #mockupBtn, #allBtn').removeClass('activeBtn');
     });
    $("#uiBtn").click(function () { 
        $(".ui").css("display","block");
        $(".web, .mock").css("display","none");
        $(this).addClass('activeBtn');
        $('#webBtn, #mockupBtn, #allBtn').removeClass('activeBtn');
     });
    $("#mockupBtn").click(function () { 
        $(".mock").css("display","block");
        $(".web, .ui").css("display","none");
        $(this).addClass('activeBtn');
        $('#webBtn, #uiBtn, #allBtn').removeClass('activeBtn');
     });
    
    
    
    $(".pricing-block").hover(function() {
        $(this).toggleClass("pricing-active--block"); 
     });


    $('.team-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrow: false,        
        responsive: [
            {
              breakpoint: 996,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }                     
          ]
      
    });



 });