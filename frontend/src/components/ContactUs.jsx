import React from 'react'

export default function ContactUs() {
    return (
        <div className='container p-3 '>
            <h3>Write Your Query Here!!</h3>
            <form action="">
                <div class="input-group mb-4">
                    <input type="textfeild" className=" query form-control" placeholder="your query" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-warning" type="submit" id="button-addon2">Button</button>

                </div>
            </form>
            <img src="https://images.bewakoof.com/web/airoplane.png" alt="" />




        </div>
    )
}
