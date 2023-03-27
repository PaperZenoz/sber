$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {
    var $timeline = $('.timeline')


    function labelPosition() {
        var $button = $('.js--label-position')


        $button.on('click', function () {
            var $attr = $(this).data(),
                $key = Object.keys($attr)[0],
                $data = $attr[$key]

            if ($key == 'x') {
                $timeline.attr('data-x', $data)
            } else if ($key == 'y') {
                $timeline.attr('data-y', $data)
            }
        })
    }


    function labelQuantity() {
        var $block = $('.js--label-qua'),
            $button = $block.find('button')


        $button.on('click', function () {
            $timeline.empty()
            var $index = $(this).index() + 1


            for (let i = 0; i <= $index; i++) {
                var $step = "<li class='timeline__item'></li>"

                $timeline.append($step)
            }
        })
    }

    function currentStep() {
        var $block = $('.js--label-step'),
            $button = $block.find('button')








        $button.on('click', function () {
            var $index = $(this).index(),
                $steps = $timeline.find('.timeline__item')


            $steps.removeClass('timeline__item--current')
            $steps.removeClass('timeline__item--done')




            $steps.each(function () {


                if ($(this).index() == $index) {



                    $(this).addClass('timeline__item--current')


                } else if ($(this).index() < $index) {
                    $(this).addClass('timeline__item--done')


                }

            })


        })

    }


    labelPosition()
    labelQuantity()
    currentStep()

})
