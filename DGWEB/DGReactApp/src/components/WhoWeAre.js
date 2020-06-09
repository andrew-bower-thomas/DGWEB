import React, { Component } from 'react';
import './css/WhoWeAre.css';
import monalisa from '../assets/images/mona-lisa.jpg';

export class WhoWeAre extends Component {
	static displayName = WhoWeAre.name;

	render() {
		return (
			<div className="tab-content" id="who-we-are">
				<Profile name="William McSherry"
					profileImage={monalisa}
					profileText="Great moments are born from great opportunity. And that's what you have here tonight, boys. That's what you've earned here, tonight. One game. 
								 If we played 'em ten times, they might win nine. But not this game. Not tonight. Tonight, we skate with 'em. Tonight, we stay with 'em, and we 
								 shut them down because we can!"
					linkedinLink="https://www.nasa.gov/" />
				<Profile name="Andrew Thomas"
					profileImage={monalisa}
					profileText="Tonight, we are the greatest hockey team in the world. You were born to be hockey players -- every one of ya. And you were meant to be here 
								 tonight. This is your time. Their time -- is done. It's over. I'm sick and tired of hearin' about what a great hockey team the Soviets have. 
								 Screw 'em! This is your time!! Now go out there and take it!"
					linkedinLink="https://www.espn.com/" />
			</div>
		);
	}
}

class Profile extends React.Component {
	render() {
		return (
			<div className="profile">
				<h3>{this.props.name}</h3>
				<img src={this.props.profileImage} alt="" className="profile-image" />
				<p>{this.props.profileText}</p>
				<a href={this.props.linkedinLink}>LinkedIn Profile</a>
			</div>
		);
    }
}
