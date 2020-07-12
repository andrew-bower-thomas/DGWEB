import React from 'react';
import './css/OurWork.css';
import './css/TabContent.css';

export default function OurWork() {
	return (
		<div className="tab-content" id="our-work">
			<div className="tab-header">OUR WORK</div>
			<div className="info-header">
				We are a team of engineers who pride ourselves on being able to learn anything and take on any challenge.
				</div>
			<div className="info-container">
				<img src="" style={{ backgroundColor: "red" }} alt="Project1Image" className="info-image" />
				<div className="info-text info-text-right">
					<div className="info-text-header">PROJECT1</div>
					<p>
						I have, myself, full confidence that if all do their duty, if nothing is neglected, and if the best arrangements are made, as they are being made, we shall prove ourselves once
						again able to defend our Island home, to ride out the storm of war, and to outlive the menace of tyranny, if necessary for years, if necessary alone. At any rate, that is what
						we are going to try to do. That is the resolve of His Majesty’s Government-every man of them. That is the will of Parliament and the nation. The British Empire and the French
						Republic, linked together in their cause and in their need, will defend to the death their native soil, aiding each other like good comrades to the utmost of their strength.
						Even though large tracts of Europe and many old and famous States have fallen or may fall into the grip of the Gestapo and all the odious apparatus of Nazi rule, we shall not
						flag or fail. We shall go on to the end, we shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the
						air, we shall defend our Island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets,
						we shall fight in the hills; we shall never surrender, and even if, which I do not for a moment believe, this Island or a large part of it were subjugated and starving, then
						our Empire beyond the seas, armed and guarded by the British Fleet, would carry on the struggle, until, in God’s good time, the New World, with all its power and might, steps
						forth to the rescue and the liberation of the old.
						</p>
				</div>
			</div>
			<div className="info-container">
				<div className="info-text info-text-left">
					<div className="info-text-header">PROJECT2</div>
					<p>
						What General Weygand called the Battle of France is over. I expect that the Battle of Britain is about to begin. Upon this battle depends the survival of Christian civilization.
						Upon it depends our own British life, and the long continuity of our institutions and our Empire. The whole fury and might of the enemy must very soon be turned on us. Hitler
						knows that he will have to break us in this Island or lose the war. If we can stand up to him, all Europe may be free and the life of the world may move forward into broad,
						sunlit uplands. But if we fail, then the whole world, including the United States, including all that we have known and cared for, will sink into the abyss of a new Dark Age
						made more sinister, and perhaps more protracted, by the lights of perverted science. Let us therefore brace ourselves to our duties, and so bear ourselves that if the British
						Empire and its Commonwealth last for a thousand years, men will still say, ‘This was their finest hour.’
						</p>
				</div>
				<img src="" style={{ backgroundColor: "purple" }} alt="Project2Image" className="info-image" />
			</div>
			<div className="info-container">
				<img src="" style={{ backgroundColor: "blue" }} alt="Project3Image" className="info-image" />
				<div className="info-text info-text-right">
					<div className="info-text-header">PROJECT3</div>
					<p>
						I say to the House as I said to ministers who have joined this government, I have nothing to offer but blood, toil, tears, and sweat. We have before us an ordeal of the most
						grievous kind. We have before us many, many months of struggle and suffering. You ask, what is our policy? I say it is to wage war by land, sea, and air. War with all our might
						and with all the strength God has given us, and to wage war against a monstrous tyranny never surpassed in the dark and lamentable catalogue of human crime. That is our policy.
						You ask, what is our aim? I can answer in one word. It is victory. Victory at all costs – Victory in spite of all terrors – Victory, however long and hard the road may be, for
						without victory there is no survival.
						</p>
				</div>
			</div>
		</div>
	);
}
