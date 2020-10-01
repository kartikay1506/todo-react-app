import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return {
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className="todo-item" style={this.getStyle()} onClick={this.props.markComplete.bind(this, id)}>
                <p>
                    { title }
                </p>
                <button onClick={ this.props.delTodo.bind(this, id) }>X</button>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}



export default TodoItem;
