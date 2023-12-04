import React from 'react';
import Navbar from '../components/NavBar';
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="md:p-10 my-5 mt-10 bg-gray-900 text-white">
        <div className="grid md:grid-cols-2 px-10">
          <div className="maxImg">
            <img
              src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6487bbe964db7_Overview-Image.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="lebrone my-5 md:my-0">
            <div className="md:mt-32">
              <h1 className="text-5xl font-bold max-font">About Fit Fusion.</h1>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam vero facilis, repellat rem reprehenderit
                numquam corrupti praesentium earum id minus necessitatibus nulla? Similique perspiciatis, doloremque amet
                mollitia, iste enim ipsam tempora facilis non odio sunt quasi quidem reprehenderit cupiditate corporis
                deserunt eos culpa totam sit laborum ea sequi. Eum.
              </p>

              <button className="bn px-10 py-5 rounded-full bg-white text-gray-900 mt-5">Workout with us!</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
      <div className="services my-10 grid grid-cols-6">
        <div></div>
        <div className="col-span-4 ser p-5">
          <h1 className="text-5xl font-bold md:ml-5 text-gray-800">Services</h1>
          <p className="ml-5 mt-5 text-gray-700 max-font">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum temporibus cum, perferendis illo ab sapiente
            provident repudiandae impedit maxime ipsa reprehenderit exercitationem iste fugit expedita ut eveniet magni
            assumenda porro.
          </p>
        </div>
        <div></div>
        <div></div>
        
      </div>

      <div className="trainings grid md:grid-cols-3 md:px-10 gap-5">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6487bbe964db7_Overview-Image.png"
            alt=""
            srcset=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pilates Training</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bn px-10 py-5">Learn More</button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6487bbe964db7_Overview-Image.png"
            alt=""
            srcset=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Cardio Training</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bn px-10 py-5">Learn More</button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6487bbe964db7_Overview-Image.png"
            alt=""
            srcset=""
          />
          <div className="px-6 py-4 mb-3">
            <div className="font-bold text-xl mb-2">CrossFit Training</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bn px-10 py-5">Learn More</button>
          </div>
        </div>
      </div>
      </div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  )
}

export default About;
