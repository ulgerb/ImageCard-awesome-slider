$(document).ready(function () {
    
    var card = $(".card");
    var info = $(".info");
    var card_index = card.length-1;
    var i =1;
    var rota = 0;
    
    //Button Right 
    
    function rightButton(){
        $(".btn--right").click(function () { 
            if (i == card_index -1 ) {
                i = -2;
            }
            i +=1
            console.log(i);
            // next
            card.eq(i + 1).show(500);
            card.eq(i + 1).addClass("next--card");
            info.eq(i + 1).addClass("next--info");

            // current
            card.eq(i).removeClass("next--card");
            card.eq(i).addClass("current--card");

            info.eq(i).removeClass("next--info");
            info.eq(i).addClass("current--info");
            
            // prev
            card.eq(i - 1).removeClass("current--card");
            card.eq(i - 1).addClass("previous--card");
            
            info.eq(i - 1).removeClass("current--info");
            info.eq(i - 1).addClass("previous--info");
            
            // hide
            card.eq(i - 2).removeClass("previous--card");
            info.eq(i - 2).removeClass("previous--info");
            card.eq(i - 2).hide(500);

            $(".next--card").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translate(-10%, -50%) translateX(var(--card-translateX-offset)) scale(var(--card-scale-offset)) ";
                }
            })
            $(".previous--card").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translate(-10%, -50%) translateX(var(--card-translateX-offset)) scale(var(--card-scale-offset)) ";
                }
            })
            $(".current--card").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translate(-10%, -50%) translateX(var(--card-translateX-offset)) scale(var(--card-scale-offset)) ";
                }
            })
            mos_event()
            text_event()
            mos_out()   
        });
    }
    //Button Left 
    function leftButton() { 
        $(".btn--left").click(function () {
            if (i == - card_index ) {
                i = 1;
            }
            i -= 1
            // next
            card.eq(i - 1).show(500);
            card.eq(i - 1).addClass("previous--card");
            
            info.eq(i - 1).removeClass("next--info");
            info.eq(i - 1).addClass("previous--info");
            // current
            card.eq(i).removeClass("previous--card");
            card.eq(i).addClass("current--card");
            
            info.eq(i).removeClass("previous--info");
            info.eq(i).addClass("current--info");
            
            // prev
            card.eq(i + 1).removeClass("current--card");
            card.eq(i + 1).addClass("next--card");
            
            info.eq(i + 1).removeClass("current--info");
            info.eq(i + 1).addClass("next--info");
            
            // hide
            card.eq(i + 2).removeClass("next--card");
            card.eq(i + 2).hide(500);
            
            
            $(".next--card").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translate(-10%, -50%) translateX(var(--card-translateX-offset)) scale(var(--card-scale-offset)) ";
                }
            })
            $(".previous--card").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translate(-10%, -50%) translateX(var(--card-translateX-offset)) scale(var(--card-scale-offset)) ";
                }
            })
            $(".current--card").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translate(-10%, -50%) translateX(var(--card-translateX-offset)) scale(var(--card-scale-offset)) ";
                }
            })
            console.log(i);
            mos_event()
            text_event()
            mos_out()
            // var has_current = $(".next--card").hasClass("current--card");
            // console.log(has_current);
        });
    }

    leftButton()
    rightButton()
    mos_event()
    text_event()
    mos_out()

    // text animate
    $(".info").hide(500)
    $(".card").hover(function () {
            // over
            $(".current--info").show(300)

        }, function () {
            // out
            $(".current--info").hide(200)
        }
    );
    
    //card event function
    function mos_event(){
        $(".current--card").mousemove( function mos(e) {
            var location_mouse = e.offsetX;
            var rotate_mouse = location_mouse - 250;
            rota = -(rotate_mouse / 10);
            $(".current--card").css({"transform":function(){
                return "rotateY(" +( rota) +"deg) translate(-10%, -50%) scale(var(--card-scale-offset)) "; 
            }})
        })
    }
    //mouse out
    function mos_out(){
        $(".current--card").mouseleave(function () { 
            $(".current--card").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translate(-10%, -50%) scale(var(--card-scale-offset)) ";
                }
            })     
            $(".current--info").css({
                "transform": function () {
                    return "rotateY(" + 0 + "deg) translateZ(3rem) ";
                }
            }) 
        });
    }
    //text event function
    function text_event() {
  
        $(".current--card").mousemove(function mos(e) {
            var location_mouse = e.offsetX;
            var rotate_mouse = location_mouse - 250;
            rota = -(rotate_mouse / 10);
            $(".current--info").css({
                "transform": function () {
                    return "rotateY(" + (rota) + "deg) translateZ(3rem) ";
                },
                
            })
        })
    }
    
    
});