import React from "react";
import CreatorInfoState from "../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import "./about.css";

function About(props) {
  const text = useRecoilValue(CreatorInfoState); 
  if(text.campaigns == null){
    return (<div></div>)
  } else { 
  
  return (
    <div className="about-box">
      <h1>About Kobold Press</h1>
      <div>
        <div className="about">
          <h4>{text.campaigns[0].description}</h4>
          <p className="about-section">{text.message}</p>
          <p>
            Thank You for Supporting Warlock! Your support means we can release
            new 5th Edition setting and rules material every month. We explore
            new locations and lore, and deliver new spells, monsters, character
            options and more. As a Warlock patron, you'll get them long before
            they appear anywhere else! (Some of them will never appear anywhere
            else.) Each Warlock booklet is about 28 to 32 pages long, with a
            stunning B&W cover and interior art by artists like Larry Elmore,
            Karl Waller, Phil Stone, and Justine Jones. In addition, we offer
            Warlock Lairs to patrons pledging at the $3 level and up--short
            adventures playable in a single night. So far we've published more
            than 50 Lairs, from the peaks to the dungeon depths! And further!
            With your support, we create expansions at supplements for hitting
            certain numbers of patrons. These are included as PDFs for pledges
            at $6 level, and as print items at the $23 and $39 tiers. So far,
            these have included the Warlock Bestiary, Liminal Magic, the Warlock
            Guide to the Shadow Plane, and the Warlock Guide to the Planes. We
            hope to do at least 1 more every year. Finally, we compile sets of
            about 10 zines into the hardcover Warlock Grimoire annually. The
            first two Grimoires cover issues 1 to 19, with some additional
            content roughly equal to one zine of material in each one. The PDF
            is included at the $6 pledge level and the hardcover at the $23
            level. We're excited to expand the world of 5th edition dark
            fantasy, and deeply appreciate your support! You can learn more
            about Midgard at the Kobold Press world overview.
          </p>
        </div>
      </div>
    </div>
  );
}
}

export default About;
