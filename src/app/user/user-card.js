import React, {Component} from 'react';

const styles = {
    tagHolder: {
      marginTop: '12px'
    },
    groupTag: {
        fontSize: '12px',
        fontFamily: '"Courier New", Courier, monospace',
        display: 'inline-block',
        padding: '4px 12px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: '2px',
        borderRadius: '4px'
    }
};

export default class UserCard extends Component {
    render() {
        const handleUserSelect = () => {
            this.props.onSelect(this.props.user);
        };

        return (
            <div
              onClick={handleUserSelect}
              className={'user-card' + (this.props.user.selected ? ' selected' : '')}
              >
                <h3>
                    {this.props.user.firstName} {this.props.user.lastName}
                </h3>
                <div> {this.props.user.email} </div>
                <div style={styles.tagHolder}>
                    <span style={styles.groupTag}>Group1</span>
                    <span style={styles.groupTag}>Group2</span>
                    <span style={styles.groupTag}>Group3</span>
                    <span style={styles.groupTag}>Group3</span>
                </div>
            </div>
        );
    }
}

UserCard.propTypes = {
    user: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func
};
