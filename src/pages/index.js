import * as React from "react"
import '../scss/main.scss';
import logo from '../images/icon.png';
import textlogo from '../images/textlogo.png';
import reddit from '../images/reddit.svg';
import telegram from '../images/telegram.svg';
import twitter from '../images/twitter.svg';
import github from '../images/github.svg';
import bscscan from '../images/bscscan.svg';
import astronaut from '../images/astronaut.png';
import leaf from '../images/leaf.png';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CountUp from 'react-countup';
import 'aos/dist/aos.css';

// markup
const IndexPage = () => {

  const [showBlazeItThings, setShowBlazeItThings] = React.useState('dont-show-me');
  const [blazeItTime, setBlazeItTime] = React.useState(false);
  const [nextBlazeIt, setNextBlazeIt] = React.useState(420);
  const [currentTab, setCurrentTab] = React.useState('tokenomics');

  React.useEffect(() => {
    const interval = setInterval(() => {
      let blaze = isItBlazeIt();
      setBlazeItTime(blaze)
        if(blaze) {
          setShowBlazeItThings('show-me');
        } else {
          setShowBlazeItThings('dont-show-me');
          setNextBlazeIt(getNextBlazeIt());
        }
    }, 1000);
    return () => clearInterval(interval);
  });

  function isItBlazeIt() {
    const currentDateTime = getUTCDate();
    let checkNum = (currentDateTime - 1617135600) % 3600;
    return(checkNum >= 0 && checkNum <= 420);
  }

  function getNextBlazeIt() {
    const currentDateTime = getUTCDate();
    let checkNum = (currentDateTime - 1617135600) % 3600;
    return 3600-checkNum;
  }

  function getUTCDate() {
    return Math.floor((new Date()).getTime() / 1000);
  }

  let AOS;
  React.useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  React.useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div class="background-container" data-aos="fade-in" data-aos-delay="0" data-aos-duration="1000">
      <title>StonedMoon</title>
      <img src={logo} className="moon-image" alt=""/>
      <img src={logo} className="corner-logo" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000"/>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <img src={astronaut} className="particle"/>
      <img src={astronaut} className="particle"/>
      <img src={astronaut} className="particle"/>
      <img src={astronaut} className="particle"/>
      <img src={astronaut} className="particle"/>
      <img src={astronaut} className="particle"/>
      <img src={astronaut} className="particle"/>
      <img src={astronaut} className="particle"/>
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      {blazeItTime && <img src={leaf} className="particle"/>}
      <div className="everything flex">
       <div className="textlogo-wrapper" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
         <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
         <img src={textlogo} className="textlogo"/>
       </div>
      </div>
      <div className="main-body flex-column x-centre">
        <div className="subtitle flex-row x-centre" data-aos="zoom-in-up" data-aos-delay="1500" data-aos-duration="1000"><h2>the token you trade for <span className="green">420</span> seconds an hour</h2></div>
        <div className="subtitle flex-row x-centre" data-aos="zoom-in-up" data-aos-delay="2000" data-aos-duration="1000">
          {blazeItTime && <h2>it's <span className="green">blaze it time</span> (4% fee)</h2>}
          {!blazeItTime && <h2>it's <span className="red">not </span>currently <span className="green">blaze it time</span> (42% fee)</h2>}
        </div>
        <div className="flex-row x-centre no-top-margin" data-aos="zoom-in-up" data-aos-delay="2000" data-aos-duration="1000">
          {!blazeItTime && <h4>(the next trading window is in <span className="green">{nextBlazeIt}</span> seconds)</h4>}
        </div>
        <div className="flex-row x-centre interactable" data-aos="zoom-in-up" data-aos-delay="2500" data-aos-duration="1000">
          <a href="https://dxsale.app/app/pages/defipresale?saleID=628&chain=BSC"><button className="buy-button">Buy Presale</button></a>
          <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x82aeeccda0e26c5e99dbb52b98fa07ab44c51a77"><button className="buy-button">Buy on PancakeSwap</button></a>
        </div>
        <div className="tokenomics-container x-centre interactable" data-aos="zoom-in-up" data-aos-delay="3000" data-aos-duration="1000">
          <ButtonGroup variant="text" size="small" color="secondary" fullWidth="true" className="tab-selector" aria-label="text primary button group">
            <Button className="tab" onClick={() => setCurrentTab('tokenomics')}>Toke-nomics</Button>
            <Button className="tab" onClick={() => setCurrentTab('how-to-buy')}>Bake Sale</Button>
            <Button className="tab" onClick={() => setCurrentTab('roadmap')}>The Next Sesh</Button>
            <Button className="tab" onClick={() => setCurrentTab('audits')}>Dankness Report</Button>
          </ButtonGroup>
          {currentTab == "tokenomics" && <div className="flex-column tokenomics-scroller" data-aos="fade-in-up">
            <h2 className="section-header"><span className="green">toke</span>nomics</h2>
            <div className="flex-row wrap x-centre interactable">
              <div className="tokenomics-number-wrapper">Total Supply:&nbsp;<span className="lightgreen"><CountUp end={420000} separator=","/></span></div>
              <div className="tokenomics-number-wrapper">Pre-Blazed <sup>(Burned)</sup>:&nbsp;<span className="lightgreen"><CountUp end={291654} separator=","/> (69.42%)</span></div>
              <div className="tokenomics-number-wrapper">For the Plug <sup>(Dev/Marketing)</sup>:&nbsp;<span className="lightgreen"><CountUp end={4200} separator=","/> (1%)</span></div>
              <div className="tokenomics-number-wrapper">Liquidity Fee <sup>(<span className='lightgreen'>#BlazeItTime</span>)</sup>:&nbsp;<span className="lightgreen"><CountUp end={2} suffix='%'/></span></div>
              <div className="tokenomics-number-wrapper">Reflect & Burn Fee <sup>(<span className='lightgreen'>#BlazeItTime</span>)</sup>:&nbsp;<span className="lightgreen"><CountUp end={2} suffix='%'/></span></div>
              <div className="tokenomics-number-wrapper">Liquidity Fee <sup>(<span className='red'>NOT</span> #BlazeItTime)</sup>:&nbsp;<span className="lightgreen"><CountUp end={21} suffix='%'/></span></div>
              <div className="tokenomics-number-wrapper">Reflect & Burn Fee<sup>(<span className='red'>NOT</span> #BlazeItTime)</sup>:&nbsp;<span className="lightgreen"><CountUp end={21} suffix='%'/></span></div>
            </div>
            <p> <span className="lightgreen">**hits blunt**</span> you wanted a token that you can only trade at 4:20? I gotchu. StonedMoon is a reflect token that you should trade at the 20 minute mark of each hour (it's 4:20 somewhere).</p>
            <p> <span className="lightgreen">**hits blunt**</span> you wanted a token that you can only trade for 420 seconds? I gotchu. StonedMoon has a 4% transaction fee within the 7 minute/420 second trading window, and a 42% transaction fee outside of the trading window. You can trade it as you please, but at a cost.</p>
            <p> <span className="lightgreen">**hits blunt**</span> you wanted liquidity, burns, and anti-bot? I gotchu. Half of StonedMoon's transaction fee is reflected to holders and burned, and the other half is auto-injected into the V2 liquidity pool on PancakeSwap.</p>
            <p> <span className="lightgreen">**hits blunt**</span> you wanted an even more stoned token? I gotchu. The <a href="https://v1.stonedmoon.xyz">OG StonedMoon (V1)</a> can only be traded for 420 seconds once every 12 hours, with a 100% reflect outside the window.</p>
            note: this is a funny stoner token, and an experimental project. take it for what it's worth and DYOR. StonedMoon is not responsible for you getting too stoned and buying outside blaze it time, or any other stupid shit you may do. investing in tokens and smart contracts is risky, only put in what you can afford to burn. this website does not constitute trading advice, financial advice, or any advice, except maybe advising you to get stoned if it's legal where you live.
            <br/><br/><br/>
          </div>}
          {currentTab == "how-to-buy" && <div className="flex-column tokenomics-scroller" data-aos="fade-in-up">
            <h2 className="section-header"><span className="green">bake</span> sale (how to buy)</h2>
            <p><span className="lightgreen">1.</span> Download TrustWallet (iOS/Android). <span className="lightgreen">**rip the bong**</span></p>
            <p><span className="lightgreen">2.</span> Create a new Smart Chain wallet, save the recovery phrase. <span className="lightgreen">**rip the bong**</span></p>
            <p><span className="lightgreen">3.</span> Buy Smart Chain (or BNB, and swap to Smart Chain). <span className="lightgreen">**rip the bong**</span></p>
            <p><span className="lightgreen">4.</span> If you're on iOS, type trust://browser_enable into safari and hit enter. <span className="lightgreen">**rip the bong**</span></p>
            <p><span className="lightgreen">5.</span> Go to the Browser tab in Trust Wallet. Type in https://stonedmoon.xyz. <span className="lightgreen">**rip the bong**</span></p>
            <p><span className="lightgreen">6.</span> Is it #BlazeItTime? Click Buy. Or click buy anyway. Use PancakeSwap V2.<span className="lightgreen">**rip the bong**</span></p>
            <p><span className="lightgreen">7.</span> Click confirm. Set the slippage to either 4.2% or 42.69% accordingly. Enter the amount, and hit Swap.<span className="lightgreen">**rip the bong**</span></p>
            <p><span className="lightgreen">8.</span> Rip the bong.<span className="lightgreen">**rip the bong**</span></p>
            <br/><br/><br/>
          </div>}
          {currentTab == "roadmap" && <div className="flex-column tokenomics-scroller" data-aos="fade-in-up">
            <h2 className="section-header"><span className="green">the next</span> sesh (roadmap)</h2>
            <p><span className="lightgreen">4/20/2021</span>: Launch StonedMoon V2</p>
            <p><span className="lightgreen">5/07/2021</span>: ^ was too stoned. Actually launch StonedMoon V2</p>
            <p><span className="lightgreen">Q2 2021</span>: V2 Website Launch</p>
            <p><span className="lightgreen">Q2 2021</span>: Initial Marketing</p>
            <p><span className="lightgreen">Q2 2021</span>: Audit</p>
            <p><span className="lightgreen">Q2 2021</span>: BlockFolio/Delta applications</p>
            <p><span className="lightgreen">Q2 2021</span>: CoinGecko & CoinMarketCap applications</p>
            <p><span className="lightgreen">Q2 2021</span>: Further Marketing (Cameo etc.)</p>
            <p><span className="lightgreen">Q3 2021</span>: StonedMoon NFTs</p>
            <p><span className="lightgreen">4/20/2022</span>: Full day of blaze it fee trading</p>
            <br/><br/><br/>
          </div>}
          {currentTab == "audits" && <div className="flex-column tokenomics-scroller" data-aos="fade-in-up">
            <h2 className="section-header"><span className="green">dankness</span> report (audits)</h2>
            <p> <span className="lightgreen">**rolls a joint**</span> Coming Soon. Audits will be applied for after launch.</p>
            <br/><br/><br/>
          </div>}
        </div>
      </div>
      <div className="footer">
        <div className="flex-row x-centre interactable">
          <a href="https://twitter.com/stoned_moon" target="_blank"><img src={twitter} className="social-icon twit"/></a>
          <a href="https://t.me/stonedmoon" target="_blank"><img src={telegram} className="social-icon tele"/></a>
          <a href="https://reddit.com/r/stonedmoonblazeit" target="_blank"><img src={reddit} className="social-icon redd"/></a>
          <a href="https://github.com/stonedmoon" target="_blank"><img src={github} className="social-icon git"/></a>
          <a href="https://bscscan.com/token/0x5b9d97d8dcbfc335878feed928dbd3abcb06d431" target="_blank"><img src={bscscan} className="social-icon bsc"/></a>
        </div>
      </div>
      <div className="v1-link">
        stonedmoon v2
      </div>
    </div>
  )
}

export default IndexPage
