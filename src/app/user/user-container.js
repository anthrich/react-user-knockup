import React, {Component} from 'react';
import UserCard from './user-card';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  },
  userContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center'
  }
};

export class UserContainer extends Component {

  render() {
    return (
      <div className="user-container" style={styles.title}>
        <h1 style={styles.h1}>&apos;Ere&apos;s ya users!</h1>
        {this.props.children}
        <div style={styles.userContainer}>
            {this.props.users.map((user, i) => (
              <UserCard user={user} key={i} onSelect={this.props.onUserSelect}/>
            ))}
        </div>
      </div>
    );
  }
}

UserContainer.propTypes = {
    children: React.PropTypes.element,
    users: React.PropTypes.array.isRequired,
    onUserSelect: React.PropTypes.func
};

