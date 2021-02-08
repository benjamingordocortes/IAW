 $( function (){
    let $esconder = "no"
    $("article").on("mouseenter",function(e){
        $(e.currentTarget).find(".contenido").addClass("mostrar");
        $(e.currentTarget).css("background-color","#422721")
    })
    $("article").on("mouseleave",function(e){
        $(e.currentTarget).find(".contenido").removeClass("mostrar");
        $(e.currentTarget).css("background-color","transparent")
    })

    $("#ojo").on("click",function(){ 
        if($("#ojo").attr("src") == "img/ojo.png"){
            $(".contenido").addClass("mostrar");
            $("#ojo").attr("src","img/ojo2.png")
            $("article").css("background-color","#422721")
        }else{
            $(".contenido").removeClass("mostrar")
            $("#ojo").attr("src","img/ojo.png")
            $("article").css("background-color","transparent")
        }
    });
    $("#esconder").on("click",function() { 
        if($esconder == "no"){
            $("main").css({
                "top":"100%",
                "transition":"2s"
            });
            $("#esconder").attr("src","img/arriba.png")
            $esconder = "si";
        }else{
            $("main").css({
                "top":"0",
                "transition":"2s"
            });
            $("#esconder").attr("src","img/abajo.png")
            $esconder = "no";
        }
     });
     $("#ver").on("click",function(e){
         e.preventDefault;
         $("#capa").css("display","none")
     })

})