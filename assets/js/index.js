$(document).ready(function(){
    
    $("a").click(function (event) {
        event.preventDefault();

        // el this.hash es el valor de href
        var gato = this.hash; 

        $("html").animate(
            {
                scrollTop: gato !== '#inicio' ? $(gato).offset().top - 58.5 : $(gato).offset().top - 98,
            },
            800,
        );
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});