import React from 'react';
import './css/WhoWeAre.css';
import './css/TabContent.css';
import monaLisa from '../assets/images/mona-lisa.jpg';

export default function WhoWeAre() {
	return (
		<div className="tab-content" id="who-we-are">
			<div className="tab-header">WHO WE ARE</div>
			<Profile name="Bill McSherry"
				profileImage={monaLisa}
				profileText="Great moments are born from great opportunity. And that's what you have here tonight, boys. That's what you've earned here, tonight. One game. 
								 If we played 'em ten times, they might win nine. But not this game. Not tonight. Tonight, we skate with 'em. Tonight, we stay with 'em, and we 
								 shut them down because we can! Tonight, we are the greatest hockey team in the world. You were born to be hockey players -- every one of ya. 
								 And you were meant to be here tonight. This is your time. Their time -- is done. It's over. I'm sick and tired of hearin' about what a great 
								 hockey team the Soviets have. Screw 'em! This is your time!! Now go out there and take it!"
				email="bill@devgroup.co" />
			<Profile name="Andrew Thomas"
				profileImage={monaLisa}
				profileText="Andrew has a background in Physics and Electrical Engineering..."
				email="andrew@devgroup.co" />
		</div>
	);
}

function Profile(props) {
	return (
		<div className="profile">
			<div className="info-text-header">{props.name}</div>
			<img src={props.profileImage} alt="" className="profile-image" />
			<p>{props.profileText}</p>
			<p>Email: {props.email}</p>
		</div>
	);
}
