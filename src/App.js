import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div className="mainContainer">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Juan Bolmey</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="https://www.linkedin.com/in/bolmey/">Linkedin</Nav.Link>
              <Nav.Link eventKey={2} href="https://github.com/Bolmey">
                Github
      </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='bodyContainer'>
        <div className='container1'>
          <div className='textContainer'>
            <p id='hello'>Hello</p>
            <h1 id='name'>I'm Juan Bolmey!</h1>
            <p id='webDev'>Web Developer</p>
          </div>
        </div>
        <div className='container2'>
          <h2 id='aboutMe'>About Me</h2>
          <div id='accentBarAbout'></div>
          <p id='aboutText'>I attended Broward
          College pursuing my Bachelors Degree
          in Computer Science, while attending
          I took a class that taught me how to
          code Python... imedietly I fell in love
          with programming. I decided to give
          this class my all and ended up with
          the highest grade in the class. Once
          the semester was over I decided that
          I was going to persue my passion of
          coding and go to a bootcamp. I put my
          work, school, and life asside and
          attended Ironhack Full time. Once I
          completed my 9 weeks course at Ironhack
          I decided to start on projects and
          voulenteer at Make it MVP to gain real
          life experience and work on projects
          with other devs. I am curently on
          the hunt for a position as a web
          developer.
          </p>
          <div id='mainPictureContainer'>
            <div id='pictureContainer'>
            </div>
          </div>
        </div>
        <div className='container3'>
          <h2 id='latestPro'>Latest Projects</h2>
          <div id='accentBarPro'></div>
          <div className='projectContainer'>
            <div className="projects">
              <div className='project1'>
                <div className='gitHub'>GitHub</div>
                <h2>Developer Lane</h2>
                <h4>Technologies:</h4>
              </div>
              <div className='project2'>
                <div className='gitHub'>GitHub</div>
                <h2>Webopoly</h2>
                <h4>Technologies:</h4>
              </div>
              <div className='project3'>
                <div className='gitHub'>GitHub</div>
                <h2>DayFly</h2>
                <h4>Technologies:</h4>
              </div>
              <div className='project4'>
                <div className='gitHub'>GitHub</div>
                <h2>Test</h2>
                <h4>Technologies:</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
