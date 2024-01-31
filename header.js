class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
         <header id="header" class="">
              <!-- header -->
              <div class="header-wrapper">
                  <div class="header-container">
                      <div>
                          <div class="logo-name">
                              <div class="logo"><a href="index.html" title=""><img src="img/logo.jpg"
                                                                                   alt="logo"></a></div>
                              <div class="name">
                                  <a href="index.html" title="">
                                      <h5>Gurukal Career Academy </h5>
                                      <h5 class="primary-color">Khandala</h5>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="header-links">
                          <a href="#" data-toggle="popover" title="Address"
                             data-content=" gala no-1, fuji complex,Near Market yard ,Shivaji Chowk ,Khandala 412802"
                             data-placement="bottom"><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></a>

                          <a href="#" data-toggle="popover" title="Phone No." data-content="+91-7620533272"
                             data-placement="bottom"><i class="fa fa-phone fa-lg" aria-hidden="true"></i></a>

                          <a href="#" data-toggle="popover" title="Email" data-content="gurukulkhandala16427@gmail.com"
                             data-placement="bottom"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
                      </div>
                  </div>
              </div>
              <nav>
                  <div class="navbar navbar-inverse navbar-custom" role="navigation">
                      <div class="container">
                          <div class="navbar-header">
                              <button type="button" class="navbar-toggle" data-toggle="collapse"
                                      data-target=".navbar-collapse">
                                  <span class="sr-only">Toggle navigation</span>
                                  <span class="icon-bar"></span>
                                  <span class="icon-bar"></span>
                                  <span class="icon-bar"></span>
                              </button>
                          </div>
                          <div class="collapse navbar-collapse">
                              <ul class="nav navbar-nav">
                                  <li>
                                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Institute <b
                                              class="caret"></b></a>
                                      <ul class="dropdown-menu multi-level">
                                          <li><a href="about.html">About</a></li>
                                          <li><a href="directors_message.html">Director's Message</a></li>

                                          <li><a href="society_members.html">Society Members</a></li>
                                          <li><a href="academic_council.html">Academic Council</a></li>


                                      </ul>
                                  </li>
                                  <li>
                                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Admission <b
                                              class="caret"></b></a>
                                      <ul class="dropdown-menu multi-level">
                                          <li><a href="btech_admission.html">Police</a></li>
                                          <li><a href="mtech_admission.html">Army</a></li>
                                          <li><a href="phd_admission.html">Bsf</a></li>
                                      </ul>
                                  </li>
                                  <li>
                                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">People <b class="caret"></b></a>
                                      <ul class="dropdown-menu multi-level">
                                          <li><a href="faculty.html">Faculty</a></li>

                                      </ul>
                                  </li>
                                  <li>
                                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">More <b
                                              class="caret"></b></a>
                                      <ul class="dropdown-menu multi-level">

                                          <li><a href="library.html">Library</a></li>

                                      </ul>
                                  </li>

                                  <li><a href="gallery.html">Photo Gallery</a></li>
                              </ul>
                          </div>
                          <!--/.nav-collapse -->
                      </div>
                  </div>
              </nav>
          </header>
    `;
  }
}

customElements.define('header-component', Header);


