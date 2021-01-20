import React, { Component } from 'react';
import cancel from '../../../assets/images/cancel.png';
import activity from '../../../assets/images/activity.png';
import home from '../../../assets/images/home.png';

class Test extends Component {
  state = {
    modal: false,
    collapse: false,
    collapseDropDown: false,
    collapseSubDropDown: false,
    collapseSubSubDropDown: false,
    collapseSubSubSubDropDown: false,
    selectOne: false,
    activityModal: false,
    homeModal: false,
    dropdown: false
  };

  handleClick() {
    this.setState({ modal: !this.state.modal });
  };

  handleCancel() {
    this.setState({
      modal: false,
      activityModal: false,
      homeModal: false,
      collapse: false,
      collapseDropDown: false,
      collapseSubDropDown: false,
      collapseSubSubSubDropDown: false,
      selectOne: false
    });
  };

  handleActivityModalCancel() {
    this.setState({ activityModal: !this.state.activityModal });
  };

  handleHomeModalCancel() {
    this.setState({ homeModal: !this.state.homeModal });
  };

  handleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  };

  handleCollapseDropDown() {
    this.setState({ collapseDropDown: !this.state.collapseDropDown });
  };

  handleCollapseSubDropDown() {
    this.setState({ collapseSubDropDown: !this.state.collapseSubDropDown });
  };

  handleCollapseSubSubDropDown() {
    this.setState({ collapseSubSubDropDown: !this.state.collapseSubSubDropDown });
  };

  handleCollapseSubSubSubDropDown() {
    this.setState({ collapseSubSubSubDropDown: !this.state.collapseSubSubSubDropDown });
  };

  handleSelectOne() {
    this.setState({ selectOne: !this.state.selectOne });
  };

  handleActivityOption() {
    this.setState({ activityModal: !this.state.activityModal });
  };

  handleHomeOption() {
    this.setState({ homeModal: !this.state.homeModal });
  };

  render() {
    return (
      <>
        <div className="product-page-wrapper">
          <div className="container-fluid">
            <div className="product-popup">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={() => this.handleClick()}>
                Open modal
              </button>
              <div className={this.state.activityModal ? "modal-open modal show" : "modal"} id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Activity</h4>
                      <button type="button" className="close" data-dismiss="modal">
                        <img src={cancel} alt="cancel-modal" onClick={() => this.handleActivityModalCancel()} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.state.homeModal ? "modal-open modal show" : "modal"} id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Home</h4>
                      <button type="button" className="close" data-dismiss="modal">
                        <img src={cancel} alt="cancel-modal" onClick={() => this.handleHomeModalCancel()} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.state.modal && !this.state.activityModal && !this.state.homeModal ? "modal-open modal show" : "modal"} id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Create your main product</h4>
                      <button type="button" className="close" data-dismiss="modal">
                        <img src={cancel} alt="cancel-modal" onClick={() => this.handleCancel()} />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="bs-example product-info">
                        <div className="accordion" id="accordionExample">
                          <div className="card">
                            <div className="card-header" id="headingOne">
                              <h2 className="mb-0" onClick={() => this.handleCollapse()}>
                                <button type="button" className={this.state.collapse ? "btn btn-link collapsed" : "btn btn-link"} data-toggle="collapse" data-target="#collapseOne">
                                  <i className={this.state.collapse ? "fa fa-minus" : "fa fa-plus"}></i>
                                  <b>I will import a main product information from my other calendar</b>
                                </button>
                              </h2>
                            </div>
                            <div id="collapseOne" className={this.state.collapse ? "collapse show" : "collapse"} aria-labelledby="headingOne"
                              data-parent="#accordionExample">
                              <div className="card-body">
                                <p> Select product to resuse from another calender </p>
                                <nav className="navbar navbar-expand-lg navbar-light">
                                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                      <li className={this.state.collapseDropDown ? "nav-item dropdown show" : "nav-item dropdown "}>
                                        <a className="nav-link dropdown-toggle" href
                                          id="navbarDropdownMenuLink"
                                          data-toggle="dropdown" ariaHasPopup="true"
                                          aria-expanded="true" onClick={() => this.handleCollapseDropDown()}> Select <i
                                            className="fas fa-chevron-right"></i> </a>
                                        <ul className={this.state.collapseDropDown ? "dropdown-menu show" : "dropdown-menu"}
                                          aria-labelledby="navbarDropdownMenuLink">
                                          <li><a className="dropdown-item border-bottom"
                                            href>calender title 1 <i
                                              className="fas fa-chevron-right"></i></a>
                                          </li>
                                          <li className="dropdown-submenu">
                                            <a onClick={() => this.handleCollapseSubDropDown()} className="dropdown-item dropdown-toggle border-bottom"
                                              href>Calender title 2 <i
                                                className="fas fa-chevron-right"></i></a>
                                            <ul className={this.state.collapseSubDropDown ? "dropdown-menu show" : "dropdown-menu"}>
                                              <li className="dropdown-submenu bg-yellow">
                                                <a onClick={() => this.handleCollapseSubSubDropDown()} className="dropdown-item dropdown-toggle border-bottom" href>
                                                  Activity
                                                <i className="fas fa-chevron-right"></i></a>
                                                <ul className={this.state.collapseSubSubDropDown ? "dropdown-menu show" : "dropdown-menu"}>
                                                  <li><a className="dropdown-item" href>Subsubmenu action</a></li>
                                                  <li><a className="dropdown-item" href>Another subsubmenu action</a>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li className="dropdown-submenu bg-yellow">
                                                <a onClick={() => this.handleCollapseSubSubSubDropDown()} className="dropdown-item dropdown-toggle" href>itinerary <i
                                                  className="fas fa-chevron-right"></i></a>
                                                <ul className={this.state.collapseSubSubSubDropDown ? "dropdown-menu show bg-yellow fontstyle" : "dropdown-menu bg-yellow fontstyle"}>
                                                  <li><a className="dropdown-item" href>Main product1</a></li>
                                                  <li><a className="dropdown-item" href>Main product2</a>
                                                  </li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-text">
                        <p>
                          Describe the main product you will like to use to attract travelers to make a purchase. This is what gets you access to customers calendar. This is what gets you access to customers calendar. You'll be able to add more details next.
                        </p>
                      </div>
                      <form action="/action_page.php">
                        <div className="form-group">
                          <label for="usr">Enter Your Product Title <sup><i className="fas fa-info-circle" style={{ color: "#e2c022" }}></i></sup></label>
                          <input type="text" className="form-control" id="usr" name="username" />
                        </div>
                        <div className="form-group">
                          <label for="usr">Select Category <sup><i className="fas fa-info-circle" style={{ color: "#e2c022" }}></i></sup></label>
                          <div className={this.state.selectOne ? "dropdown show" : "dropdown"}>
                            <button onClick={() => this.handleSelectOne()} type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                              Select One  <i
                                className="fas fa-chevron-right"></i>
                            </button>
                            <div className={this.state.selectOne ? "dropdown-menu show" : "dropdown-menu"}>
                              <a onClick={() => this.handleActivityOption()} className="dropdown-item" href><img src={activity} alt="activity" /> Activity</a>
                              <a onClick={() => this.handleHomeOption()} className="dropdown-item" href><img src={home} alt="home" /> Home</a>
                            </div>
                          </div>
                        </div>
                        <div className="form-group textarea">
                          <label for="comment" >Why shold travellers book this tour?</label>
                          <textarea className="form-control" rows="5" id="comment" placeholder="Lorem Ipsum is simply dummy text of the printing "></textarea>
                          <p>100 characters needed</p>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger continue" data-dismiss="modal">Continue</button>
                      <button type="button" className="btn btn-danger help" data-dismiss="modal"><i className="far fa-question-circle"></i> Help</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.modal ? "modal-backdrop show" : ""}></div>
      </>
    );
  };
};

export default Test;