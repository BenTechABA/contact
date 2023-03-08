import React, {useRef}from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logActions'
const SearchBar = ({searchLogs}) => {
  const text = useRef('');
  const onChange = e =>{
    searchLogs(text.current.value)
  }
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className="input-field">
            <input type="search" id="search" placeholder='Search logs..' ref={text} onChange={onChange}/>
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">Search</i>
            </label>
            <i className="material-icons">Close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}
SearchBar.propTypes={
  searchLogs: PropTypes.func.isRequired,
}
export default connect(null, {searchLogs})(SearchBar);
