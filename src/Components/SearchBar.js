import React from 'react'

class SearchBar extends React.Component {
  // control input
  // submit goes back up to top Component

  render () {
    return (
      <div>
        <h2>Search Bar</h2>
          <form>
            <label htmlFor="video">Search:</label>
            <input type="text" placeholder="search for a video" id="video"/>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default SearchBar
