
import noResults from '../../../images/illustrations/no-results.png'

const Plants = (plants) => {

	if(plants && plants.length) {
        
		return `<div class="plants">
                <div class='content'>
                    <span>
                        plant.....
                    </span>
                </div>
            </div>`
	}

    
	return `<div class="plants">
        <div class='content'>
            <h2>
                No results yet…
            </h2>
            <span>Use the filters above to find the plant that best fits your environment :)  </span>
            <img src=${noResults} alt="No results found">
        </div>
    </div>`
}

export default Plants