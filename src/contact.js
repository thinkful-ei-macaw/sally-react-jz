import React from 'react';

export class Contact extends React.Component {
    render () {
        return (
            <section className="contact-info">
			    <h2 lang="en">Contact Info</h2>
			    <p lang="en">Name: Sally Student</p>
			    <address lang="en">
				    Email:<a href="mailto:sallystudent77789@gmail.com?Subject=Inquiry">sallystudent77789@gmail.com</a>
				    <br/>
                    Phone Number:<a href="tel:+52851114682">5-(285) 111-4682</a>
                </address>
                <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Sally-Student" />
            </section>
        )
    }
}