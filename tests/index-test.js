import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import DogEar from 'src/'

describe('DogEar', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('10 pages in 7 items', () => {
    render(<DogEar
			current={ 1 } total={ 10 } maxItems={ 7 } leading={ 1 } trailing={ 1 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>, node, () => {
      expect(node.innerHTML).toContain('<nav data-reactroot=""><a href="#1" class="current">1</a><a href="#2">2</a><a href="#3">3</a><a href="#4">4</a><a href="#6">6</a><a href="#8">8</a><a href="#10">10</a></nav>')
    })
  })
	
	it('1000 pages in 10 items', () => {
    render(<DogEar
			current={ 1 } total={ 1000 } maxItems={ 10 } leading={ 1 } trailing={ 1 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			/>, node, () => {
      expect(node.innerHTML).toContain('<nav data-reactroot=""><a href="#1" class="current">1</a><a href="#2">2</a><a href="#3">3</a><a href="#145">145</a><a href="#288">288</a><a href="#430">430</a><a href="#573">573</a><a href="#715">715</a><a href="#858">858</a><a href="#1000">1000</a></nav>')
    })
  })
	
	it('Custom Item', () => {
		const CustomItem = (props) => <h2><a { ...props }></a></h2>
		
    render(<DogEar
			current={ 1 } total={ 10 } maxItems={ 7 } leading={ 1 } trailing={ 1 }
			hrefForPage={(page) => `#${page}`}
			itemPropsWhenCurrent={{ className: 'current' }}
			Item={ CustomItem }
			/>, node, () => {
      expect(node.innerHTML).toContain('<nav data-reactroot=""><h2><a href="#1" class="current">1</a></h2><h2><a href="#2">2</a></h2><h2><a href="#3">3</a></h2><h2><a href="#4">4</a></h2><h2><a href="#6">6</a></h2><h2><a href="#8">8</a></h2><h2><a href="#10">10</a></h2></nav>')
    })
  })
})
