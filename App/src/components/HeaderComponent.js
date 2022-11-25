
import React from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useIsMounted } from '../hooks/useIsMounted';

import {Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';



class HeaderComponent extends React.Component {

  saySomething = (something) => {
    console.log(something);
  }

  handleClick = (e) => {
    this.saySomething("element clicked");
  }


    render() {
      return(
      <div className="p-4">
          <div className="border-2 surface-border border-round surface-card" style={{ minHeight: '4rem' }}>

              {/* <div>
                  <div style={{ height: '200px', background: 'url("../assets/images/cover.png") no-repeat', backgroundSize: 'cover' }}></div>
                  <div className="px-4 py-5 md:px-6 lg:px-8 surface-section">
                      <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative" style={{ marginTop: '-2rem', top: '-70px', marginBottom: '-70px' }}>
                          <div>
                              <div style={{ width: '140px', height: '140px', borderRadius: '10px' }} className="mb-3 surface-card shadow-2 flex align-items-center justify-content-center">
                                  <img src="../assets/images/hyper.svg" alt="Image" width="70" height="70" />
                              </div>
                              <div className="text-900 text-3xl font-medium mb-3">Company Name</div>
                              <p className="mt-0 mb-3 text-700 text-xl">Vitae tortor condimentum lacinia quis vel eros.</p>
                              <div className="text-600 font-medium">
                                  <span>Software | USA | 15523 Followers</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> */}

              <div className="p-4 align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                    <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                        <li>
                            <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
                              href="/">
                                <i className="pi pi-home mr-2"></i>
                                <span>Home</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"
                            href="/#/Dashboard">
                                <i className="pi pi-calendar mr-2"></i>
                                <span>Dashboard</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                    <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                        <li>
                            <ConnectButton label="Connect Wallet" accountStatus={"full"} chainStatus={"name"} />
                        </li>
                    </ul>
                </div>


          </div>
      </div>
      );
    };
  }
  
  export default HeaderComponent;