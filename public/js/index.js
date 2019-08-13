$(window).ready(function () {
    let flag = true;
    change()
    function change(){
        if (flag){
            $('.hh-container-songs').show()
            $('.hh-container-sigle').hide()
        } else{
            $('.hh-container-songs').hide()
            $('.hh-container-sigle').show()
            $('#audio').show()
        }
    }
    function load(str){
        $('#audio').attr("src","/music/" + str + ".mp3");
        var myAudio = document.getElementById('audio');
        myAudio.play()
    }
    $('.backHead').click(function () {
        flag = true;
        change()
    })
    $('.hh-container-songs li').click(function () {
        let str = $(this).html();
        $(".hh-container-sigle img").attr("src","/img/" + str.split('-')[1] + ".jpg")
        $('.hh-container-sigle p').html(str)
        load(str);
        flag = false;
        change()
    })
})