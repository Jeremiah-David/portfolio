function ContactMe (props) {
    let stackViews = props.stack
    return(


        <div className="contact">
            <h1 className="contactName">Jeremiah David</h1>
            <h4 className='contactNumber'>Call me @ 541-606-3193</h4>
            {console.log('contactDiv', stackViews)}
            <h4 className='contactEmail'>Email me @ <a href = "mailto: abc@example.com" target="_blank"> Dancesfire@gmail.com</a></h4>
            <h4 className='contactLinkin'>Check out my Linkedin @<a href="https://www.linkedin.com/in/jeremiahdavid83/" target="_blank">https://www.linkedin.com/in/jeremiahdavid83/</a></h4>
            <h4 className='contactHub'> See all my projects and code @ <a href="https://github.com/Jeremiah-David" target="_blank">https://github.com/Jeremiah-David</a></h4>
        </div>
    )
}


export default ContactMe



