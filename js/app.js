import DesktopApp from './Desktop'
import MobileApp from './Mobile'
import { LoadPlants } from './components/Plants/Plants'

async function App() {
	const body = document.createElement('template')
	const viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	const isMobile = viewWidth <= 768

	console.log({viewWidth})

	body.innerHTML = isMobile ? MobileApp() : DesktopApp() 
	return body.content.cloneNode(true)
}

const start = async() => {
	document.getElementById('app').appendChild(await App())
}


start()

// just making it global, fires only on change
window.onChangeFilter = () => {
	const filters = []
	document.querySelectorAll('select').forEach(e => !!e.value && filters.push(e.value))
    
	if(filters && filters.length === 3) {
		fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${filters[0]}&water=${filters[1]}&pets=${filters[2]}`, {
			'referrerPolicy': 'strict-origin-when-cross-origin',
			'body': null,
			'method': 'GET',
			'mode': 'cors',
			'credentials': 'omit'
		}).then(response => {
			if(response.status === 200) {
				return response.json()
			}

			throw 'Failed.'
		}).then(filtered => {
			console.log('Received filter: ' , {filtered})
			LoadPlants(filtered)

		}).catch(() => {
			alert('Failed to filter plants results.')
		})
	}
	
}
