var $nav = $(".bg-dark");
        $(document).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > $('#home').height());
        });