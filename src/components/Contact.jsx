import React from 'react';
import Navbar from './NavBar';
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="waiting grid md:grid-cols-10 text-white mt-10">
        <div></div>
        <div className="col-span-8 waiting-card w-full rounded-md">
          <div className="grid md:grid-cols-2">
            <div className="waiting-left-side ">
              <div className="waiting-left p-10">
                <h1 className="text-6xl font- text-gray-900">What Are You Waiting For?</h1>
                <p className="my-5 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem exercitationem numquam incidunt. Fuga dicta ea, sequi deserunt ad odit. Autem repellendus dolor velit perspiciatis quidem dolorum, aliquam sunt rerum.</p>
                <button className="rounded-md hover:bg-black hover:text-white bg-orange-400 font-bold text-black px-10 py-5">Contact Us</button>
              </div>
            </div>

            <div className="waiting-right">
              <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <form action="#" class="space-y-8">
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                  </div>
                  <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div>
                  <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
