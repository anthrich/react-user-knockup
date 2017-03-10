import React, {Component} from 'react';

export default class GroupCard extends Component {
  render() {
    const handleGroupSelect = () => {
      this.props.onSelect(this.props.group);
    };

    return (
      <div className="group-card" onClick={handleGroupSelect}>
        <h3> {this.props.group.name} </h3>
        <div className="user-tags">
          {
            this.props.group.users.map((user => (
              <span key={user.id}>{user.firstName} {user.lastName}</span>
            )))
          }
        </div>
      </div>
    );
  }
}

GroupCard.propTypes = {
  group: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func
};
