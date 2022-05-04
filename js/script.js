//desktop and tablet details planet buttons paragrpah and images of planet

const buttonsDetailsMobile = document.querySelector('.nav__info').querySelectorAll('a');
const buttonsDetails = document.querySelector('.hero__buttons').querySelectorAll('a');
const buttonDetails = document.querySelector('.hero__buttons');
const planetTxt = document.querySelector('.hero__text--column').querySelectorAll('p');
const heroImage = document.querySelector('.hero__image');
const heroPlanetSection = document.querySelector('.hero__planet');
const geoHiddenElem = document.querySelector('.hero__planet--geo');
const planetImages = document.querySelectorAll('.hero__image');
const geoPlanetImg = document.querySelector('.hero__planet--geo');
const allButtons = document.querySelectorAll('a')

console.log(buttonsDetails);
console.log(buttonDetails.classList[0])



function getClicked() {
    let clickedButtonClass = this.classList[0];
    for (i=0; i<planetTxt.length; i++) {
        if (planetTxt[i].classList.contains(clickedButtonClass) && planetImages[i].classList.contains(clickedButtonClass)) {
            planetTxt[i].classList.remove('invisible')
            planetImages[i].classList.remove('invisible')
        } else {
            planetTxt[i].classList.add('invisible')
            planetImages[i].classList.add('invisible')
        }
    }
    if (buttonDetails.classList.contains('mercure')){
    for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--mercure');
            this.classList.add('active--mercure');
        }
    } else if (buttonDetails.classList.contains('venus')) {
        for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--venus');
            this.classList.add('active--venus');
        }
    } else if (buttonDetails.classList.contains('earth')) {
        for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--earth');
            this.classList.add('active--earth');
        }
    } else if (buttonDetails.classList.contains('mars')) {
        for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--mars');
            this.classList.add('active--mars');
        }
    } else if (buttonDetails.classList.contains('jupiter')) {
        for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--jupiter');
            this.classList.add('active--jupiter');
        }
    } else if (buttonDetails.classList.contains('saturn')) {
        for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--saturn');
            this.classList.add('active--saturn');
        }
    } else if (buttonDetails.classList.contains('uranus')) {
        for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--uranus');
            this.classList.add('active--uranus');
        }
    } else if (buttonDetails.classList.contains('neptune')) {
        for (let i=0; i<buttonsDetails.length; i++) {
            buttonsDetails[i].classList.remove('active--neptune');
            this.classList.add('active--neptune');
        }
    }
    if (this === buttonsDetails[2]) {
        geoPlanetImg.classList.remove('invisible')
    } else {
        geoPlanetImg.classList.add('invisible')
    }
}




buttonsDetails.forEach(function(elem){
    elem.addEventListener('click', getClicked)
})




//bottom buttons

const bottomButtons = document.querySelector('.hero__buttons--bottom').querySelectorAll('a');
const bottomButtonsBox = document.querySelector('.hero__buttons--bottom');
const detailsText = document.querySelector('.hero__planet--details');
const heroPlanetDetails = document.querySelectorAll('.hero__planet--details');



function getClickedBottomBtn() {
    let clickedButtonClass = this.classList[0]
    let rotationTimeBtn = bottomButtons[0];
    let revolutionTimeBtn = bottomButtons[1];
    let radiusBtn = bottomButtons[2];
    let averageTempBtn = bottomButtons[3];
    for (i=0; i<=planetTxt.length; i++) {
        if (heroPlanetDetails[i].classList.contains(clickedButtonClass)) {
            heroPlanetDetails[i].classList.remove('invisible')
        } else {
            heroPlanetDetails[i].classList.add('invisible')
        }
    }
    if (bottomButtonsBox.classList.contains('mercure')){
        for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--mercure');
                this.classList.add('active--mercure');
            }
        } else if (bottomButtonsBox.classList.contains('venus')) {
            for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--venus');
                this.classList.add('active--venus');
            }
        } else if (bottomButtonsBox.classList.contains('earth')) {
            for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--earth');
                this.classList.add('active--earth');
            }
        } else if (bottomButtonsBox.classList.contains('mars')) {
            for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--mars');
                this.classList.add('active--mars');
            }
        } else if (bottomButtonsBox.classList.contains('jupiter')) {
            for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--jupiter');
                this.classList.add('active--jupiter');
            }
        } else if (bottomButtonsBox.classList.contains('saturn')) {
            for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--saturn');
                this.classList.add('active--saturn');
            }
        } else if (bottomButtonsBox.classList.contains('uranus')) {
            for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--uranus');
                this.classList.add('active--uranus');
            }
        } else if (bottomButtonsBox.classList.contains('neptune')) {
            for (let i=0; i<bottomButtons.length; i++) {
                bottomButtons[i].classList.remove('active--neptune');
                this.classList.add('active--neptune');
            }
    }
}

bottomButtons.forEach(function(elem){
    elem.addEventListener('click', getClickedBottomBtn);
})


//mobile hamburger navigation

const hamburger = document.querySelector('#hamburger');
const navInfo = document.querySelector('.nav__info');
const hero = document.querySelector('.hero');
const mobileNav = document.querySelector('.nav__mobile')
const heroPlanetImages = document.querySelector('.hero__image--container').querySelectorAll('img')

console.log(navInfo)

hamburger.addEventListener('click', function(){
    if (!mobileNav.classList.contains('active')) {
    navInfo.style.display = 'none';
    hero.style.display = 'none';
    mobileNav.style.display = 'block';
    mobileNav.classList.add('active')
    } else {
    navInfo.style.display = 'flex';
    hero.style.display = 'block';
    mobileNav.style.display = 'none';
    mobileNav.classList.remove('active')
    }

})

//mobile details buttons

function getClickedMobile() {
    let clickedButtonClass = this.classList[0];
    const overviewBtnMobile = buttonsDetailsMobile[0];
    const structureBtnMobile = buttonsDetailsMobile[1]
    const surfaceBtnMobile = buttonsDetailsMobile[2]
    for (let i=0; i<heroPlanetImages.length; i++) {
        heroPlanetImages[i].classList.add('invisible')
    }
    if (this === overviewBtnMobile) {
        heroPlanetImages[0].classList.remove('invisible')
        geoHiddenElem.style.display = 'none';
    } else if (this === structureBtnMobile) {
        heroPlanetImages[1].classList.remove('invisible')
        geoHiddenElem.style.display = 'none';
    } else if (this === surfaceBtnMobile) {
        heroPlanetImages[2].classList.remove('invisible')
        geoHiddenElem.style.display = 'block';
    }
    for (i=0; i<planetTxt.length; i++) {
    buttonsDetailsMobile[i].classList.remove('active--mercure--mobile');
    this.classList.add('active--mobile')
    }
    for (i=0; i<planetTxt.length; i++) {
        if (planetTxt[i].classList.contains(clickedButtonClass)) {
            planetTxt[i].classList.remove('invisible')
        } else {
            planetTxt[i].classList.add('invisible')
        }
    }
}

buttonsDetailsMobile.forEach(function(elem){
    elem.addEventListener('click', getClickedMobile)
})


