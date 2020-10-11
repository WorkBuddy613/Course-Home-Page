import React, { Component } from "react";
import ChestWorkoutImage from "./../asset/istockphoto-472494666-612x612.png"
import "./Introduction.css"

class Introduction extends Component {

    constructor(props){
        super(props);
        this.state={
            title: "Chest Workout",
            subscription: false,
            image : {ChestWorkoutImage},
            Total_Enrollments : 54,
            Description: "The chest muscles are made up of the pectoralis major and, underneath that, the pectoralis minor. The pectoralis major is the larger muscle and has two parts—an upper portion (called the clavicular head) and the lower portion (called the sternal head).The chest muscles are responsible for moving the arms across the body and up and down, as well as other movements like flexion, adduction, and rotation. Most chest exercises will involve pushing the arms away from the body or the body away from the arms. Some of the most common chest exercises include pushups, chest presses, and chest flies. Choose a mixture of different exercises to target your chest from a variety of directions and make sure you vary your routine every four to six weeks to avoid plateaus."
        };
    }
    
    toggleSubscription = () => {
		this.setState(prevState => ({
			subscription: !prevState.subscription
		}))
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <img src = {this.state.image} alt = "ChestWorkoutImage" />
                <h4 class="pos-left">Total Enrollments are {this.state.Total_Enrollments}</h4>
                <h3 class="pos-left">You are {this.state.subscription ? 'Subscribed' : 'Unsubscribed'} to the course</h3>
                <button onClick={this.toggleSubscription}>Subscribe/Unsubscribe</button>
                <h2>Overview</h2>
                <p>{this.state.Description}</p>
            </div>
        );
    }
}

export default Introduction;