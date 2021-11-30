import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const about = () => (
    <div className="gpt3__whatgpt3 section__margin" id="about">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="Who am I" text="I am a Software Engineer from Hazaribag, Jharkhand, India. Currently, I am employed by Zensar Technologies as a Software Engineer.


I love working on a variety of technologies including Full-stack Development, Mobile App Development and API development. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience." />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">Look at your past and smile because your future is beautiful.</h1>
            {/* <h1 className="gradient__text">The possibilities are beyond your imagination</h1> */}
            {/* <p>Explore the Library</p> */}
        </div>
        {/* <div className="gpt3__whatgpt3-container">
            <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
            <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </div> */}
    </div>
);

export default about

