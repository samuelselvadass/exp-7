$(document).ready(function(){

    function change() { 
        let amount = parseInt($('#amount').val()) 
        let roomRent =  parseInt($('#inRoomRent').val())
        let accessories =parseInt($('#inAccessories').val())
        let emergency = parseInt($('#inEmergency').val())
        let saving = parseInt($('#inSaving').val())
    
        console.log(amount);
        $('#roomRent').text('Rs.'+ parseInt((amount/roomRent))) 
        $('#accessories').text('Rs.'+parseInt((amount/accessories)))
        $('#emergency').text('Rs.'+parseInt((amount/emergency)))
        $('#saving').text('Rs.'+parseInt((amount/saving))) 
     }
    $('#trigger').click(change)

    
})