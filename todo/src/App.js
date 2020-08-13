import React, { Component } from "react";
import TodoEditFormView from "./component/TodoEditFormView";
import TodoListView from "./component/TodoListView";
import { generateId } from "./IDGenerator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: { id: "", title: "", date: new Date() },
    };
  }

  //다 실행하고 나면 입력칸이 초기화(빈칸)
  inputInit = () => {
    this.setState({
      todo: {},
    });
  };

  onSetTodoProp = (name, value) => {
    this.setState({ todo: { ...this.state.todo, [name]: value } });
  };

  onAddTodo = () => {
    const { todo, todos } = this.state;
    //여기선 todo를 todos에 넣어줄 때 id값을 같이 할당해줘야 함
    this.setState({
      todos: todos.concat({ ...todo, id: generateId(5) }),
    });
    console.log(todos);
  };

  onModify = () => {
    const { todo, todos } = this.state;
    this.setState({
      todos: todos.map((element) => (element.id === todo.id ? todo : element)),
    });
    this.inputInit();
  };

  onDelete = () => {
    const { todo, todos } = this.state;
    this.setState({
      todos: todos.filter((element) => element.id !== todo.id),
    });
    this.inputInit();
  };

  //얘는 왜 find쓸 때 this.state를 쓰고 add랑 modi는 그냥 쓰는가?????????????????????????/
  onSelectTodo = (id) => {
    this.setState({
      todo: this.state.todos.find((element) => element.id === id),
    });
  };

  render() {
    const { todo, todos } = this.state;

    //Edit에서 onSetTodoProp를 사용하려면 여기서 선언해야 Edit에서 가져다 씀!!
    return (
      <div>
        <TodoEditFormView
          todo={todo}
          onSetTodoProp={this.onSetTodoProp}
          onAddTodo={this.onAddTodo}
          onModify={this.onModify}
          onDelete={this.onDelete}
        />
        {/* 여기선 왜 this가 아닐까???????????????? */}
        <TodoListView todos={todos} onSelectTodo={this.onSelectTodo} />
      </div>
    );
  }
}

export default App;
