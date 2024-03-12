import React from 'react'

const Section = ({ content = '' }) => {

    return (
        <div class='wrapper'>

        <ul id='name-title' class='square' value='click'>
            {
                content.map((content, index) => <section key={index}>
                <li class='container ml-8'>
                    <span class='title'>
                        {
                            content.title
                        } </span>
                    <span class='content-body'>
                        {
                            content.body
                        } </span>
                  </li>
            </section>)
        } </ul>
        </div>
    )

}

export default Section
