import React, { PureComponent } from "react";
import { Table } from "semantic-ui-react";
import moment from "moment";

class TodoListView extends PureComponent {
  //
  render() {
    //
    const { todos, onSelectTodo } = this.props;

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title-List</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Array.isArray(todos) && todos.length ? (
            todos.map((todo) => {
              return (
                <Table.Row key={todo.id} onClick={() => onSelectTodo(todo.id)}>
                  <Table.Cell>{todo.title}</Table.Cell>
                  <Table.Cell>
                    {moment(todo.date).format("YYYY-MM-DD HH:mm")}
                  </Table.Cell>
                </Table.Row>
              );
            })
          ) : (
            <Table.Row>
              <Table.Cell>Empty</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }
}

export default TodoListView;
