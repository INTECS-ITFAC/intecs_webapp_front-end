import React, { Component } from "react";
//import Navbar from "../../components/navbar/Navbar";
import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import Contactus from "../../components/contactus/Contactus";
import EventList from "../../components/eventList/EventList";
import LatestNews from "../../components/latestNews/LatestNews";
// import PropTypes from "prop-types";

export class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <HomeCarousel />
        <LatestNews />
        <EventList />
        <Contactus />
      </div>
    );
  }
}

export default Home;
