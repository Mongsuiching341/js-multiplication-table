

const multiplicationForm = document.querySelector('form');
const output = document.querySelector('.output');

multiplicationForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let num = multiplicationForm.num.value;
    multiplicationTable(num);


})



//function of multiplicationtable------------

function multiplicationTable(num) {

    let html = '';

    for (let i = 1; i <= 10; i++) {

        let product = i * num;

        html += `<li class="wow">${num}*${i} = ${product}</li>`

        console.log(`${num}*${i} = ${product}`);
    }


    output.innerHTML = html;

    console.log(html)

}


