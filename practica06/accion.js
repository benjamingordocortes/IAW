$(function () {  
    $("#mostrar").on("click",function (e) { 
        $("article").addClass("mostrar");
        $("input").prop('checked',true);
     })
     $("#ocultar").on("click",function(){
        $("article").removeClass("mostrar");
        $("input").prop('checked',false);
     })
     $("input").on("change",function (e) { 
         $id = $(e.currentTarget).attr("id");
         $("[data-pais='"+$id+"']").toggleClass("mostrar")
      })

      $("article").on("click",function(e){
          $data = $(e.currentTarget).data("pais");
          console.log($data)
          if($("#"+$data).prop('checked')){
            $(e.currentTarget).removeClass("mostrar");
            $("#"+$data).prop('checked',false);
          }else{
            $(e.currentTarget).addClass("mostrar");
            $("#"+$data).prop('checked',true);            
          }
      })
})