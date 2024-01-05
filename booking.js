const seats = document.querySelectorAll('.seat');
const book = document.querySelector('#booktkt');
const newmbody = document.querySelector('.new-mbody');
const bookingpage = document.querySelector('.booking-summary-page');
const paymentpage = document.querySelector('.payment-page');
const times = document.querySelectorAll('.time');
const edit = document.querySelector('.edit');
const movname = document.querySelector('.movname');
const date = document.querySelector('.Date');
const pay = document.querySelector('.pay');
const payed = document.querySelector('#payamount');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let dd = document.getElementById('dd');
let mm = document.getElementById('mm');
let yy = document.getElementById('yy');
let cname = document.getElementById('cname');
let cvc = document.getElementById('cvc');

let sumseat = document.getElementById('snumber');
let sumtime = document.getElementById('showtime');
let sumprice = document.getElementById('totprice');
let sumname = document.getElementById('mname');
let sumdate = document.getElementById('getdate');



const selectedSeats = [];
let totalseats;
let selectedTime;
let index;
let price;
let totprice;
for (const seat of seats) {
  for (const time of times) {

    seat.addEventListener('click', function () {
      const seatNumber = seat.getAttribute('data-seat');
      if (!seat.classList.contains('selected')) {
        seat.classList.add('selected');
        selectedSeats.push(seatNumber);
      }
      
      else {
        seat.classList.remove('selected');
        index = selectedSeats.indexOf(seatNumber);
        selectedSeats.splice(index, 1);
      }




      price = index * 100 + 100;
      totprice = price + price * 0.18;


      time.addEventListener('click', function () {
        time.style.background = "rgba(128, 128, 128, 0.395)";
        selectedTime = time.getAttribute('data-time');
        const currentTimeButton = document.querySelector('.time.selected');
        if (currentTimeButton) {
          currentTimeButton.classList.remove('timeselected');
        }
        time.classList.add('timeselected');
        selectedTime = time.getAttribute('data-time');




        book.addEventListener('click', function () {
          sumseat.innerHTML = `${selectedSeats.join(', ')}`;
          sumtime.innerHTML = `${selectedTime}`;
          sumname.innerHTML = movname.getAttribute('data-movname');
          sumdate.innerHTML = date.value;
          sumprice.innerHTML = totprice + ' Rs.';
          document.querySelector('#no-of-tickets').textContent = index + 1;
          document.querySelector('#price').textContent = price + ' Rs.';
          document.querySelector('#payamount').textContent = 'PAY ' + totprice + ' Rs.';
          console.log(sumname.innerHTML);
          
          if (date.value == '') {
            alert('Select date');
          }
          else {
            newmbody.style.display = 'none';
            bookingpage.style.display = 'block';
          }

          localStorage.setItem('SUMSEAT',sumseat.innerHTML);
          localStorage.setItem('SUMTIME',sumtime.innerHTML);
          localStorage.setItem('SUMPRICE',sumprice.innerHTML);
          localStorage.setItem('SUMNAME',sumname.innerHTML);
          localStorage.setItem('SUMDATE',sumdate.innerHTML);

        })
      })

    })

  }
}
          
pay.addEventListener('click', function () {
  newmbody.style.display = 'none';
  bookingpage.style.display = 'none';
  paymentpage.style.display = 'block';

})
edit.addEventListener('click', function () {
  newmbody.style.display = 'block';
  bookingpage.style.display = 'none';

})
payed.addEventListener('click', function () {
  if (fname.value == '' || lname.value == '' || dd.value == '' || mm.value == '' || yy.value == '' || cname.value == '' || cvc.value == '') {
    alert('Enter correct details');
  }
  else {
    alert('Payment Successfull');
  }
  



})

