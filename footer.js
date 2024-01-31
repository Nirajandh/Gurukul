class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer>
                                  <div class="footer-wrapper">
                                      <span class="logo"><img src="img/logo.jpg" alt=""></span>
                                      <div class="row">
                                          <div class="col-sm-4 address">
                                              <strong>Address : </strong>gala no-1, fuji complex,Near Market yard ,Shivaji Chowk ,Khandala 412802
                                          </div>
                                          <div class="col-sm-4 links">
                                              <div>
                                                  <a href="#news">News</a>
                                                  <i class="seperator"></i>
                                                  <a href="#announcements">Announcement</a>
                                                  <i class="seperator"></i>
                                                  <a href="#events">Events</a>
                                              </div>

                                              <div>
                                                  <a href="admissions.html">Admission</a>
                                                  <i class="seperator"></i>

                                                  <a href="faculty.html">Faculty</a>
                                              </div>
                                          </div>
                                          <div class="col-sm-4 footer-social">
                                              <a href="#!"><i class="fa fa-facebook" aria-hidden="true" title="Official Facebook Page"></i></a>
                                              <a href="https://github.com/Nirajandh"><i class="fa fa-github" aria-hidden="true"
                                                                                    title="Github Page of Creater"></i></a>
                                              <a href="https://www.linkedin.com/in/niranjan-dhayagude-69a8a8254/"><i class="fa fa-linkedin" aria-hidden="true" title="LinkedIn Profile of Creater"></i></a>
                                              <a href="#!" title=""><i class="fa fa-twitter" aria-hidden="true"
                                                                       title="Official Twitter Account"></i></a>
                                          </div>
                                           <div class="container">
                                                <div class="copyright">
                                                  &copy; Copyright <strong><span>@2024</span></strong>
                                                </div>
                                                <div class="credits">
                                                  <!-- All the links in the footer should remain intact. -->
                                                  <!-- You can delete the links only if you purchased the pro version. -->
                                                  <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                                  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ -->
                                                  Designed by <a href="https://nirajandh.github.io/Portfolio/">Niranjan Dhayagude</a>
                                                </div>
                                              </div>
                                      </div>
                                  </div>
                              </footer>
    `;
  }
}

customElements.define('footer-component', Footer);