import React, {Component} from 'react';
import {Header} from './header';
import {UserContainer} from './user/user-container';
import GroupContainer from './group/group-container';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        users: [
            {firstName: 'anth', lastName: 'rich', email: 'anthr@dispostable.com'},
            {firstName: 'john', lastName: 'rich', email: 'johnr@dispostable.com'},
            {firstName: 'bennett', lastName: 'matrix', email: 'bmatrix@dispostable.com'},
            {firstName: 'phil', lastName: 'johnson', email: 'philj@dispostable.com'},
            {firstName: 'tony', lastName: 'rich', email: 'tonyr@dispostable.com'}
        ],
        groups: [
            {id: 1, name: 'Group1', users: []}
        ]
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleAddGroup = this.handleAddGroup.bind(this);
    this.handleUserSelect = this.handleUserSelect.bind(this);
  }

  handleAddUser() {
    this.setState(prevState => {
      prevState.users.push(
          {firstName: 'New', lastName: 'User', email: 'newuser@dispostable.com'}
      );
      return {
          users: prevState.users
      };
    });
  }

  handleAddGroup() {
    this.setState(prevState => {
      let newId = prevState.groups
          .sort((g, g2) => g.id - g2.id)[prevState.groups.length - 1];
      newId += 1;
      prevState.groups.push(
          {id: newId, name: 'New Group', users: []}
      );
      return {
          groups: prevState.groups
      };
    });
  }

  handleUserSelect(user) {
    this.setState(prevState => {
      const i = prevState.users.indexOf(user);
      prevState.users[i].selected = !prevState.users[i].selected;
      return {
          users: prevState.users
      };
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <UserContainer users={this.state.users} onUserSelect={this.handleUserSelect}>
            <button onClick={this.handleAddUser}>Giz anuvva!</button>
          </UserContainer>
          <GroupContainer groups={this.state.groups}>
            <button onClick={this.handleAddGroup}>Add a group!</button>
          </GroupContainer>
        </main>
      </div>
    );
  }
}
