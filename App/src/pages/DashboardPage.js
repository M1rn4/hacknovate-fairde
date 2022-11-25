import React from 'react';

import {Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';

class  DashboardPage extends React.Component {


  btnRef26 = "#";
  btnRef27 = "#";
  btnRef28 = "#";
  btnRef29 = "#";
  btnRef30 = "#";
  btnRef31 = "#";
  btnRef32 = "#";

  render(){
    return (

      <div className="p-4">
          <div className="border-2 surface-border border-round surface-card" style={{ minHeight: '4rem' }}>

          <div className="min-h-screen flex relative lg:static" style={{ backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)' }}>
            <div id="app-sidebar-7" className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out bg-white-alpha-50 border-white-alpha-30" style={{ width: '280px', backdropFilter: 'blur(10px)' }}>
                <div className="flex flex-column h-full">
                    <div className="overflow-y-auto">
                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={this.btnRef26} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={this.btnRef26} className="p-ripple p-3 flex align-items-center justify-content-between text-gray-600 cursor-pointer">
                                        <span className="font-medium">FAVORITES</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">Dashboard</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-bookmark mr-2"></i>
                                            <span className="font-medium">Create a Report</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass nodeRef={this.btnRef27} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                                            <a ref={this.btnRef27} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Status</span>
                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <StyleClass nodeRef={this.btnRef28} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup" >
                                                    <a ref={this.btnRef28} className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">Revenue</span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">View</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">Search</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">Expenses</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-users mr-2"></i>
                                            <span className="font-medium">Check your assignation</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">Messages</span>
                                            <Ripple />
                                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Check status</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-800 hover:bg-purple-50 transition-duration-150 transition-colors" style={{ borderRadius: '30px' }}>
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex flex-column relative flex-auto">
                <div className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static bg-white-alpha-50 border-white-alpha-40" style={{ height: '60px' }}>
                    <div className="flex">
                        <StyleClass nodeRef={this.btnRef31} selector="#app-sidebar-7" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                            <a ref={this.btnRef31} className="p-ripple cursor-pointer block lg:hidden text-gray-800 mr-3">
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                    </div>
                    <StyleClass nodeRef={this.btnRef32} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                        <a ref={this.btnRef32} className="p-ripple cursor-pointer block lg:hidden text-gray-800">
                            <i className="pi pi-ellipsis-v text-2xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                </div>
                <div className="p-5 flex flex-column flex-auto">
                    <div className="border-2 border-dashed border-round flex-auto bg-white-alpha-50 border-white-alpha-40">
                    <div>
                            <span className="text-900 font-medium text-3xl">User</span>
                            <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                            <div className="flex align-items-center flex-wrap text-sm">
                                <div className="mr-5 mt-3">
                                    <span className="font-medium text-500">FOLLOWERS</span>
                                    <div className="text-700 mt-2">333</div>
                                </div>
                                <div className="mr-5 mt-3">
                                    <span className="font-medium text-500">PROJECTS</span>
                                    <div className="text-700 mt-2">26</div>
                                </div>
                                <div className="mr-5 mt-3">
                                    <span className="font-medium text-500">COLLECTIONS</span>
                                    <div className="text-700 mt-2">17</div>
                                </div>
                                <div className="mt-3">
                                    <span className="font-medium text-500">SHOTS</span>
                                    <div className="text-700 mt-2">130</div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                        <Button icon="pi pi-bookmark" className="p-button-rounded mr-2" />
                        <Button icon="pi pi-heart" className="p-button-rounded p-button-success mr-2" />
                        <Button icon="pi pi-list" className="p-button-rounded p-button-help" />
                    </div>
                    
                </div>
                <div className="p-5">
                <div className="grid">
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Reports</span>
                                    <div className="text-900 font-medium text-xl">2</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">24 new status </span>
                            <span className="text-500">since last visit</span>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Status</span>
                                    <div className="text-900 font-medium text-xl">4 new updates</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">%52+ </span>
                            <span className="text-500">since last week</span>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Reports accepted</span>
                                    <div className="text-900 font-medium text-xl">2</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">5</span>
                            <span className="text-500">newly registered</span>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Comments</span>
                                    <div className="text-900 font-medium text-xl">152 Unread</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">85 </span>
                            <span className="text-500">responded</span>
                        </div>
                    </div>Orders<br>
                    </br>
                    <div className="col-22 xl:col-6">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="text-xl text-900 font-medium mb-5">Latest News</div>
                            <ul className="list-none p-0 m-0">
                                <li className="pb-3 border-bottom-1 surface-border">
                                    <div className="font-medium text-900 mb-2">Check your comments</div>
                                    <div className="line-height-3 text-600" style={{ maxWidth: '30rem' }}>Vitae turpis massa sed elementum tempus egestas sed sed risus.
                                        In the next days you will recive updates</div>
                                </li>
                            </ul>
                            <div className="flex justify-content-between pt-3">
                                <Button label="Clear All" className="p-button-outlined p-button-secondary w-6 mr-2" />
                                <Button label="New Claim" className="p-button-outlined w-6 ml-2" />
                            </div>
                        </div>
                    </div><br></br>

                    <div className="col-12 xl:col-6">
                        <div className="surface-card shadow-2 border-round p-4">
                            <div className="flex justify-content-between align-items-center mb-5">
                                <span className="text-xl text-900 font-medium">Judges Members</span>
                            </div>
                            <ul className="list-none p-0 m-0">
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <div>
                                            <span className="block text-900 font-medium mb-1">XXX...XXX</span>
                                            <div className="text-600">Judge1</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <div>
                                            <span className="block text-900 font-medium mb-1">XXX...XXX</span>
                                            <div className="text-600">Judge2</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div className="flex">
                                        <div>
                                            <span className="block text-900 font-medium mb-1">XXXXX...XXX</span>
                                            <div className="text-600">Judge3</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="border-round p-4">
                            <div className="text-xl text-900 font-medium mb-5">Timeline</div>
                            <div className="mb-5 flex">
                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                    <span className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>
                                        <i className="pi pi-image"></i>
                                    </span>
                                    <div className="h-full bg-blue-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                </div>
                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div className="mb-3">
                                        <span className="text-900 font-medium inline-block mr-3">Judge1</span>
                                        <span className="text-500 text-sm">1 minute ago</span>
                                    </div>
                                    <div className="line-height-3 text-700 mb-3">
                                        Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                                        Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
                                    </div>
                                    <div className="text-500 flex align-items-center">
                                        <i className="pi pi-heart mr-1"></i>
                                        <span className="mr-3">0</span>

                                        <i className="pi pi-comment mr-1"></i>
                                        <span className="mr-3">1</span>

                                        <i className="pi pi-eye mr-1"></i>
                                        <span>24</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 flex">
                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                    <span className="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>
                                        <i className="pi pi-image"></i>
                                    </span>
                                    <div className="h-full bg-orange-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                </div>
                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div className="mb-3">
                                        <span className="text-900 font-medium inline-block mr-3">Judge2</span>
                                        <span className="text-500 text-sm">2 hours ago</span>
                                    </div>
                                    <div className="line-height-3 text-700 mb-3">
                                        Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae.
                                        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                                    </div>
                                    <div className="text-500 flex align-items-center">
                                        <i className="pi pi-heart mr-1"></i>
                                        <span className="mr-3">16</span>

                                        <i className="pi pi-comment mr-1"></i>
                                        <span className="mr-3">6</span>

                                        <i className="pi pi-eye mr-1"></i>
                                        <span>23</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 flex">
                                <div className="flex flex-column align-items-center" style={{ width: '2rem' }}>
                                    <span className="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle" style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}>
                                        <i className="pi pi-image"></i>
                                    </span>
                                    <div className="h-full bg-purple-500" style={{ width: '2px', minheight: '4rem' }}></div>
                                </div>
                                <div className="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div className="mb-3">
                                        <span className="text-900 font-medium inline-block mr-3">Judge3</span>
                                        <span className="text-500 text-sm">4 hours ago</span>
                                    </div>
                                    <div className="line-height-3 text-700 mb-3">
                                        Euismod in pellentesque massa placerat duis ultricies lacus.
                                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
                                    </div>
                                    <div className="text-500 flex align-items-center">
                                        <i className="pi pi-heart mr-1"></i>
                                        <span className="mr-3">6</span>

                                        <i className="pi pi-comment mr-1"></i>
                                        <span className="mr-3">13</span>

                                        <i className="pi pi-eye mr-1"></i>
                                        <span>21</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>

          </div>
      </div>

      

    );
      

  }


}

export default DashboardPage;