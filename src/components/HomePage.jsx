/* jshint ignore:start */
import React from "react";
import Button from "./Button";

function HomePage() {
    return (
        <div>
            <div className="main-content">
                <p id = "content" class="home-cnt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button 
                    class= "btn-home"
                    title="Get Started"
                    name="HomePage"
                />
            </div>
            <img className="home-img" src="images/home.svg" alt="home-img" />
      
        </div>
    );
}

export default HomePage;
/* jshint ignore:end */