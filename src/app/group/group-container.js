import React, {Component} from 'react';
import GroupCard from './group-card';

export default class GroupContainer extends Component {
    render() {
        return (
            <div className="group-container">
                <h1>Greetings, here are your groups.</h1>
                {this.props.children}
                <div>
                    {this.props.groups.map((group, i) => (
                        <GroupCard group={group} key={i}/>
                    ))}
                </div>
            </div>
        );
    }
}

GroupContainer.propTypes = {
    groups: React.PropTypes.array.isRequired,
    children: React.PropTypes.element
};

