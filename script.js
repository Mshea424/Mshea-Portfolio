document.querySelector(`#about-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#skills-tab`).className = `nav-tab`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#projects-tab`).className = `nav-tab`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#contact-tab`).className = `nav-tab`;

    document.querySelector(`#about`).style.display = `block`;
    document.querySelector(`#about-tab`).className = `left-tab-active`
})

document.querySelector(`#skills-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#about-tab`).className = `nav-tab`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#projects-tab`).className = `nav-tab`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#contact-tab`).className = `nav-tab`;
    
    document.querySelector(`#skills`).style.display = `flex`;
    document.querySelector(`#skills-tab`).className = `middle-tab-active`
})

 document.querySelector(`#projects-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#skills-tab`).className = `nav-tab`;
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#about-tab`).className = `nav-tab`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#contact-tab`).className = `nav-tab`;
    
    document.querySelector(`#projects`).style.display = `flex`;
    document.querySelector(`#projects-tab`).className = `middle-tab-active`
})

 document.querySelector(`#contact-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#skills-tab`).className = `nav-tab`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#projects-tab`).className = `nav-tab`;
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#about-tab`).className = `nav-tab`;
    
    document.querySelector(`#contact`).style.display = `block`;
    document.querySelector(`#contact-tab`).className = `right-tab-active`
})
