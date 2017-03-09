import React, {Component} from 'react';
import GroupCard from './group-card';

export default class GroupContainer extends Component {

    constructor() {
        super();
        this.groups = [];
    }

    render() {
        return (
            <div className="group-container">
                <h1>Greetings, here are your groups.</h1>
                <button>Add a group!</button>
                <div>
                    {this.groups.map((user, i) => (
                        <GroupCard user={user} key={i}/>
                    ))}
                </div>
            </div>
        );
    }
}
