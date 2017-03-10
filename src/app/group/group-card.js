import React, {Component} from 'react';

export default class GroupCard extends Component {
    render() {
        return (
          <div className="group-card">
              <h3> {this.props.group.name} </h3>
              <div className="user-tags">
                  <span>Anth Rich</span>
                  <span>John Rich</span>
                  <span>Tony Rich</span>
                  <span>Bennett Matrix</span>
              </div>
          </div>
        );
    }
}

GroupCard.propTypes = {
    group: React.PropTypes.object.isRequired
};
