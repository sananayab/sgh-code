import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|homepage)">
            <Homepage {...homepageData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const backgroundData = {
    background: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/background-3@1x.png",
    background2: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/background-16@1x.png",
};

const group2Data = {
    alwaysSeekKnowledg: "You’ll wonder how you taught without it",
    knowledgeIsPower: "Engaging media and formative assessments to make every lesson interactive.",
};

const menuData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shg-logo1-w-10@1x.png",
};

const buttonSmallPrimaryData = {
    children: "Sign In",
};

const signupBtnData = {
    children: "Sign Up for FREE",
};

const signupBtn2Data = {
    children: "Request a Quote",
    className: "request",
};

const signupBtn3Data = {
    children: "Admin Sign In",
    className: "request-1",
};

const enterCodeData = {
    children: "Enter CODE",
};

const studentData = {
    students: "Students",
    toJoinALesson: "To Join a Lesson",
    enterCodeProps: enterCodeData,
};

const signupData = {
    children: "Sign Up for FREE",
};

const teachersData = {
    teachers: "Teachers",
    spanText: "or ",
    spanText2: "Log in",
    signupProps: signupData,
};

const discoverData = {
    children: "Discover More",
};

const teachers2Data = {
    administrators: "Administrators",
    spanText: "or ",
    spanText2: "Request a Quote",
    discoverProps: discoverData,
};

const playData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/polygon-1-1@1x.png",
};

const lapData = {
    lap: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/laptop-1@1x.png",
    playProps: playData,
};

const rectangle42Data = {
    className: "rectangle-7",
};

const rectangle43Data = {
    className: "bg-1",
};

const logo1Data = {
    logo1: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/clip-10@1x.png",
    combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/combined-shape-102@1x.png",
};

const logo2Data = {
    logo2: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/clip-10@1x.png",
    combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/combined-shape-104@1x.png",
};

const logo3Data = {
    logo3: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/clip-10@1x.png",
    combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/combined-shape-106@1x.png",
};

const logo4Data = {
    logo4: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/clip-10@1x.png",
    combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/combined-shape-100@1x.png",
};

const logo5Data = {
    logo5: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/clip-10@1x.png",
    combinedShape: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/combined-shape-18@1x.png",
};

const leftData = {
    excepteurSintOccae: "Available for following  platforms",
    facebook1: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shape-102@1x.png",
    twitter1: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shape-100@1x.png",
    shape: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shape-101@1x.png",
    line12: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/line-12-10@1x.png",
    spanText: "",
    spanText2: "Singapore",
    spanText3: "Terms and Conditions",
    spanText4: "         ",
    spanText5: "Privacy Policy",
    line13: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/line-12-10@1x.png",
};

const group114Data = {
    line: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/line-16@1x.png",
    leftProps: leftData,
};

const group116Data = {
    followUs: "FOLLOW US",
    facebook1: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shape-102@1x.png",
    twitter1: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shape-100@1x.png",
    shape: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shape-101@1x.png",
    shgLogo1W: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/shg-logo1-w-10@1x.png",
};

