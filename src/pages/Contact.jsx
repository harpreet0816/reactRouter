import React from 'react';

const Contact = () => {
    return (
        <div>
        <div className="w-4/5 mx-auto py-10 text-white  bg-gray-900 bg-opacity-40">
            <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className='mx-auto'>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-white mb-4">{`Have a question or inquiry? Drop us a message and we'll get back to you as soon as possible.`}</p>
                <form>
                    <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-">Your Name</label>
                    <input type="text" id="name" className="mt-1 text-white p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black-300 rounded-md" style={{background: '#1067e985'}}/>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-white">Your Email</label>
                    <input type="email" id="email" className="mt-1 text-white p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  border-black-300 rounded-md" style={{background: '#1067e985'}}/>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                    <textarea id="message" rows="4" className="mt-1 text-white p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black-300 rounded-md" style={{background: '#1067e985'}}></textarea>
                    </div>
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
                </form>
                </div>
                <div className='mx-auto'>
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <p className="text-white-600 mb-4">Visit us at our office:</p>
                <address className="text-white-600">
                    123 Main Street<br />
                    City, State 12345<br />
                    Country
                </address>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;