import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksContent: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    deleteTask(event, data, index) {
        let array = this.state.tasksContent;
        array.splice(index, 1);
        this.setState({
            tasksContent: array
        })
    }
    handleSubmit(event) {
        this.state.tasksContent.push(this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <p>Task count : {this.state.tasksContent.length}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Ajouter une tâche :</p>
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Ajouter"/>
                </form>
                <ul>
                    {
                        this.state.tasksContent.map((el, index) => <li onClick={(e) => this.deleteTask(e, el, index)} key={index}>{el}</li>)
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;
