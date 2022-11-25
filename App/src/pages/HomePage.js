import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

class HomePage extends React.Component {

  render(){
    return (

      <div className="p-4">

        {/* <div className="px-4 py-8 md:px-6 lg:px-8">
            <div className="grid grid-nogutter surface-section text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Create the screens your</span>
                        <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Button label="Learn More" type="button" className="mr-3 p-button-raised"></Button>
                        <Button label="Live Demo" type="button" className="p-button-outlined"></Button>
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <img src="assets/images/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
        </div> */}

        <div className="relative p-8 overflow-hidden" style={{ minHeight: '60rem' }}>

            <img src="assets/images/violeta.jpg" alt="hero-2" className="absolute top-0 left-0 w-auto h-full block md:w-full" />

            <div className="text-center my-8 relative">
                <div className="text-6xl text-white font-bold mb-1">FairDe</div>
                <div className="text-6xl text-primary font-bold mb-4">Because we believe you!</div>
                <p className="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style={{ maxWidth: '500px' }}>We are a protocol that allows fairer decisions to be made in disputes involving organizations, companies, DAOs through anonymous votes and protecting the identity of the victims.</p>

                <Button label="More About Us" type="button"></Button>

                <p className="text-sm mt-4 mb-4 line-height-3 text-white">Available for more than +1000 organizations, companies and DAO's</p>
                {/* <div className="flex justify-content-center align-items-center">
                    <a href="https://www.apple.com" className="text-white mr-3">
                        <i className="pi pi-apple text-2xl"></i>
                    </a>
                    <a href="https://play.google.com" className="text-white mr-3">
                        <i className="pi pi-android text-2xl"></i>
                    </a>
                    <a href="https://www.facebook.com" className="text-white">
                        <i className="pi pi-facebook text-2xl"></i>
                    </a>
                </div> */}
            </div>
        </div>        

        <div className="px-4 py-8 md:px-6 lg:px-8" style={{ background: 'radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }}>
          <div className="text-blue-600 font-medium mb-3">About Us</div>
          <div className="text-900 text-2xl font-bold mb-3">Focus on the work that matters</div>
          <div className="text-700 text-sm">Focus on solving problems in the most diplomatic, decentralized and fair way possible. </div>
          <div className="grid mt-7">
              <div className="col-12 md:col-4">
                  <div className="shadow-1 p-5 surface-card text-center">
                      <div className="border-circle bg-blue-50 p-4 text-blue-600 inline-flex justify-content-center align-items-center mb-4">
                          <i className="pi pi-heart text-5xl "></i>
                      </div>
                      <div className="text-900 font-medium text-xl mb-4">Make a report</div>
                      <div className="text-700 text-sm mb-4 line-height-3">If you have a report to make, you can do it through our protocol, it will allow us to keep your identity anonymous, we will expose your case with neutral jurors outside your institution and we will make sure that the process is carried out in the most transparent way possible. Trust us</div>
                      <Button label="Learn More" className="p-button-text font-bold" />
                  </div>
              </div>
              <div className="col-12 md:col-4">
                  <div className="shadow-1 p-5 surface-card text-center">
                      <div className="border-circle bg-purple-50 p-4 text-purple-600 inline-flex justify-content-center align-items-center mb-4">
                          <i className="pi pi-wifi text-5xl"></i>
                      </div>
                      <div className="text-900 font-medium text-xl mb-4">Managment to reports</div>
                      <div className="text-700 text-sm mb-4 line-height-3">if you are an organization you can have access to the easiest and safest way to solve your organization's problems. Because with happy contributors you will have better results!</div>
                      <Button label="Learn More" className="p-button-text font-bold" />
                  </div>
              </div>
              <div className="col-12 md:col-4">
                  <div className="shadow-1 p-5 surface-card text-center">
                      <div className="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
                          <i className="pi pi-lock text-5xl"></i>
                      </div>
                      <div className="text-900 font-medium text-xl mb-4">Magical Privacy</div>
                      <div className="text-700 text-sm mb-4 line-height-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                      <Button label="Learn More" className="p-button-text font-bold" />
                  </div>
              </div>
          </div>
        </div>        

        <div className="bg-gray-800 px-4 py-8 md:px-6 lg:px-8">
            <div className="grid">
                <div className="col-12 md:col-6">
                    <div className="pr-0 md:pr-8">
                        <div className="text-blue-500 font-bold text-5xl mb-5">Manage Your Claims</div>

                        <div className="mb-5 border-blue-500 pl-3" style={{ borderLeft: '4px solid' }}>
                            <span className="text-white font-bold text-2xl">Security</span>
                            <div className="text-gray-400 text-sm line-height-3 mt-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        </div>

                        <div className="mb-5">
                            <span className="text-gray-400 font-bold text-2xl">Extensive Solutions</span>
                            <div className="text-gray-400 text-sm line-height-3 mt-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                        </div>

                        <div className="mb-5">
                            <span className="text-gray-400 font-bold text-2xl">Magical Privacy</span>
                            <div className="text-gray-400 text-sm line-height-3 mt-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <img src="assets/images/feature-3.png" alt="Image" className="w-full" />
                </div>
            </div>
        </div>        

      </div>

    );  
  }

}

export default HomePage;