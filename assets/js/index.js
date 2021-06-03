$(document).ready(function(){
    
    $("a").click(function (event) {
        event.preventDefault();

        // el this.hash es el valor de href
        var gato = this.hash; 

        $("html").animate(
            {
                scrollTop: $(gato).offset().top - 58.5,
            },
            800,
        );
    });
});