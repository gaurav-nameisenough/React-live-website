import "./homepage.css"

import Topbar from "../../components/topbar/Topbar";
import Banner from "../../components/banner/Banner";
import Static from "../../components/staticsection/Static";
import Hire from "../../components/hiresection/Hire";
import Carertype from "../../components/carerstype/Carertype";
import Relationship from "../../components/relationship/Relationship";
import Clients from "../../components/clients/Clients";
import Works from "../../components/works/Works";
import Faq from "../../components/FAQ/Faq";
import Posters from "../../components/postersection/Posters";
import Footer from "../../components/footer/Footer";






export default function Homepage() {
  return (
    <div className="homepage">
      <Topbar title="Kanva-Care" />
        <Banner />
        <Static />
        <Hire />
        <Carertype />
        <Relationship />
        <Clients />
        <Works />
        <Faq />
        <Posters />
        <Footer />
    </div>
  )
}
