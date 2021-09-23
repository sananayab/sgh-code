import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Group2 from "../Group2";
import Menu from "../Menu";
import ButtonSmallPrimary from "../ButtonSmallPrimary";
import SignupBtn from "../SignupBtn";
import Student from "../Student";
import Teachers from "../Teachers";
import Teachers2 from "../Teachers2";
import Rectangle4 from "../Rectangle4";
import Lap from "../Lap";
import Logo1 from "../Logo1";
import Logo2 from "../Logo2";
import Logo3 from "../Logo3";
import Logo4 from "../Logo4";
import Logo5 from "../Logo5";
import Group114 from "../Group114";
import Group116 from "../Group116";
import "./Homepage.sass";

class Homepage extends React.Component {
  render() {
    const {
      pattern,
      imageBig,
      pattern2,
      pattern3,
      pattern4,
      maskGroup1,
      x3,
      spanText,
      spanText2,
      spanText3,
      rectangle5,
      rectangle6,
      alwaysSeekKnowledg,
      spanText4,
      spanText5,
      spanText6,
      group6,
      group83,
      interactive01,
      text3,
      youDontHaveTo,
      text4,
      youDontHaveToS,
      distanceLearninig0101,
      learning01,
      text5,
      boostStudentParti,
      address,
      text6,
      boostStudentParti2,
      beyond11,
      boostStudentParti3,
      text7,
      boostStudentParti4,
      text8,
      boostStudentParti5,
      text9,
      boostStudentParti6,
      text10,
      text11,
      text12,
      text13,
      text14,
      makeVideoInteratctive101,
      path86,
      path88,
      trust01,
      beyond01,
      path87,
      path89,
      accesi01,
      weebinar01,
      teacher01,
      text15,
      utilizeFormative,
      text16,
      text17,
      text18,
      text19,
      text20,
      likeWhatYouSee,
      bg,
      background,
      creative,
      animation,
      drawing,
      graphicDesign,
      illustration,
      photography,
      business,
      entrepreneurship,
      freelanceEntrepre,
      leadership,
      marketing,
      productivity,
      more,
      technology,
      dataScience,
      gameDesign,
      mobileDevelopment,
      productManagement,
      webDevelopment,
      more2,
      productManagement2,
      webDevelopment2,
      more3,
      lifestyle,
      crafts,
      culinary,
      gaming,
      healthWellness,
      languages,
      path90,
      getStarted,
      suspendisseInJusto,
      x10,
      getStarted2,
      suspendisseInJusto2,
      x102,
      backgroundProps,
      group2Props,
      menuProps,
      buttonSmallPrimaryProps,
      signupBtnProps,
      signupBtn2Props,
      signupBtn3Props,
      studentProps,
      teachersProps,
      teachers2Props,
      lapProps,
      rectangle4Props,
      rectangle42Props,
      logo1Props,
      logo2Props,
      logo3Props,
      logo4Props,
      logo5Props,
      group114Props,
      group116Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="homepage screen">
          <div className="overlap-group11">
            <div className="overlap-group2">
              <div className="overlap-group1">
                <Background background={backgroundProps.background} background2={backgroundProps.background2} />
                <div className="group-1">
                  <Group2
                    alwaysSeekKnowledg={group2Props.alwaysSeekKnowledg}
                    knowledgeIsPower={group2Props.knowledgeIsPower}
                  />
                  <div className="image">
                    <div className="overlap-group">
                      <img className="pattern" src={pattern} />
                      <div className="image-big" style={{ backgroundImage: `url(${imageBig})` }}></div>
                      <img className="pattern-1" src={pattern2} />
                      <img className="pattern-2" src={pattern3} />
                      <img className="pattern-3" src={pattern4} />
                      <img className="mask-group-1" src={maskGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="header">
                <div className="group-87">
                  <div className="overlap-group-1">
                    <Menu src={menuProps.src} />
                    <ButtonSmallPrimary>{buttonSmallPrimaryProps.children}</ButtonSmallPrimary>
                    <Link to="/side-bar">
                      <img className="x3" src={x3} />
                    </Link>
                    <SignupBtn>{signupBtnProps.children}</SignupBtn>
                    <SignupBtn className={signupBtn2Props.className}>{signupBtn2Props.children}</SignupBtn>
                    <SignupBtn className={signupBtn3Props.className}>{signupBtn3Props.children}</SignupBtn>
                  </div>
                </div>
              </div>
              <Student
                students={studentProps.students}
                toJoinALesson={studentProps.toJoinALesson}
                enterCodeProps={studentProps.enterCodeProps}
              />
              <Teachers
                teachers={teachersProps.teachers}
                spanText={teachersProps.spanText}
                spanText2={teachersProps.spanText2}
                signupProps={teachersProps.signupProps}
              />
              <Teachers2
                administrators={teachers2Props.administrators}
                spanText={teachers2Props.spanText}
                spanText2={teachers2Props.spanText2}
                discoverProps={teachers2Props.discoverProps}
              />
              <div className="text-1">
                <span className="roboto-normal-blueberry-35px">{spanText}</span>
                <span className="span1">{spanText2}</span>
                <span className="roboto-normal-blueberry-35px">{spanText3}</span>
              </div>
              <img className="rectangle-5" src={rectangle5} />
              <img className="rectangle-6" src={rectangle6} />
            </div>
            <div className="overlap-group3">
              <Rectangle4 />
              <div className="overlap-group-2">
                <div className="always-seek-knowledg roboto-medium-blueberry-40px">{alwaysSeekKnowledg}</div>
                <div className="text-2">
                  <span className="roboto-medium-blueberry-40px">{spanText4}</span>
                  <span className="span1-1">{spanText5}</span>
                  <span className="roboto-medium-blueberry-40px">{spanText6}</span>
                </div>
              </div>
              <img className="group-6" src={group6} />
              <img className="group-83" src={group83} />
              <Lap lap={lapProps.lap} playProps={lapProps.playProps} />
            </div>
          </div>
          <div className="x3-1">
            <img className="interactive-01" src={interactive01} />
            <div className="text">
              <div className="overlap-group-3">
                <div className="text-3 roboto-medium-blueberry-40px">{text3}</div>
                <div className="you-dont-have-to roboto-normal-storm-dust-24px">{youDontHaveTo}</div>
              </div>
            </div>
          </div>
          <div className="x4">
            <div className="overlap-group4">
              <div className="overlap-group-4">
                <div className="text-4 roboto-medium-blueberry-40px">{text4}</div>
                <div className="you-dont-have-to-s roboto-normal-storm-dust-24px">{youDontHaveToS}</div>
              </div>
              <img className="distance-learninig-01-01" src={distanceLearninig0101} />
            </div>
          </div>
          <div className="x5">
            <img className="learning-01" src={learning01} />
            <div className="text-5">
              <div className="overlap-group-5">
                <div className="text-5-1 roboto-medium-blueberry-40px">{text5}</div>
                <div className="boost-student-parti-1 roboto-normal-storm-dust-24px">{boostStudentParti}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group12">
            <div className="overlap-group5">
              <Rectangle4 className={rectangle4Props.className} />
              <div className="address">{address}</div>
              <div className="overlap-group-6">
                <div className="text-6 roboto-medium-blueberry-40px">{text6}</div>
                <div className="boost-student-parti roboto-normal-storm-dust-24px">{boostStudentParti2}</div>
              </div>
              <div className="overlap-group1-1">
                <div className="beyond-11 roboto-medium-blueberry-40px">{beyond11}</div>
                <div className="boost-student-parti roboto-normal-storm-dust-24px">{boostStudentParti3}</div>
              </div>
              <div className="overlap-group2-1">
                <div className="text-7 roboto-medium-blueberry-40px">{text7}</div>
                <div className="boost-student-parti roboto-normal-storm-dust-24px">{boostStudentParti4}</div>
              </div>
              <div className="overlap-group3-1">
                <div className="text-8 roboto-medium-blueberry-40px">{text8}</div>
                <div className="boost-student-parti roboto-normal-storm-dust-24px">{boostStudentParti5}</div>
              </div>
              <div className="overlap-group4-1">
                <div className="text-9 roboto-medium-blueberry-40px">{text9}</div>
                <div className="boost-student-parti roboto-normal-storm-dust-24px">{boostStudentParti6}</div>
              </div>
              <div className="text-10 roboto-normal-white-140px">{text10}</div>
              <div className="text-11 roboto-normal-white-140px">{text11}</div>
              <div className="text-12 roboto-normal-white-140px">{text12}</div>
              <div className="text-13 roboto-normal-white-140px">{text13}</div>
              <div className="text-14 roboto-normal-white-140px">{text14}</div>
              <img className="make-video-interatctive-1-01" src={makeVideoInteratctive101} />
              <img className="path-86" src={path86} />
              <img className="path-88" src={path88} />
              <img className="trust-01" src={trust01} />
              <img className="beyond-01" src={beyond01} />
              <img className="path-87" src={path87} />
              <img className="path-89" src={path89} />
              <img className="accesi-01" src={accesi01} />
              <img className="weebinar-01" src={weebinar01} />
            </div>
            <div className="overlap-group6">
              <Rectangle4 className={rectangle42Props.className} />
              <img className="teacher-01" src={teacher01} />
              <div className="overlap-group-7">
                <div className="text-15 roboto-medium-blueberry-40px">{text15}</div>
                <div className="utilize-formative roboto-normal-storm-dust-24px">{utilizeFormative}</div>
                <div className="text-16 fontawesome5free-solid-normal-blueberry-16px">{text16}</div>
                <div className="text-17 fontawesome5free-solid-normal-blueberry-16px">{text17}</div>
                <div className="text-18 fontawesome5free-solid-normal-blueberry-16px">{text18}</div>
              </div>
            </div>
            <div className="x8">
              <div className="client">
                <div className="text-19 roboto-medium-blueberry-40px">{text19}</div>
                <div className="text-20">{text20}</div>
                <div className="client-logo">
                  <Logo1 logo1={logo1Props.logo1} combinedShape={logo1Props.combinedShape} />
                  <Logo2 logo2={logo2Props.logo2} combinedShape={logo2Props.combinedShape} />
                  <Logo3 logo3={logo3Props.logo3} combinedShape={logo3Props.combinedShape} />
                  <Logo4 logo4={logo4Props.logo4} combinedShape={logo4Props.combinedShape} />
                  <Logo5 logo5={logo5Props.logo5} combinedShape={logo5Props.combinedShape} />
                </div>
              </div>
            </div>
          </div>
          <div className="like-what-you-see roboto-medium-blueberry-40px">{likeWhatYouSee}</div>
          <div className="overlap-group10">
            <div className="overlap-group7">
              <div className="overlap-group-8">
                <img className="bg" src={bg} />
                <img className="background" src={background} />
              </div>
              <div className="creative">
                <div className="creative-1 raleway-bold-white-27px">{creative}</div>
                <Link to="/pricing">
                  <div className="link roboto-medium-white-20px">{animation}</div>
                </Link>
                <div className="link-1 roboto-medium-white-20px">{drawing}</div>
                <Link to="/blog">
                  <div className="link-2 roboto-medium-white-20px">{graphicDesign}</div>
                </Link>
                <div className="link-1 roboto-medium-white-20px">{illustration}</div>
                <div className="link-2 roboto-medium-white-20px">{photography}</div>
              </div>
              <div className="business">
                <div className="business-1 raleway-bold-white-27px">{business}</div>
                <Link to="/how-it-works">
                  <div className="link roboto-medium-white-20px">{entrepreneurship}</div>
                </Link>
                <div className="freelance-entrepre roboto-medium-white-20px">{freelanceEntrepre}</div>
                <Link to="/shg-library">
                  <div className="link-2 roboto-medium-white-20px">{leadership}</div>
                </Link>
                <Link to="/interaction-video">
                  <div className="link-1 roboto-medium-white-20px">{marketing}</div>
                </Link>
                <Link to="/game-based-learning">
                  <div className="link-2 roboto-medium-white-20px">{productivity}</div>
                </Link>
                <Link to="/virtual-reality">
                  <div className="link-2 roboto-medium-white-20px">{more}</div>
                </Link>
              </div>
              <div className="technology">
                <div className="technology-1 raleway-bold-white-27px">{technology}</div>
                <Link to="/overview">
                  <div className="link roboto-medium-white-20px">{dataScience}</div>
                </Link>
                <div className="game-design roboto-medium-white-20px">{gameDesign}</div>
                <Link to="/lms-integrations">
                  <div className="link-2 roboto-medium-white-20px">{mobileDevelopment}</div>
                </Link>
                <div className="link-1 roboto-medium-white-20px">{productManagement}</div>
                <div className="link-2 roboto-medium-white-20px">{webDevelopment}</div>
                <Link to="/case-studies">
                  <div className="link-2 roboto-medium-white-20px">{more2}</div>
                </Link>
                <Link to="/essa">
                  <div className="link-2 roboto-medium-white-20px">{productManagement2}</div>
                </Link>
                <Link to="/international">
                  <div className="link-2 roboto-medium-white-20px">{webDevelopment2}</div>
                </Link>
                <Link to="/higher-education">
                  <div className="link-2 roboto-medium-white-20px">{more3}</div>
                </Link>
              </div>
              <div className="technology-2">
                <div className="lifestyle raleway-bold-white-27px">{lifestyle}</div>
                <div className="link roboto-medium-white-20px">{crafts}</div>
                <div className="link-1 roboto-medium-white-20px">{culinary}</div>
                <div className="link-2 roboto-medium-white-20px">{gaming}</div>
                <div className="link-1 roboto-medium-white-20px">{healthWellness}</div>
                <div className="languages roboto-medium-white-20px">{languages}</div>
              </div>
              <Group114 line={group114Props.line} leftProps={group114Props.leftProps} />
              <img className="path-90" src={path90} />
              <Group116
                followUs={group116Props.followUs}
                facebook1={group116Props.facebook1}
                twitter1={group116Props.twitter1}
                shape={group116Props.shape}
                shgLogo1W={group116Props.shgLogo1W}
              />
            </div>
            <div className="overlap-group8">
              <div className="rectangle-4"></div>
              <div className="group-88">
                <div className="get-started prompt-bold-white-20px">{getStarted}</div>
              </div>
              <div className="suspendisse-in-justo opensans-light-blueberry-20px">{suspendisseInJusto}</div>
              <div className="x10 opensans-bold-blueberry-40px">{x10}</div>
            </div>
            <div className="overlap-group9">
              <div className="rectangle-4"></div>
              <div className="rectangle-5-1"></div>
              <div className="get-started-1 prompt-bold-white-20px">{getStarted2}</div>
              <div className="suspendisse-in-justo opensans-light-blueberry-20px">{suspendisseInJusto2}</div>
              <div className="x10-1 opensans-bold-blueberry-40px">{x102}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
