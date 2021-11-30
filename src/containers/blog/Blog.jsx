import React from 'react';
import './blog.css';

import Article from '../../components/article/Article';
import { blog1, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">Projects <br /> Have a look.(Work in progress)</h1>
        </div>
        <div className="gpt3__blog-container">
            {/* <div className="gpt3__blog-container_groupA">
                <Article imgUrl={blog1} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" source={<a target="_blank" href="">View Source</a>} />
            </div> */}
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date="Sep 26, 2021" text="An iOS app is written in Swift which can be used to book an appointment
with doctors." tools="Developed using Swift, Cocoa Touch and Firebase." source={<a target="_blank" href="https://github.com/amanjaiswal668/Appoint">View Source</a>} />
                <Article imgUrl={blog03} date="Sep 26, 2021" text="An iOS app is written in Swift which can be used to take notes."
                    tools="Developed using Swift, Cocoa Touch and Mongo db." source={<a target="_blank" href="https://github.com/amanjaiswal668/NoteApp">View Source</a>} />
                <Article imgUrl={blog04} date="Sep 26, 2021" text="A website designed for the matching of dogs. A place where dogs can
date." tools="Developed using HTML, CSS and Bootstrap 4." source={<a target="_blank" href="https://github.com/amanjaiswal668/Tindog-Website">View Source</a>} />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="An iOS app is written in Swift which can be used for getting real-time
weather updates." tools="Developed using Swift, Cocoa Touch, OpenWeather API." source={<a target="_blank" href="">View Source</a>} />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="A simple app that can be used to play a quiz." tools="Developed using Python." source={<a target="_blank" href="https://github.com/amanjaiswal668/NoteApp">View Source</a>} />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="An iOS app is written in Swift, a clone of twitter." tools="Developed using Swift, Cocoa Touch, Twitter API and Firebase." source={<a target="_blank" href="https://github.com/amanjaiswal668/NoteApp">View Source</a>} />
            </div>
        </div>
    </div>
);

export default Blog
