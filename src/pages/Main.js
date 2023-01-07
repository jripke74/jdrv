import { Fragment } from 'react';

import rvtaaLogo from '../images/RVTAA-Logo-Transparant-Bckground-Web.png';

const Main = () => {
  const locatorUrl = 'https://rvservicegroup.com/member-information/?uid=3081';

  return (
    <Fragment>
        <h1>J&D RV Repair and Inspections</h1>
        <h2>
          Call Douglas Ripke: <a href="tel:360-202-7984">360-202-7984</a>
        </h2>
        <h2>
          Call Jeff Ripke: <a href="tel:509-795-6998">360-202-7984</a>
        </h2>
        <p>
          We are a Mobile RV Technician company skilled in
          refrigerators, AC, Water heaters, Furnace, & Exterior repairs. I am
          certified by National RV Training Academy (NRVTA) and help people with
          RV maintenance, repair, and upgrades. So hit the road with max
          confidence and zero worries. From faulty air conditioners to leaky
          roofs, we provide you with a quick fix on the road so that you don’t
          have to cut your trip short. As Mobile RV Tech, we can come to your
          home or wherever your RV is to tune it up for your next outdoor
          adventure.
        </p>
        <p>
          We are located in Spokane Valley, Washington, USA, and are just a call away.
          Never hit the road in a faulty RV. Instead, dial the digits and get
          your RV back in tip-top shape.
        </p>
        <h2>
          Call Douglas Ripke: <a href="tel:360-202-7984">360-202-7984</a>
        </h2>
        <a href={locatorUrl} target="_blank" rel="noreferrer">
          <img src={rvtaaLogo} alt="RVTAA Logo" />
        </a>
    </Fragment>
  );
};

export default Main;
