"use strict";

const column = document.querySelector('.districts');
const links = column.querySelectorAll('a');

const footer = document.querySelector('.footer');

const districtDescription = document.createElement('div');
districtDescription.classList.add("overlay");


const inner = ({src,descriptionHeader,descriptionInfo}) =>{
    districtDescription.style.display = 'block'; 
    districtDescription.innerHTML = `<div class="description">
                                        <img src="${src}" alt="">
                                        <div class="description-header">${descriptionHeader}</div> 
                                        <div class="description-info">${descriptionInfo}</div>
                                    </div>`
    footer.after(districtDescription);                               
    setTimeout(() => {
        districtDescription.style.opacity = "1"; 
    }, 300)
}

const clear = () => {
    districtDescription.style.opacity = "0"; 
    districtDescription.innerHTML ='';
    districtDescription.style.display = 'none';
}

const districtObj = {
    districts : [
        {src: "../img/district.png", descriptionHeader: "Северный парк", descriptionInfo: "Жилой комплекс небывалого масштаба с развитой инфраструктурой"},
        {src: "../img/district.png", descriptionHeader: "Станция Столичная", descriptionInfo: "Современный, стремительно развивающийся жилой комплекс. Он возводится в экологически чистом районе на юго-востоке Петергофа."},
        {src: "../img/district.png", descriptionHeader: "Лето", descriptionInfo: "Вдали от шума и пыли городских улиц. Для тех, кто ценит чистоту, уют и комфорт без лишнего пафоса"},
        {src: "../img/district.png", descriptionHeader: "Сказочный сад", descriptionInfo: "Жилой комплекс имеет географически выгодное местоположение в непосредственной близости от нагорной части города и рядом с основными автомобильными развязками"},
        {src: "../img/district.png", descriptionHeader: "Краски", descriptionInfo: "Уникальная среда для жизни, где сочетаются возможности большого города и загородный комфорт."},
        {src: "../img/district.png", descriptionHeader: "Ренессанс", descriptionInfo: "Жилой комплекс возводится на 13,75 га и расположен в одном из наиболее престижных и экологически чистых районов."},
        {src: "../img/district.png", descriptionHeader: "Компасс сити", descriptionInfo: "Жилой комплекс имеет удачное расположение и социальное окружение."},
        {src: "../img/district.png", descriptionHeader: "Бруклин", descriptionInfo: "Жилой — это эко-квартал, который находится в сосновом бору "},
        {src: "../img/district.png", descriptionHeader: "Монблан", descriptionInfo: "Жилой комплекс с замечательной и новейшей инфраструктурой"},
    ]
}

links.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        districtObj.districts.forEach((district, index) =>
        district.descriptionHeader === e.target.parentNode.textContent
        ? inner(districtObj.districts[index])
        : index++
        )
    })
})

links.forEach(link => {
    link.addEventListener('mouseout', () => {
        clear();
    })
})
