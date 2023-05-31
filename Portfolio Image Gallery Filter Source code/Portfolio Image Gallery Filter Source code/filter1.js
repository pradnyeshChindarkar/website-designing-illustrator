let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;
for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}

let sortBtn1 = document.querySelector('.filter-menu1').children;
let sortItem1 = document.querySelector('.filter-item1').children;


for(let i = 0; i < sortBtn1.length; i++){
    sortBtn1[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn1.length; j++){
            sortBtn1[j].classList.remove('current1');
        }

        this.classList.add('current1');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem1.length; k++){
            sortItem1[k].classList.remove('active');
            sortItem1[k].classList.add('delete');

            if(sortItem1[k].getAttribute('data-item') == targetData){
                sortItem1[k].classList.remove('delete');
                sortItem1[k].classList.add('active');
            }
        }
    });
}


// =========================================================

let sortBtn2 = document.querySelector('.filter-menu2').children;
let sortItem2 = document.querySelector('.filter-item2').children;


for(let i = 0; i < sortBtn2.length; i++){
    sortBtn2[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn2.length; j++){
            sortBtn2[j].classList.remove('current2');
        }

        this.classList.add('current2');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem2.length; k++){
            sortItem2[k].classList.remove('active');
            sortItem2[k].classList.add('delete');

            if(sortItem2[k].getAttribute('data-item') == targetData){
                sortItem2[k].classList.remove('delete');
                sortItem2[k].classList.add('active');
            }
        }
    });
}

// =================================================================

let sortBtn3 = document.querySelector('.filter-menu3').children;
let sortItem3 = document.querySelector('.filter-item3').children;


for(let i = 0; i < sortBtn3.length; i++){
    sortBtn3[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn3.length; j++){
            sortBtn3[j].classList.remove('current3');
        }

        this.classList.add('current2');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem3.length; k++){
            sortItem3[k].classList.remove('active');
            sortItem3[k].classList.add('delete');

            if(sortItem3[k].getAttribute('data-item') == targetData){
                sortItem3[k].classList.remove('delete');
                sortItem3[k].classList.add('active');
            }
        }
    });
}

// ==========================================================

let sortBtn4 = document.querySelector('.filter-menu4').children;
let sortItem4 = document.querySelector('.filter-item4').children;


for(let i = 0; i < sortBtn4.length; i++){
    sortBtn4[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn4.length; j++){
            sortBtn4[j].classList.remove('current4');
        }

        this.classList.add('current4');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem4.length; k++){
            sortItem4[k].classList.remove('active');
            sortItem4[k].classList.add('delete');

            if(sortItem4[k].getAttribute('data-item') == targetData){
                sortItem4[k].classList.remove('delete');
                sortItem4[k].classList.add('active');
            }
        }
    });
}

// ================================================


let sortBtn5 = document.querySelector('.filter-menu5').children;
let sortItem5 = document.querySelector('.filter-item5').children;


for(let i = 0; i < sortBtn5.length; i++){
    sortBtn5[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn5.length; j++){
            sortBtn5[j].classList.remove('current5');
        }

        this.classList.add('current5');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem5.length; k++){
            sortItem5[k].classList.remove('active');
            sortItem5[k].classList.add('delete');

            if(sortItem5[k].getAttribute('data-item') == targetData){
                sortItem5[k].classList.remove('delete');
                sortItem5[k].classList.add('active');
            }
        }
    });
}
// =============================================

let sortBtn6 = document.querySelector('.filter-menu6').children;
let sortItem6 = document.querySelector('.filter-item6').children;


for(let i = 0; i < sortBtn6.length; i++){
    sortBtn6[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn6.length; j++){
            sortBtn6[j].classList.remove('current6');
        }

        this.classList.add('current6');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem6.length; k++){
            sortItem6[k].classList.remove('active');
            sortItem6[k].classList.add('delete');

            if(sortItem6[k].getAttribute('data-item') == targetData){
                sortItem6[k].classList.remove('delete');
                sortItem6[k].classList.add('active');
            }
        }
    });
}

console.log("hiii")