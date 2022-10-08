"use strict";

const roomButtons = document.querySelector('.buttons');
const btns = roomButtons.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btns.forEach(item => {
            if(item.classList.contains('active')) {
                item.classList.remove('active');
            }
        })
        e.target.classList.add('active');
    })
});

const square = document.querySelector('.square');
const price = document.querySelector('.price');
const inputs = document.querySelectorAll('.input-wrap');

const minSquareInput = inputs[0].querySelector('input');
const maxSquareInput = inputs[1].querySelector('input');
const minPriceInput = inputs[2].querySelector('input');
const maxPriceInput = inputs[3].querySelector('input');

const minAvailableSquare = 32;
const maxAvailableSquare = 186;
const minAvailablePrice = 1.5;
const maxAvailablePrice = 17.5;

let minSquare = minSquareInput.value = minAvailableSquare;
let maxSquare = maxSquareInput.value = maxAvailableSquare ;
let minPrice = minPriceInput.value = minAvailablePrice;
let maxPrice = maxPriceInput.value = maxAvailablePrice;


const setPolzunok = (selector, min, max) => {
    $( selector ).slider( "values", [ min, max] );
}

minSquareInput.onchange= () => {
    minSquare = +minSquareInput.value;

    if(minSquare > maxSquare) {
        minSquare = minSquareInput.value = +maxSquareInput.value - 1;
    } else if(minSquare > maxAvailableSquare) {
        minSquare = minSquareInput.value = maxAvailableSquare - 1;
    } else if(minSquare < minAvailableSquare) {
        minSquare = minSquareInput.value = minAvailableSquare;
    } else {
        minSquare = +minSquareInput.value;
    }

    setPolzunok(".polzunok-square", minSquare, maxSquare);
}

maxSquareInput.onchange = () => {
    maxSquare = +maxSquareInput.value;

    if(maxSquare < minSquare) {
        maxSquare = maxSquareInput.value = (+minSquareInput.value + 1);
    } else if(maxSquare > maxAvailableSquare) {
        maxSquare = maxSquareInput.value = maxAvailableSquare;
    } else if(maxSquare < minAvailableSquare) {
        maxSquare = maxSquareInput.value = minAvailableSquare + 1;
    } else {
        maxSquare = +maxSquareInput.value;
    }

    setPolzunok(".polzunok-square", minSquare, maxSquare);
}

minPriceInput.onchange= () => {
    minPrice = +minPriceInput.value;

    if(minPrice > maxPrice) {
    minPrice = minPriceInput.value = +maxPriceInput.value - 1;
    } else if(minPrice > maxAvailablePrice) {
    minPrice = minPriceInput.value = maxAvailablePrice - 1;
    } else if(minPrice < minAvailablePrice) {
    minPrice = minPriceInput.value = minAvailablePrice;
    } else {
        minPrice = +minPriceInput.value;
    }
    setPolzunok(".polzunok-price", minPrice, maxPrice);
}

maxPriceInput.onchange = () => {
    maxPrice = +maxPriceInput.value;

    if(maxPrice < minPrice) {
        maxPrice = maxPriceInput.value = +minPriceInput.value + 1;
    } else if(maxPrice > maxAvailablePrice) {
        maxPrice = maxPriceInput.value = maxAvailablePrice;
    } else if(maxPrice < minAvailablePrice) {
        maxPrice = maxPriceInput.value = minAvailablePrice + 1;
    } else {
        maxPrice = +maxPriceInput.value;
    }
    setPolzunok(".polzunok-price", minPrice, maxPrice);
}

$(".polzunok-square").slider({
    min: minAvailableSquare,
    max: maxAvailableSquare,
    values: [minAvailableSquare, maxAvailableSquare],
    range: true,
    animate: "fast",  
});


$( ".polzunok-square" ).slider({
    slide: () => {
        let squares = $( ".polzunok-square").slider( "values" );
        minSquare = minSquareInput.value = squares[0]; 
        maxSquare = maxSquareInput.value = squares[1]; 
    }
});

$(".polzunok-price").slider({
    min: 1.5,
    max: 17.5,
    values: [1.5, 17.5],
    range: true,
    animate: "fast",  
});

$( ".polzunok-price" ).slider({
    slide: () => {
        let prices = $( ".polzunok-price").slider( "values" );
        minPrice = minPriceInput.value = prices[0]; 
        maxPrice = maxPriceInput.value = prices[1]; 
    }
});

const modalWindow = document.createElement('div');
const modal = document.querySelector(".modal")
const footer = document.querySelector('footer');
const findButton = document.querySelector(".show-button");
const clearButton = document.querySelector(".modal-button");
const closeButton = clearButton.querySelector('button');
const options = document.querySelectorAll("option");



modalWindow.classList.add("modal-window");
clearButton.before(modalWindow);

const find = (rooms, minSquare, maxSquare, minPrice, maxPrice, district) => {
    modalWindow.innerHTML = `
                                <div class="modal-header">
                                Вы указали следующие фильтры:
                                <ul>
                                    <li>Количество комнат:${rooms}</li>
                                    <li>Площадь от ${minSquare}  м² до ${maxSquare}  м²</li>
                                    <li>Cтоимось от ${minPrice} млн.р до ${maxPrice} млн.р.</li>
                                    <li>Жилой массив: ${district}</li>
                                </ul>
                            `
    modal.style.display = "block";
}

const clear = () => {
    modal.style.display = "none";
    modalWindow.innerHTML = '';
}

findButton.addEventListener('click', () => {
    let rooms, minSquareFlat, maxSquareFlat, minPriceFlat, maxPriceFlat, selectedDistrict;
    btns.forEach(item => {
        if(item.classList.contains('active')) {
            rooms = item.textContent;
        }
    })
    minSquareFlat = +minSquareInput.value.replace(/,/, '.');
    maxSquareFlat = +maxSquareInput.value.replace(/,/, '.');
    minPriceFlat = +minPriceInput.value.replace(/,/, '.');
    maxPriceFlat = +maxPriceInput.value.replace(/,/, '.');

    options.forEach(option => {
        if(option.selected === true) {
            selectedDistrict = option.value;
        }
    })

    find(rooms, minSquareFlat, maxSquareFlat, minPriceFlat, maxPriceFlat, selectedDistrict);
})

closeButton.addEventListener("click", () => {
    clear();
})


