import React, { PureComponent } from "react";
import { Grid, Button, Header, Icon, Input, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class TodoEditFormView extends PureComponent {
  render() {
    const { todo, onSetTodoProp, onAddTodo, onModify, onDelete } = this.props;

    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">
              <Icon name="list" />
              <Header.Content>TodoList</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Grid columns={2} divided>
              <Grid.Column>
                <Input
                  fluid
                  label="Title"
                  placeholder="할 일을 적어주세요"
                  value={todo && todo.title ? todo.title : ""}
                  onChange={(e) => onSetTodoProp("title", e.target.value)}
                />
              </Grid.Column>
              <Grid.Column>
                <Form>
                  <label>Date</label>
                  <DatePicker
                    showTimeSelect
                    selected={
                      todo && todo.date ? moment(todo.date).toDate() : null
                    }
                    dateFormat="yyyy-MM-dd HH:mm"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    onChange={(date) => onSetTodoProp("date", date.valueOf())}
                  />
                </Form>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <Button primary onClick={onAddTodo}>
              Add
            </Button>
            <Button primary onClick={onModify}>
              Modify
            </Button>
            <Button primary onClick={onDelete}>
              Delete
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TodoEditFormView;
