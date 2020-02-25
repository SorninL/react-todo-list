import React from 'react';
import './todo-list.css';

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

    componentDidMount() {
        if (localStorage.getItem('tasksContent') !== null) {
            this.setState({tasksContent: JSON.parse(localStorage.getItem('tasksContent'))});
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    deleteTask(event, data, index) {
        let array = this.state.tasksContent;
        array.splice(index, 1);
        this.setState({
            tasksContent: array
        });
        localStorage.setItem('tasksContent', JSON.stringify(this.state.tasksContent));
    }
    handleSubmit(event) {
        this.state.tasksContent.push(this.state.value);
        this.setState({value: ''});
        localStorage.setItem('tasksContent', JSON.stringify(this.state.tasksContent));
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
                        this.state.tasksContent.map((el, index) => <p className="listItem" onClick={(e) => this.deleteTask(e, el, index)} key={index}>{el}</p>)
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;
