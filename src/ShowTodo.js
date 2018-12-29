import React from 'react'
import ShowButton from './ShowButton'
import { connect } from 'react-redux'

function ShowTodo(props) {
    return (
        <div className="showTodo">
            <ShowButton filter="SHOW_ALL" title="Show All" />
            <ShowButton filter="SHOW_COMPLETED" title="Show Completed" />
            <ShowButton filter="SHOW_ACTIVE" title="Show Active" />       
        </div>

    )
}

export default connect()(ShowTodo)