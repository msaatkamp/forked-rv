import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Plants from './components/Plants/Plants'
import PlantsJson from '../mocked.json'



const DesktopApp = () => {

	const html = `<div class="container">
            ${Header()}
            ${Filter()}
            <div id="plants">
                ${Plants(PlantsJson)}
             </div>
        </div>`

	return html
}

export default DesktopApp