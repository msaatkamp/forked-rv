
import noResultsImg from '../../../images/illustrations/no-results.png'
import PickImg from '../../../images/illustrations/pick.png'

import toxicImg from '../../../images/icons/toxic.svg'
import petFriendlyImg from '../../../images/icons/pet.svg'

import waterRarelyImg from '../../../images/icons/1-drop.svg'
import waterRegularlyImg from '../../../images/icons/2-drops.svg'
import waterDailyImg from '../../../images/icons/3-drops.svg'

import noSunImg from '../../../images/icons/no-sun.svg'
import lowSunImg from '../../../images/icons/low-sun.svg'
import highSunImg from '../../../images/icons/low-sun.svg'



const Plants = (plants) => {
	if(plants && plants.length) {
        
		return `<div class="plants filled">
                <div class='content'>
                    <div>
                        <img src=${PickImg} alt="Pick" class="pick-img">
                    </div>
                    <span class="title">
                        Our picks for you
                    </span>
                    ${PlantsGrid(plants)}
                </div>
            </div>`
	}

    
	return `<div class="plants" id="plants">
        <div class='content'>
            <div>
                <h2>
                    No results yet…
                </h2>
                <span>Use the filters above to find the plant that best fits your environment :)  </span>
            </div>
            <img src=${noResultsImg} alt="No results found" class="no-results">
        </div>
    </div>`
}

const PlantsGrid = (plants) => {
	let plantsCards = ''
	plants.map(e => plantsCards += PlantCard({...e}))

	const html = `
        <div class="plants-grid">
            ${plantsCards}
        </div>
    `

	return html
}

const PlantCard = (props) => {
	const {id, name, sun, url, water, price, toxicity, staff_favorite} = props
	console.log({props})

	const petImg = toxicity ? toxicImg : petFriendlyImg

	const waterImg = water == 'daily' && waterDailyImg || water == 'regularly' ? waterRegularlyImg : waterRarelyImg
	const sunImg = sun == 'no' && noSunImg || sun == 'low' ? lowSunImg : highSunImg

	return `
        <div class="plant-card" id="plant-${id}">
        <div class="favorite">${staff_favorite ? '<span>Staff Favorite</span>' : '<p></p>'}</div>
            <div class="image-wrapper">
                <img src=${url} alt=${name} class="plant-image">
            </div>
            <div class="bottom-wrapper">
                <div>
                    <span class="plant-name">${name}</span>
                </div>
                <div>
                    <span class="plant-price">$${price}</span>
                    <div class="icons">
                        <svg class="pet icon"><g>${petImg}</g></svg>
                        <svg class="pet icon"><g>${waterImg}</g></svg>
                        <svg class="pet icon"><g>${sunImg}</g></svg>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const LoadPlants = async (plantsList) => {
	console.log({plantsList})
	if(plantsList && plantsList.length) {
		document.getElementById('plants').innerHTML = Plants(plantsList)
	} else{
		document.getElementById('plants').innerHTML = Plants()
	}
}

export default Plants
