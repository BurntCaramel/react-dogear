import React from 'react'
import {render} from 'react-dom'

import DogEar from '../../src'

let getCurrentPageFromHash = () => parseInt(window.location.hash.replace('#', ''), 10) || null

let Demo = React.createClass({
	getInitialState() {
		return {
			current: getCurrentPageFromHash()
		}
	},
	
	componentDidMount() {
		window.addEventListener('hashchange', this.hashChanged, false)
	},
	
	componentWillUnmount() {
		window.removeEventListener('hashchange', this.hashChanged, false)
	},
	
	hashChanged() {
		this.setState({
			current: getCurrentPageFromHash()
		})
	},
	
	render() {
		const { current } = this.state
			
		return <div>
			<h1>react-dogear {'<DogEar>'} demo</h1>
			
			Current: { current || 'none' }
			
			<h2>10 pages in 7 items</h2>
			<DogEar current={ 1 } total={ 10 } maxItems={ 7 } leading={ 1 } trailing={ 1 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>
			
			<h2>100 pages in 25 items</h2>
			<DogEar current={ current } total={ 100 } maxItems={ 25 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>
			
			<h2>100 pages in 25 items, leading: 6, trailing: 6</h2>
			<DogEar current={ current } total={ 100 } maxItems={ 25 } leading={ 6 } trailing={ 6 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>
			
			<h2>1000 pages in 25 items</h2>
			<DogEar current={ current } total={ 1000 } maxItems={ 25 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>
			
			<h2>1000 pages in 7 items, leading: 1, trailing: 1</h2>
			<DogEar current={ current } total={ 1000 } maxItems={ 7 } leading={ 1 } trailing={ 1 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>
			
			<h2>20 pages in 25 items</h2>
			<DogEar current={ current } total={ 20 } maxItems={ 25 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>
		</div>
	}
})

render(<Demo/>, document.querySelector('#demo'))

const css = `
body {
	font-family: sans-serif;
}

nav {
	
}

nav a {
	display: inline-block;
	padding: 4px 6px;
	margin-right: 4px;
	background-color: #eee;
	text-decoration: none;
}
nav a.current {
	color: #eee;
	background-color: #222;
}
`
const styleElement = document.createElement('style')
styleElement.id = 'main-styles'
styleElement.appendChild(document.createTextNode(css))
document.head.appendChild(styleElement)
