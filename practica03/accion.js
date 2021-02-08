$(function () {
    $("#añadir").on("click", function (e) {
        $texto = $("#text").val().trim();
        if ($texto != "") {
            $("#lista").append("<div><p>"+$texto+"</p> <button class='quitar'>quitar</button> <button class='subir'>subir</button> <button  class='bajar'>bajar</button></div>")
        }
        $texto = $("#text").val("");
    });
    
    $("body").on("click", ".quitar", function (e) {
        $(e.currentTarget).parent().remove();
        $(e.currentTarget).remove();
    });
 
    $("body").on("click",".subir",function(e){
        $sel = $(e.currentTarget).parent();
        $herSup = $($sel).prev();
        $($herSup).before($sel);
    });
    $("body").on("click",".bajar",function(e){
        $sel = $(e.currentTarget).parent();
        $herInf = $($sel).next();
        $($herInf).after($sel);
    });

    $("body").on("click","p",function(e){
        $padre = $(e.target).parent();
        $("#lista").prepend($padre);
        console.log($(e.target))
     
    });
});