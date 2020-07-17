function dash() {
    // console.log('dash')
    // console.log(document.querySelector(`#logo1`).style.display)
    if (document.querySelector(`#logo1`).style.display != `none`) {
        // console.log('toggle1')
        document.querySelector(`#logo1`).style.display = `none`
        document.querySelector(`#logo2`).style.display = `block`
    } else { 
        // console.log('toggle2')
        document.querySelector(`#logo1`).style.display = `block`
        document.querySelector(`#logo2`).style.display = `none`
    }
    
}

window.setInterval(dash, 600, '#logo1');

document.querySelector(`#about-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#skills-tab`).className = `nav-tab`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#projects-tab`).className = `nav-tab`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#contact-tab`).className = `nav-tab`;

    document.querySelector(`#about`).style.display = `block`;
    document.querySelector(`#about-tab`).className = `left-tab-active`
    document.querySelector(`#card`).style.height = `500px`
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
    document.querySelector(`#card`).style.height = `500px`
})

 document.querySelector(`#projects-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#skills-tab`).className = `nav-tab`;
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#about-tab`).className = `nav-tab`;
    document.querySelector(`#contact`).style.display = `none`;
    document.querySelector(`#contact-tab`).className = `nav-tab`;
    
    document.querySelector(`#projects`).style.display = `flex`;
    document.querySelector(`#projects-tab`).className = `middle-tab-active`;
    document.querySelector(`#card`).style.height = `800px`
})

 document.querySelector(`#contact-tab`).addEventListener(`click`, () => { 
    document.querySelector(`#skills`).style.display = `none`;
    document.querySelector(`#skills-tab`).className = `nav-tab`;
    document.querySelector(`#projects`).style.display = `none`;
    document.querySelector(`#projects-tab`).className = `nav-tab`;
    document.querySelector(`#about`).style.display = `none`;
    document.querySelector(`#about-tab`).className = `nav-tab`;
    
    document.querySelector(`#contact`).style.display = `flex`;
    document.querySelector(`#contact-tab`).className = `right-tab-active`
    document.querySelector(`#card`).style.height = `500px`
})

document.querySelector(`#cw-card`).addEventListener(`mouseover`, () => { 
    document.querySelector(`#cw-link`).style.display = `flex`; 
})

document.querySelector(`#cw-card`).addEventListener(`mouseout`, () => { 
    document.querySelector(`#cw-link`).style.display = `none`; 
})

document.querySelector(`#ts-card`).addEventListener(`mouseover`, () => { 
    document.querySelector(`#ts-link`).style.display = `flex`; 
})

document.querySelector(`#ts-card`).addEventListener(`mouseout`, () => { 
    document.querySelector(`#ts-link`).style.display = `none`; 
})

document.querySelector(`#lit-card`).addEventListener(`mouseover`, () => { 
    document.querySelector(`#lit-link`).style.display = `flex`; 
})

document.querySelector(`#lit-card`).addEventListener(`mouseout`, () => { 
    document.querySelector(`#lit-link`).style.display = `none`; 
})

document.querySelector(`#pcb-card`).addEventListener(`mouseover`, () => { 
    document.querySelector(`#pcb-link`).style.display = `flex`; 
})

document.querySelector(`#pcb-card`).addEventListener(`mouseout`, () => { 
    document.querySelector(`#pcb-link`).style.display = `none`; 
})

document.querySelector(`#trcs-card`).addEventListener(`mouseover`, () => { 
    document.querySelector(`#trcs-link`).style.display = `flex`; 
})

document.querySelector(`#trcs-card`).addEventListener(`mouseout`, () => { 
    document.querySelector(`#trcs-link`).style.display = `none`; 
})


