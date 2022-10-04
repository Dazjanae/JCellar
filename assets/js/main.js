/* When the submit button is clicked a pop up will appear
 user will need to click okay to remove the pop up */

 document.querySelector('.submitButton').addEventListener('click',reservationConfirm)

 function reservationConfirm(){
    if (document.querySelector('.inputHere').value && document.querySelector('.inputHere1').value && document.querySelector('.inputHere2').value && document.querySelector('.inputHere3').value && document.querySelector('.inputHere4').value){
     alert('Reservation Confirmed')
    }else {
        alert('Please fill in the blank(s)')
    }
 }

