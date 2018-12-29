import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from './actions'

function ShowButton(props) {
    const {filter, title, setVisibilityFilter} = props;
    return (
        <button onClick={() => setVisibilityFilter(filter)}>{title}</button>
    )
}

const mapDispatchToProps = {
    setVisibilityFilter
}

export default connect(null, mapDispatchToProps)(ShowButton);