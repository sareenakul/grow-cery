import React from "react";
import bannerSlider from "../Banners/bannerSlider.css";

const BannerSlider = () =>{
    return(
        <main className="viewport">
            <div className="parallax-parent">
                <div className="background-colors"></div>

                <section className="paralax-child-container paralax-child-container__one">
                    <div className="paralax-child">
                        <h1>Groceries</h1>
                    </div>
                </section>

                <section className="paralax-child-container paralax-child-container__two">
                    <div className="paralax-child">
                        <h1>Restraunts</h1>
                    </div>
                </section>

                <section className="paralax-child-container paralax-child-container__three">
                    <div className="paralax-child">
                        <h1>Home Cooked Meals</h1>
                    </div>
                </section>

                <div className="parallax-background">
                    Free Delivery
                </div>
            </div>
        </main>
    )
}

export default BannerSlider;