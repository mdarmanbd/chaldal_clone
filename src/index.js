

$(document).ready(function(){
    $('#navicon').on('click',function(){
        $('#navmenu').animate({width:'toggle'});
    })

    $('#foodmenu').on('click',function(){
        $('#foodmenu .submenu').toggle();
    });

    $('#babymenu').on('click',function(){
        $('#babymenu .submenu').toggle();
    });

    $('#slideOnebtn').on('click',function(){
        $('#slid01').removeClass('hidden');
        $('#slid02').addClass('hidden');
    });

    $('#slideTwobtn').on('click',function(){
        $('#slid02').removeClass('hidden');
        $('#slid01').addClass('hidden');
     });

     let count = 0;
     let count1 = 0;
     let count2 = 0;
     let itemPrice = 0;
    //  col 1

     $('#btnIncriment').on('click',function(){
        count++;
        $('#addBeg').text(count);
        let price =  parseInt($('#price').text()); 
        itemPrice = itemPrice + (count * price);
         $('#totalPrice').text(itemPrice);
         console.log(itemPrice);
     });
     $('#btnDeriment').on('click',function(){
        count--;
        if(count < 0){
            count = 0;
            $('#addBeg').text(count);
        }else{
            $('#addBeg').text(count);
            let price =  parseInt($('#price').text()); 
            itemPrice = itemPrice - (count * price);
            $('#totalPrice').text(itemPrice);
            console.log(itemPrice);
        }
     });

    // col 2

     $('#incrementTea').on('click',function(){
        count1++;
        $(this).parent().find('p').text(count1);
        let teaPrice = parseInt($('#teaprice').text());
        itemPrice = itemPrice + (count * teaPrice);
        $('#totalPrice').text(itemPrice);
        console.log(itemPrice);
     });

     $('#decrementTea').on('click',function(){
        count1--;
        if(count1 < 0){
            count1 = 0;
            $(this).parent().find('p').text(count1);
        }else{
            $(this).parent().find('p').text(count1);
            let teaPrice = parseInt($('#teaprice').text());
             itemPrice = itemPrice - (count1 * teaPrice);
            $('#totalPrice').text(itemPrice);
        }
     });

     // col 3 
        $('#incrementGlo').on('click',function(){
            count2++;
            $(this).parent().find('p').text(count2);
            let gloPrice = parseInt($('#gloPrice').text());
             itemPrice = itemPrice + (count2 * gloPrice);
            $('#totalPrice').text(itemPrice);
            console.log(itemPrice);
        });

        $('#decrementGlo').on('click',function(){
            count2--;
            if(count2 < 0){
                count2 = 0;
                $(this).parent().find('p').text(count2);
            }else{
                $(this).parent().find('p').text(count2);
                let gloPrice = parseInt($('#gloPrice').text());
                itemPrice = itemPrice - (count2 * gloPrice);
                $('#totalPrice').text(itemPrice);
            }
         });
        
         let slideCount = 0;
         setInterval(function(){
            slideCount++;
            let slider = $('.slider');
            slider.toggleClass('current');
            slider.next().toggleClass('current');
            // console.log(slideCount);
            // slider.removeClass('current');
            //     if(slideCount > slider.length){
            //         slider.addClass('current');
            //         slideCount = 0;
            //     }else{
            //         slider.next().addClass('current');
            //     }
           
         },2000);


        //  let count2 = 0;
        //  let count3 = 0;
        //  $('.incrementTea').on('click', function(){
        //         $(this).each(function(){
        //             console.log($(this).parent().find('p').text(count2++));
        //         });
        //         $(this).each(function(){
        //             console.log($(this).parent().find('h2').text('red'));
        //         });
        //  })


  
})