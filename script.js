const left_btn=document.getElementById('lbtn');
const right_btn=document.getElementById('rbtn');
const cards=document.getElementById('cd');

left_btn.addEventListener('click', function(){
        cards.scrollLeft -=200;
})
right_btn.addEventListener('click', function(){
    cards.scrollLeft +=200;
})




