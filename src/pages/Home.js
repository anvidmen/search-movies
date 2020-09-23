import React, { Component} from 'react'
import { Title, SearchForm, MoviesList } from '../components'

export default class extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }
    _renderResults() {
        return this.state.results.length === 0
            ? <p>Sorry! results not found!</p>
            : <MoviesList movies={this.state.results} />
    }
    render () {
        return (
        <div>
            <Title />
            <div className='searchForm-wrapper'>
                <SearchForm onResults={this._handleResults}/>
            </div>
            {this.state.usedSearch
               ? this._renderResults() 
               : <small>Use the form to search a movie</small> 
            }
        </div>
        )
    }
}