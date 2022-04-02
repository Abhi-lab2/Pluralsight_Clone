function navbar(){
    return `
    <div id="navbar">
        <div id="left">
            <div style="color: white;width: 220px;height: 80%;">
            <a href="../homepage/index.html"><img id="logo" src="https://app.pluralsight.com/id/img/login-logo.png" alt=""></a>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Platform
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="PlatformIn">
                    <div style="border-right: 1px solid rgb(230,230,230);margin: 0 0 0 15px;">
                        <p>WAYS TO UPSKILL</p>
                        <a href="../courses/courses.html"> <h4 ><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/dashboard.png" alt="">
                            Courses</h4></a>
                        <h4><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/iq.png" alt="">
                            Skill assessments</h4>
                        <h4><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/cloud.png" alt="">
                            Lab</h4>
                        <h4><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/hand.png" alt="">
                            Hands-on learning</h4>
                        <h4><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/certifications.png" alt="">
                            Certification prep</h4>
                        <h4><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/live-classes-icon.svg" alt="">
                            Live Classes</h4>
                        <h4><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/analytics.png" alt="">
                            Team efficiency</h4>
                    </div>
                    <div style="display: flex;gap:30px;">
                        <div>
                            <p>SKILLS FOR</p>
                            <h4>Software development</h4>
                            <h4>IT ops</h4>
                            <h4>Info&cyber security</h4>
                            <h4>Cloud computing</h4>
                            <h4>Machine learning/AI</h4>
                            <h4>Data professional</h4>
                        </div>
                        <div>
                            <p>TOP TRENDING PATHS</p>
                            <div style="display: grid;grid-template-columns: repeat(2,1fr);grid-gap:10px;">

                                <div style="height: 65px ;width:250px ;display: flex;gap: 13px;background-color: rgb(102,102,102);border-radius: 8px;">
                                    <img src="https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png?w=75" style="height:100%;width:17%;" alt="">
                                    <h5>
                                        Microsoft Azure Development<p>4Courses7hours<i class="fa-brands fa-discourse"></i>
                                        </p>
                                    </h5>
                                </div>
                                <div style="height: 65px ;width:250px ;display: flex;gap: 13px;background-color: rgb(102,102,102);border-radius: 8px;">
                                    <img src="https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png?w=75" style="height:100%;width:17%;" alt="">
                                    <h5>
                                        AWS Operations
                                        <p>7Courses14Hours<i class="fa-brands fa-discourse"></i>
                                        </p>
                                    </h5>
                                </div>
                                <div style="height: 65px ;width:250px ;display: flex;gap: 13px;background-color: rgb(102,102,102);border-radius: 8px;">
                                    <img src="https://pluralsight2.imgix.net/paths/images/r-programming-eb2e267a97.png?w=75" style="height:100%;width:17%;" alt="">
                                    <h5>
                                        Cleaning Data with R
                                        <p>5courses8Hours<i class="fa-brands fa-discourse"></i>
                                        </p>
                                    </h5>
                                </div>
                                <div style="height: 65px ;width:250px ;display: flex;gap: 13px;background-color: rgb(102,102,102);border-radius: 8px;">
                                    <img src="https://pluralsight2.imgix.net/paths/images/python-7be70baaac.png?w=75" style="height:100%;width:17%;" alt="">
                                    <h5>
                                        Core Python
                                        <p>
                                            24Course42Hours<i class="fa-brands fa-discourse"></i>
                                        </p>
                                    </h5>
                                </div>
                                <div style="height: 65px ;width:250px ;display: flex;gap: 13px;background-color: rgb(102,102,102);border-radius: 8px;">
                                    <img src="https://pluralsight2.imgix.net/paths/images/ruby-7e88ddd5f0.png?w=75" style="height:100%;width:17%;" alt="">
                                    <h5>
                                        Ruby Language Fundamentals<p>7Courses13Hours<i class="fa-brands fa-discourse"></i>
                                        </p>
                                    </h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="dropdown">
                <button class="dropbtn">Products
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="ProductsIn">
                    <div style="border-right: 1px solid grey;width: 50%;margin: 0 10px 0 15px;">
                        <div style="border-bottom: 1px solid grey;height: 50%;">
                        <a href="../product_page/productskill.html"><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" style="height:30%;width:80%" alt=""></a>
                            <br><h5>Build tech skills to drive results</h5>
                        </div>
                        <div>
                            <h4>What is Skills?
                                <br>View plans</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                        <a href="../product_page/product.html"><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png" style="height:30%;width:80%" alt=""></a>
                            <br><h5>Get insights into your workflow</h5>
                        </div>
                        <div>
                            <h4>What is flow?
                                <br>View Plans</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Resources
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="ResourceIn">
                    <div style="display: flex;width:60%;gap: 20px;">
                        <div style="margin: 0 0 0 15px;border-right: 1px solid grey;">
                            <p>LEARN</p><br>
                            <h4>Blog</h4>
                            <h4>Customer stories</h4>
                            <h4>Resource center</h4>
                            <h4>Guides</h4>
                            <h4>App Download</h4>
                            <h4>Support</h4>
                        </div>
                        <div>
                            <p>CONNECT</p><br>
                            <h4>Event</h4>
                            <h4>webinar</h4>
                            <h4>Podcast</h4><br>
                            <p>PODCAST</p>
                            <h4>All Handle on Tech</h4>
                            <h4>Perspective in Leadership</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>2022 Tech Forecast and Build Better Blueprint</h2>
                            <h5>PREPARE FOR SHIFTS AND TRENDS IN THE INDUSTRY</h5>
                            <button style="height: 50px;background-color: rgb(236,0,140);color: white;width:150px;margin: 0 0 0 50px">CHECK IT OUT</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div style="color: white;">
                For Individuals
            </div>
        </div>
        <div id="right">
            <div>
                <i class="fa-solid fa-magnifying-glass" style="color: white;"></i>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Sign In
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="SignIn">
                    <div style="width: 50%;border-right: 1px solid grey;margin: 0 0 0 10px;">
                        <h5>SIGN IN WITH</h5><br>
                        <a href="../login-sigup/login.html"><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" style="width: 90%;" alt=""></a>
                    </div>
                    <div style="width: 50%;">
                        <h5>SIGN IN WITH</h5><br>
                        <a href="../login-sigup/login.html"><img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png" style="width: 90%;" alt=""></a>
                    </div>
                </div>
            </div>
            <div>
                <button style="background-color: rgb(33,33,33);color: white;height: 35px;border: 1px solid white;">
                <a href="../skillpage/skillsPage.html">TRY FOR FREE</a> 
                </button>
            </div>
        </div>
    </div>

`
}
export default navbar;