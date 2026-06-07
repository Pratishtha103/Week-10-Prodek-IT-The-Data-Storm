function Contact(){
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Thanks! We'll be in touch.");
        e.target.reset();
    }
    return(
        <div className="p-6 flex flex-col items-center justify-items-center gap-20 mt-2">
            <div className="flex flex-col justify-items-center text-center">
                <h3>Share your feedbacks , suggestions and complaints.
                    <br/>
                    We are all ears.
                </h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-items-center items-center gap-5 text-center">
                <input className="border-2 rounded-lg h-15 w-100 p-2" type="text" placeholder="Your Name" name="name"/>
                <input className="border-2 rounded-lg h-15 w-100 p-2" type="text" placeholder="Your Email" name="email"/>
                <textarea className="border-2 rounded-lg h-30 w-100 p-2" name="comments" id="comments" placeholder="Your Comments"></textarea>
                <button className=" bg-white text-[#333] hover:bg-[#333] hover:text-white border-2 rounded-lg h-10 w-40 p-2 cursor-pointer" type="submit">Send</button>
            </form>
        </div>
    )
}
export default Contact;