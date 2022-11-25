// menu toggler
const toggleBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu ul')


toggleBtn.addEventListener('click', toggled)

function toggled(e){
    menu.classList.toggle('menu-items-open')
}


// filter
const filterWithTitle = document.querySelectorAll('.filterable-facet') 
const filterWithSectionTitle = document.querySelectorAll('.filter-section-title') 
const filterFacets = document.querySelector('.facet-display-wrapper')
const filterController = document.querySelector('.filter-controls')
const filterPageCloser = document.querySelector('.cross-bar-wrapper')


filterWithSectionTitle.forEach(title => {
    title.addEventListener("click", applyFilter)
})

function applyFilter(e){
    let arrow = e.target.children[0]
    if(arrow.innerText === "arrow_right"){
        arrow.innerText = "arrow_drop_down"
    }else if(arrow.innerText === "arrow_drop_down"){
        arrow.innerText = "arrow_right"
    }
    filterWithTitle[0].classList.toggle("filterable-facet-clicked")
}

if(filterController){
    filterController.addEventListener('click', displayFilter)
}

function displayFilter(e){
    filterFacets.style.setProperty("Display", "block")
    filterFacets.classList.add("facet-display-wrapper-clicked")
}

if(filterPageCloser){
    filterPageCloser.addEventListener('click', closeFilterPage) 
}

function closeFilterPage(){
    filterFacets.style.removeProperty("Display")
    filterFacets.classList.remove("facet-display-wrapper-clicked")
}