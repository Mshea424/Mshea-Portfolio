document.querySelector(`#about-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#about`).style.display = `block`;
 })

document.querySelector(`#skills-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#skills`).style.display = `flex` })

document.querySelector(`#projects-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#projects`).style.display = `flex` })

document.querySelector(`#contact-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#contact`).style.display = `block` })