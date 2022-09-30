import React from "react";
import Reward from "../Reward component/Reward";
import './about.css'
const rewards = [
  {
    heading: "Bamboo Stand",
    pledge: "Pledge $25 or more",
    details:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
    amount: "101 ",
    stock: true,
    button: "select reward",
  },

  {
    heading: "Black Edition Stand",
    pledge: "Pledge $75 or more",
    details:
      "  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: "101 ",
    stock: true,
    button: "select reward",
  },
  {
    heading: " Mahogany Special Edition",
    pledge: "Pledge $200 or more",
    details:
      " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: "0",
    stock: false,
    button: "out of stock",
  },
];

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h3 className="about-heading"> About this project</h3>
        <p className="about-paragraph">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
          <br />
          <br />
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <div className="rewards">
        {rewards.map((reward) => {
          return <Reward key={reward.heading} reward={reward} />;
        })}
      </div>
    </section>
  );
};

export default About;
