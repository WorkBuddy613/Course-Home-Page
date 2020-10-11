import React, { Component } from "react";
import "./Introduction.css"

class Introduction extends Component {

    constructor(props){
        super(props);
        this.state={
            title: "Chest Workout",
            Subscription: false,
            image : "https://image.winudf.com/v2/image/Y29tLmJvdWF6emFvdWkuY2hlc3R3b3Jrb3V0X3NjcmVlbl8wX3V5ZGdoMmd0/screen-0.jpg?fakeurl=1&type=.jpg",
            background_image: "https://www.buildingbeast.com/wp-content/uploads/2018/12/best-of-5-chest-exercises-logo.jpg",
            Total_Enrollments : 54,
            Description: "The chest muscles are made up of the pectoralis major and, underneath that, the pectoralis minor. The pectoralis major is the larger muscle and has two parts—an upper portion (called the clavicular head) and the lower portion (called the sternal head).The chest muscles are responsible for moving the arms across the body and up and down, as well as other movements like flexion, adduction, and rotation. Most chest exercises will involve pushing the arms away from the body or the body away from the arms. Some of the most common chest exercises include pushups, chest presses, and chest flies. Choose a mixture of different exercises to target your chest from a variety of directions and make sure you vary your routine every four to six weeks to avoid plateaus."
        };
    }

    toggleSubscription = () => {
		this.setState(prevState => ({
			Subscription: !prevState.Subscription
        }))
       // eslint-disable-next-line no-lone-blocks
       {this.state.Subscription ? this.setState({Total_Enrollments: this.state.Total_Enrollments - 1}) : this.setState({Total_Enrollments: this.state.Total_Enrollments + 1} )}
    }
  
    render() {
        return (
            <div className = "intro_page">
                <h2>{this.state.title}</h2>
                <img src = {this.state.image} alt = "ChestWorkoutImage" />
                <h4 class="pos-left">Total Enrollments are {this.state.Total_Enrollments}</h4>
                <h3 class="pos-left">You are {this.state.Subscription ? 'subscribed' : 'not subscribed'} to the course</h3>
                <button onClick={this.toggleSubscription}>Subscribe/Unsubscribe</button>
                <h2>Overview</h2>
                <p>{this.state.Description}</p>
            </div>
        );
    }
}

export default Introduction;