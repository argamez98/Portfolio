import React from 'react'

const Section = ({ content = '' }) => {

    return (
        <div id='name-title' class='square' value='click'>
            {
            content.map((content, index) => <section key={index}>
                <div class='container'>
                    <span class='title'>
                        {
                        content.title
                    } </span>
                    <div class='separator'></div>
                    <span class='content-body'>
                        {
                          content.body
                        } </span>
                  </div>
            </section>)
        } </div>
    )

}

export default Section
