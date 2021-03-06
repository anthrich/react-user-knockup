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
        {id: 1, firstName: 'anth', lastName: 'rich', email: 'anthr@dispostable.com', groups: []},
        {id: 2, firstName: 'john', lastName: 'rich', email: 'johnr@dispostable.com', groups: []},
        {id: 3, firstName: 'bennett', lastName: 'matrix', email: 'bmatrix@dispostable.com', groups: []},
        {id: 4, firstName: 'phil', lastName: 'johnson', email: 'philj@dispostable.com', groups: []},
        {id: 5, firstName: 'tony', lastName: 'rich', email: 'tonyr@dispostable.com', groups: []}
      ],
      groups: [
        {id: 1, name: 'Group1', users: []}
      ],
      showForm: false,
      firstName: '',
      lastName: '',
      email: ''
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleAddGroup = this.handleAddGroup.bind(this);
    this.handleUserSelect = this.handleUserSelect.bind(this);
    this.handleGroupSelect = this.handleGroupSelect.bind(this);
    this.handleAddUserInputChange = this.handleAddUserInputChange.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
  }

  getNewId(collection) {
    return collection.sort((g, g2) => g.id - g2.id)[collection.length - 1].id + 1;
  }

  handleAddUser(e) {
    this.setState(prevState => {
      const newId = this.getNewId(prevState.users);
      prevState.users.push(
        {
          id: newId,
          firstName: prevState.firstName,
          lastName: prevState.lastName,
          email: prevState.email,
          groups: []
        }
      );
      return {
        users: prevState.users,
        showForm: false,
        firstName: '',
        lastName: '',
        email: ''
      };
    });

    e.preventDefault();
  }

  handleAddGroup() {
    this.setState(prevState => {
      const newId = this.getNewId(prevState.groups);
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

  handleGroupSelect(group) {
    this.setState(prevState => {
      const stateGroup = prevState.groups.find(g => g.id === group.id);
      const currentGroupUserIds = stateGroup.users.map(g => g.id);
      const selectedUsers = prevState.users
        .filter(user => user.selected)
        .filter(user => !currentGroupUserIds.some(id => id === user.id));
      stateGroup.users.push(...selectedUsers);
      selectedUsers.forEach(user => user.groups.push(stateGroup));
      return {
        groups: prevState.groups,
        users: prevState.users
      };
    });
  }

  handleAddUserInputChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleToggleForm() {
    this.setState(prevState => {
      return {
        showForm: !prevState.showForm
      };
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <UserContainer users={this.state.users} onUserSelect={this.handleUserSelect}>
            <button onClick={this.handleToggleForm}> {this.state.showForm ? 'hide' : 'add'} </button>
            <form
              className={this.state.showForm ? 'show' : ''}
              onSubmit={this.handleAddUser}
              >
              <input
                onChange={this.handleAddUserInputChange}
                value={this.state.firstName}
                name="firstName"
                required="required"
                type="text"
                placeholder="First name"
                />
              <input
                onChange={this.handleAddUserInputChange}
                value={this.state.lastName}
                name="lastName"
                required="required"
                type="text"
                placeholder="Last name"
                />
              <input
                onChange={this.handleAddUserInputChange}
                value={this.state.email}
                name="email"
                required="required"
                type="email"
                placeholder="Email"
                />
              <button type="submit">Giz anuvva!</button>
            </form>
          </UserContainer>
          <GroupContainer groups={this.state.groups} onGroupSelect={this.handleGroupSelect}>
            <button onClick={this.handleAddGroup}>Add a group!</button>
          </GroupContainer>
        </main>
      </div>
    );
  }
}
