import React from "react"
import styled from "@emotion/styled"
import LogoA from "../images/logo_partner_grey/lg-amag.svg"
import LogoB from "../images/logo_partner_grey/lg-gold.svg"
import LogoC from "../images/logo_partner_grey/lg-helvetia.svg"
import LogoD from "../images/logo_partner_grey/lg-redbull.svg"
import LogoE from "../images/logo_partner_grey/lg-richemont.svg"
import LogoG from "../images/logo_partner_grey/lg-wenger.svg"
import LogoF from "../images/logo_partner_grey/lg-start.svg"
import LogoH from "../images/logo_partner_grey/lg-west.svg"

const Logos = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 750px) {
    img {
      padding: 0.35em;
    }
  }
  @media only screen and (min-width: 750px) {
    img {
      padding: 1em;
    }
  }
`

const Logoi = () => (
  <>
    <Logos>
      <a href="http://www.amag.ch" target="_blank">
        <img
          className="logostop"
          src={LogoA}
          height="100px"
          width="250px"
          alt="AMAG"
        />
      </a>

      <a href="http://www.goldbachgroup.com" target="_blank">
        <img
          className="logostop"
          src={LogoB}
          height="100"
          width="250"
          alt="Golbach Group"
        />
      </a>

      <a href="https://www.helvetia.com" target="_blank">
        <img
          className="logostop"
          src={LogoC}
          height="100"
          width="250"
          alt="Helvetia Insurance"
        />
      </a>

      <a href="https://www.redbullmediahouse.com" target="_blank">
        <img
          className="logostop"
          src={LogoD}
          height="100"
          width="250"
          alt="RedBull Media House"
        />
      </a>
      <a href="https://www.wengervieli.ch" target="_blank">
        <img
          className="logostop"
          src={LogoG}
          height="100"
          width="250"
          alt="Wenger Vieli"
        />
      </a>
    </Logos>
  </>
)
export default Logoi
