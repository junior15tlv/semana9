jQuery(document).ready(function(){

    jQuery(".btn-enviar").click(function(){
        jQuery.ajax({
            type: 'POST',
            url: 'prueba.php',
            data: {
                'numero1': 10,
                'numero2': 15,
            },
            beforeSend : function () {
         
            },
            success: function (data) {
                jQuery(".respuesta").html(data);
            },
            error : function (jqXHR, textStatus, errorThrown) {
                jQuery(".respuesta").html(jqXHR.responseText + ' :: ' + textStatus + ' :: ' + errorThrown);
                console.log(jqXHR);
            },
        });
    });
    jQuery("li.item-pestana").click(function(){
        var indicador = jQuery(this).index();
        if(!jQuery(this).hasClass("activado"))
        {
            jQuery("li.item-pestana").removeClass("activado");
            jQuery(this).addClass("activado");
        }

        jQuery(".contenido-item-pestana").removeClass("activado");
        jQuery(".contenido-item-pestana").eq(indicador).addClass("activado");
    });
});