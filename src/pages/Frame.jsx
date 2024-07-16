import { Link } from "react-router-dom";
import React, { useRef } from 'react';

const Navbar = () => {

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
    console.log(ref);
  };
  return (<div className="fixed top-0 left-0 w-full flex flex-row items-center justify-start gap-[388px] text-6xl border-b-2 bg-white z-50 px-12">
    <img
      className="w-[102px] relative h-[99px] object-cover"
      alt=""
      src="/group-1@2x.png"
    />
    <div className="w-[539px] relative h-[43px]">
      <div className="absolute top-[0px] left-[0px] w-20 h-[43px] cursor-pointer" onClick={() => scrollToSection(homeRef)}>Home</div>
      <div className="absolute top-[0px] left-[122px] cursor-pointer" onClick={() => scrollToSection(aboutUsRef)}>About Us</div>
      <div className="absolute top-[0px] left-[279px] cursor-pointer" onClick={() => scrollToSection(membersRef)}>Members</div>
      <div className="absolute top-[0px] left-[437px] cursor-pointer" onClick={() => scrollToSection(servicesRef)}>Services</div>
    </div>
    <div className="w-[164px] relative h-[57px] text-white">
      <div className="absolute top-[0px] left-[0px] rounded-65xl bg-deepskyblue w-[164px] h-[57px]" />
      <b className="absolute top-[14px] left-[22px]">REGISTER</b>
    </div>
  </div>)
}
const Frame = () => {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const membersRef = useRef(null);
  const servicesRef = useRef(null);
  return (

    <div className="w-full relative bg-white h-[5670px] overflow-hidden text-left text-31xl font-inter">
      <div className="absolute top-[930px] left-[125px] w-[225px] h-[57px] text-6xl text-white">
        <div className="absolute top-[0px] left-[0px] rounded-65xl bg-deepskyblue w-[225px] h-[57px]" />
        <b className="absolute top-[14px] left-[26px]">GET STARTED</b>
      </div>
      <Navbar />
      <div className="absolute top-[382px] left-[455px] w-[1195px] h-[696px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1195px] h-[696px] object-cover"
          alt=""
          src="/pngegg-1@2x.png"
        />
        <div className="absolute top-[0px] left-[192.1px] bg-white w-[61.6px] h-[63.9px]" />
        <div className="absolute top-[0px] left-[726.2px] bg-white w-[61.6px] h-[63.9px]" />
      </div>
      <div className="absolute top-[163px] left-[62px] w-[889px] h-[206px] text-91xl">
        <div className="absolute top-[0px] left-[0px] inline-block w-[889px] h-[206px]">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <b>FOUNDATION</b>
          </p>
        </div>
        <div className="absolute top-[77px] left-[3px] text-51xl inline-block w-[858px] h-[75px]">
          GURUKUL RESEARCH
        </div>
      </div>
      <div className="absolute top-[184px] left-[895px] w-[833px] h-[165px] text-11xl ">
        <div className="absolute top-[0px] left-[0px] rounded-tl-98xl rounded-tr-none rounded-br-none rounded-bl-98xl bg-gray w-[833px] h-[165px]" />
        <div className="absolute top-[30px] left-[100px] inline-block w-[693px] h-[108px] text-white">
          Our expert team transforms your ideas into exceptional final products,
          ensuring your unique needs are met.
        </div>
      </div>
      <div className="absolute top-[343.5px] left-[1198.5px] box-border w-[7px] h-[106px] border-r-[7px] border-solid border-black" />
      <div className="absolute top-[395.5px] left-[671.5px] box-border w-[7px] h-[54px] border-r-[7px] border-solid border-black" />
      <div className="absolute top-[1133.5px] left-[-0.5px] box-border w-[1729px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[3401.5px] left-[-0.5px] box-border w-[1729px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[2676px] left-[267px] bg-gray w-[1461px] h-[473px]" />
      <div className="absolute top-[2267.5px] left-[-0.5px] box-border w-[1729px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[-138px] left-[-385px] w-[385px] h-[138px] overflow-hidden" />
      <div className="absolute top-[4535.5px] left-[-12.5px] box-border w-[1729px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[1363px] left-[96px] flex flex-row items-start justify-start gap-[111px] text-center font-playfair-display">
        <div className="w-[438px] relative h-[675px]">
          <div className="absolute top-[608px] left-[10px] inline-block w-[419px]">
            Website Making
          </div>
          <div className="absolute top-[0px] left-[0px] w-[438px] h-[570px]">
            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gainsboro w-[438px] h-[570px]" />
            <img
              className="absolute top-[25px] left-[32px] w-[374px] h-[519px] overflow-hidden object-cover"
              alt=""
              src="/frame-3@2x.png"
            />
          </div>
        </div>
        <div className="w-[438px] relative h-[675px]">
          <div className="absolute top-[608px] left-[137px]">AI / ML</div>
          <div className="absolute top-[0px] left-[0px] w-[438px] h-[570px]">
            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gainsboro w-[438px] h-[570px]" />
            <img
              className="absolute top-[25px] left-[32px] w-[374px] h-[519px] overflow-hidden object-cover"
              alt=""
              src="/frame-2@2x.png"
            />
          </div>
        </div>
        <div className="w-[438px] relative h-[663px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-11xl w-[438px] h-[570px] object-cover"
            alt=""
            src="/rectangle-10@2x.png"
          />
          <div className="absolute top-[607px] left-[105px]">Designing</div>
        </div>
      </div>
      <div className="absolute top-[1167px] left-[348px] text-111xl">
        What We’re Up To
      </div>
      <div className="absolute top-[2128px] left-[0px] bg-gray w-[1728px] h-[140px]" />
      <div className="absolute top-[2268px] left-[0px] bg-gray w-[1728px] h-[140px]" />
      <div className="absolute top-[2663px] left-[117px] rounded-[50%] bg-white w-[447px] h-[498px]" />
      <div className="absolute top-[2675px] left-[31px] rounded-[50%] bg-gray w-[473px] h-[473px]" />
      <img
        className="absolute top-[2693px] left-[47px] rounded-486xl w-[440px] h-[440px] overflow-hidden object-cover"
        alt=""
        src="/frame-4@2x.png"
      />
      <div className="absolute top-[2542px] left-[-142px] rounded-81xl bg-deepskyblue w-[1168px] h-[75px]" />
      <div className="absolute top-[3207px] left-[-142px] rounded-81xl bg-deepskyblue w-[1168px] h-[75px]" />
      <div className="absolute top-[2546px] left-[14px] font-medium text-center inline-block w-[813px] h-[163px]">
        From Our Founder
      </div>
      <div className="absolute top-[3218px] left-[208px] text-21xl font-medium text-center">
        Er. Rajul Dwivedi
      </div>
      <div ref={membersRef}>
        <div className="absolute top-[3448px] left-[486px] text-111xl">
          At The Helm
        </div>
        <div className="absolute top-[3647px] left-[24px] rounded-40xl bg-gray w-[1680px] h-[756px]" />
        <div className="absolute top-[4656px] left-[292px] rounded-46xl bg-gray w-[1144px] h-[718px]" />
        <div className="absolute top-[3690px] left-[69px] flex flex-row items-center justify-start text-white">
          <div className="w-[530px] relative rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-gainsboro h-[669px] overflow-hidden shrink-0">
            <img
              className="absolute top-[0px] left-[-86px] w-[703px] h-[669px] object-cover"
              alt=""
              src="/businessmanwithhandspocketsgreybackground3drendering-1@2x.png"
            />
            <div className="absolute top-[448px] left-[115px] font-extrabold inline-block w-[301px] h-[51px]">
              Sujal Kumar
            </div>
            <b className="absolute top-[520px] left-[152px] text-11xl leading-[120.94%] inline-block w-[227px] h-[33px]">
              AI / ML EXPERT
            </b>
          </div>
          <div className="w-[530px] relative bg-gainsboro h-[669px] overflow-hidden shrink-0">
            <img
              className="absolute top-[0px] left-[-87px] w-[703px] h-[669px] object-cover"
              alt=""
              src="/businessmanwithhandspocketsgreybackground3drendering-1@2x.png"
            />
            <div className="absolute top-[446px] left-[86px] font-extrabold inline-block w-[358px] h-[51px]">
              Divy Sangwan
            </div>
            <b className="absolute top-[524px] left-[107px] text-11xl inline-block text-center w-[316px] h-[33px]">
              <p className="m-0">WEB DEVELOPMENT</p>
              <p className="m-0">EXPERT</p>
            </b>
          </div>
          <img
            className="w-[530px] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl h-[669px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-5@2x.png"
          />
        </div>
      </div>
      <div ref={aboutUsRef}>
        <div className="absolute top-[4675px] left-[313px] rounded-31xl bg-lightgray w-[1102px] h-[680px]" />
        <div className="absolute top-[5493px] left-[0px] bg-gray w-[1728px] h-[177px]" />
        <Link to={"https://www.linkedin.com/company/gurukul-foundation-ism/"}>
          <img
            className="absolute top-[5555px] left-[1444px] w-20 h-20 overflow-hidden"
            alt=""
            src="/mdilinkedin.svg"
          />
        </Link>
        <Link to={"https://www.instagram.com/gurukulfoundation_ism/"}>
          <img
            className="absolute top-[5555px] left-[1573px] w-20 h-20 overflow-hidden"
            alt=""
            src="/mdiinstagram.svg"
          />
        </Link>
        <Link to={"https://x.com/Gurukul_Found"}>
          <img
            className="absolute top-[5570px] left-[1345px] w-[50px] h-[50px] overflow-hidden object-cover"
            alt=""
            src="/primetwitter@2x.png"
          /></Link>
        <Link to={"mailto:gurukulfoundationism@gmail.com"}>
          <div className="absolute top-[5192px] left-[1101px] rounded-lg bg-deepskyblue w-[228px] h-[84px]" />
          <div className="absolute top-[5216px] left-[1130px] text-11xl font-semibold text-white">
            SUBSCRIBE
          </div>
        </Link>
        <div className="absolute top-[543px] left-[66.5px] w-[408px] h-[406px] text-21xl text-black font-roboto-slab">
          <div className="absolute top-[0px] left-[0px] inline-block w-[408px] h-[406px]">{`Specialized in delivering tailored solutions in website development, graphic design, and AI/ML projects. `}</div>
        </div>
        <div className="">
          <div className="absolute top-[0px] left-[0px] inline-block w-[693px] h-[108px]">
          </div>
        </div>
        <img
          className="absolute top-[2158px] left-[0.5px] w-[1734.5px] h-[217px]"
          alt=""
          src="/line-11.svg"
        />
        <img
          className="absolute top-[5527px] left-[0px] max-h-full w-[1728px]"
          alt=""
          src="/line-12.svg"
        />
        <div className="absolute top-[5579px] left-[46.5px] font-medium text-white">
          Follow Our Socials
        </div>
        <div className="absolute top-[4742px] left-[365.5px] text-71xl font-extrabold text-black inline-block w-[997px]">
          Help Us To Make Your Work Easy
        </div>
        <div className="absolute top-[5042px] left-[365.5px] font-semibold text-black inline-block w-[997px]">
          Be Among One Of Our Happy Customers
        </div>
        <div className="absolute top-[5200px] left-[376.5px] font-semibold inline-block w-[264px]">
          Mail Us At:
        </div>
      </div>
    </div>
  );
};

export default Frame;
