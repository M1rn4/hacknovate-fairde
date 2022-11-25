
import React from 'react';
import {Ripple } from 'primereact/ripple';


class FooterComponent extends React.Component {

  render(){
    return (

        <div className="p-4">
            <div className="border-2 surface-border border-round surface-card" style={{ minHeight: '10rem' }}>
                <div className="surface-section px-4 md:px-6 lg:px-8">
                    <div className="surface-section py-6 flex flex-column sm:flex-row align-items-center justify-content-between">
                        <div className="flex flex-nowap font-medium">
                            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">HOME<Ripple /></a>
                            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">ABOUT<Ripple /></a>
                            <a className="p-ripple cursor-pointer block text-700 py-2 px-3 transition-colors transition-duration-150 hover:surface-300 border-round hover:text-900">CONTACT<Ripple /></a>
                        </div>
                    </div>
                </div>
            </div>        
        </div>        
    );
  }
  
  }
  
  export default FooterComponent;