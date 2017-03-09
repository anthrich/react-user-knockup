import React, {Component} from 'react';

const styles = {
    userCard: {
        border: '1px solid #fff',
        margin: '16px',
        borderRadius: '12px',
        padding: '12px',
        width: '300px',
        overflowWrap: 'break-word',

        h4: {
            marginTop: 0,
            borderBottom: '1px solid #fff'
        }
    },
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
        return (
            <div style={styles.userCard}>
                <h3 style={styles.userCard.h4}>
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
    user: React.PropTypes.object.isRequired
};
