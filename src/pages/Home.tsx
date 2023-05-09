
import { PageWrapper } from "./PageWrapper";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { FaInstagram } from "react-icons/fa";

import './home.scss';

export const Home = () => {
  return (
    <PageWrapper>
      <div className="homepage" id="home">
        <div className="container">
          <div className="row">
              <div className="col-lg-6 heading">
                <h1>Welcome to Kaskina</h1>
                <p>Healthy skin is always in.</p>
                <a href="https://www.instagram.com/kaskina_skinandlaser/" target="_blank"><button className="btn btn-success"><FaInstagram size={30}/> Make a booking</button></a> 
              </div>
              <div className="col-lg-6 contact">
                <ContactForm />
              </div>
          </div>
        </div>
        
      </div>
    </PageWrapper>
  );
};