const homepageData = {
    pattern: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/pattern-14@1x.png",
    imageBig: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/mask-group-2-1@1x.png",
    pattern2: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/pattern-15@1x.png",
    pattern3: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/pattern-16@1x.png",
    pattern4: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/pattern-17@1x.png",
    maskGroup1: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/mask-group-1-1@1x.png",
    x3: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613ed5bcb320e56b80d4a6d0/img/3@1x.png",
    spanText: "During the last school year, students joined over ",
    spanText2: "120M",
    spanText3: " Lessons",
    rectangle5: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/rectangle-5-10@1x.png",
    rectangle6: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/rectangle-6-12@1x.png",
    alwaysSeekKnowledg: "Got 2 Minutes?",
    spanText4: "Watch how ",
    spanText5: "SHG ",
    spanText6: "works!",
    group6: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/group-6-1@1x.png",
    group83: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/group-83-10@1x.png",
    interactive01: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/interactive-01@1x.png",
    text3: "Make every lesson interactive",
    youDontHaveTo: <><br /><br />You don’t have to start from scratch. Upload and make any of your favorite PowerPoints, Google Slides, and now, any video interactive. You can even upload videos directly from YouTube.<br /><br />Or, search our standards-aligned library of 15,000+ interactive lessons and videos across all grades and subjects.</>,
    text4: <>Flex between classroom, distance <br />learning, or hybrid</>,
    youDontHaveToS: <><br />You don’t have to start from scratch. Upload and make any of your favorite PowerPoints, Google Slides, and now, any video interactive. You can even upload videos directly from YouTube.<br /><br />Or, search our standards-aligned library of 15,000+ interactive lessons and videos across all grades and subjects.</>,
    distanceLearninig0101: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/distance-learninig-01-01@1x.png",
    learning01: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/learning-01@1x.png",
    text5: <>Know where your students are <br />in their learning</>,
    boostStudentParti: <><br />Boost student participation with collaborative activities and formative assessments like Virtual Reality, Polls, Collaborate Boards, and game-based quizzes. Get student insights in real-time and in post-session reports.<br /><br />Take a closer look and see how SHG works ⟶</>,
    address: "5 NEW REASONS TO LOVE SHG",
    text6: "Make video interactive",
    boostStudentParti2: <><br />Boost student participation with collaborative activities and formative assessments like Virtual Reality, Polls, Collaborate Boards, and game-based quizzes. Get student insights in real-time and in post-session reports.<br /><br />Take a closer look and see how SHG works ⟶</>,
    beyond11: "Beyond 1:1",
    boostStudentParti3: <><br />Boost student participation with collaborative activities and formative assessments like Virtual Reality, Polls, Collaborate Boards, and game-based quizzes. Get student insights in real-time and in post-session reports.<br /><br />Take a closer look and see how SHG works ⟶</>,
    text7: "Zoom Integration in one click",
    boostStudentParti4: <><br />Boost student participation with collaborative activities and formative assessments like Virtual Reality, Polls, Collaborate Boards, and game-based quizzes. Get student insights in real-time and in post-session reports.<br /><br />Take a closer look and see how SHG works ⟶</>,
    text8: "More partners you trust",
    boostStudentParti5: <><br />Boost student participation with collaborative activities and formative assessments like Virtual Reality, Polls, Collaborate Boards, and game-based quizzes. Get student insights in real-time and in post-session reports.<br /><br />Take a closer look and see how SHG works ⟶</>,
    text9: "More accessibility features",
    boostStudentParti6: <><br />Boost student participation with collaborative activities and formative assessments like Virtual Reality, Polls, Collaborate Boards, and game-based quizzes. Get student insights in real-time and in post-session reports.<br /><br />Take a closer look and see how SHG works ⟶</>,
    text10: "#1",
    text11: "#2",
    text12: "#3",
    text13: "#4",
    text14: "#5",
    makeVideoInteratctive101: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/make-video-interatctive-1-01@1x.png",
    path86: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/path-86@1x.png",
    path88: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/path-86@1x.png",
    trust01: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/trust-01@1x.png",
    beyond01: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/beyond-01-1@1x.png",
    path87: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/path-87@1x.png",
    path89: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/path-87@1x.png",
    accesi01: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/accesi-01-1@1x.png",
    weebinar01: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/weebinar-01@1x.png",
    teacher01: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/teacher-01-1@1x.png",
    text15: <>Address learning loss in your <br />school with SHG</>,
    utilizeFormative: <>   Utilize formative assessments to drive insights into student learning<br /><br />   Know where every student is in their learning and adapt instruction in real time with in-the-moment feedback<br /><br />    Build authentic connections for students through checkpoints and activities focusing on social and emotional well-being<br /><br />Take a closer look and see how SHG can address learning loss ⟶</>,
    text16: "",
    text17: "",
    text18: "",
    text19: "SHG works with what you’re already using",
    text20: "We’re continually adding more ways to work with your favorite tools like Microsoft Teams and Google Slides.",
    likeWhatYouSee: "Like what you see",
    bg: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/bg-10@1x.png",
    background: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/background-2@1x.png",
    creative: "Get Started",
    animation: "Pricing",
    drawing: "Resources Hub",
    graphicDesign: "Blogs",
    illustration: "FAQ's",
    photography: "Communities",
    business: "Our Platform",
    entrepreneurship: "How SHG Works",
    freelanceEntrepre: "Distance Learning",
    leadership: "SHG library",
    marketing: "Interactive Video",
    productivity: "Game-based Learning",
    more: "Virtual reality",
    technology: "For School and Homes",
    dataScience: "Site License",
    gameDesign: "Premium Collection",
    mobileDevelopment: "LMS interaction",
    productManagement: "Google integrations",
    webDevelopment: "Microsoft Integrations",
    more2: "Efficacy",
    productManagement2: "ESSA",
    webDevelopment2: "International",
    more3: "Higher Education",
    lifestyle: "Get to know us",
    crafts: "Who are we",
    culinary: "In the news",
    gaming: "Careers",
    healthWellness: "Contact Us",
    languages: "Flocabulary",
    path90: "https://anima-uploads.s3.amazonaws.com/projects/61346f5f10eb46a59c487961/releases/613940f00fa209db6bc1a9c3/img/path-90-25@1x.png",
    getStarted: "LET'S GO",
    suspendisseInJusto: "Make every lesson interactive with SHG. Sign up for FREE and get started today.",
    x10: "Teachers",
    getStarted2: "DISCOVER MORE",
    suspendisseInJusto2: "Interested in bringing SHG to your school or district?",
    x102: "Aministrator",
    backgroundProps: backgroundData,
    group2Props: group2Data,
    menuProps: menuData,
    buttonSmallPrimaryProps: buttonSmallPrimaryData,
    signupBtnProps: signupBtnData,
    signupBtn2Props: signupBtn2Data,
    signupBtn3Props: signupBtn3Data,
    studentProps: studentData,
    teachersProps: teachersData,
    teachers2Props: teachers2Data,
    lapProps: lapData,
    rectangle4Props: rectangle42Data,
    rectangle42Props: rectangle43Data,
    logo1Props: logo1Data,
    logo2Props: logo2Data,
    logo3Props: logo3Data,
    logo4Props: logo4Data,
    logo5Props: logo5Data,
    group114Props: group114Data,
    group116Props: group116Data,
};

