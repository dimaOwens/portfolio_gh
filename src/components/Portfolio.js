import React, { Component } from 'react';
import kiddo from './portfolio/kiddo.png';
import hotelcom from './portfolio/hotelcom.PNG'
import explorepalestine from './portfolio/explorepalestine.PNG'
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';
import Pulse from 'react-reveal/Pulse';
var images = {
  kiddo,
  hotelcom,
  explorepalestine
} 
class Portfolio extends Component {
  render() {
    const styleRed = {fontSize:"18px"};
    if(this.props.data){
      var test = "https://www.w3schools.com"
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = './portfolio/'+projects.image;
        return <div key={projects.title} >
          
        <div className="item-wrap" >
          <div class="proj" style={{display:'inline-flex'}}>
            <div  class="img" style={{flex:1, justifyContent:'center'}}>
              <div  style={{ display:"flex",justifyContent:'center'}}>
                <a href={projects.url} title={projects.title} target="_blank">
                  {projects.title === "Kiddo"?<img alt={projects.title} src={images[projects.image]} style={{width:250}}/>  : <img alt={projects.title} src={images[projects.image]} style={{borderRadius:12}}/> }
                </a>
              </div>
            </div>
            <div class="parag" style={{flex:1,alignItems:'center',}}>
              <a href={projects.url} title={projects.title} target="_blank">
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  <br></br>
                    {projects.title === "Kiddo"?<div><br></br>
                    <br></br></div>:<></>}
                    
                    <Pulse> <h5 style={{fontSize:26,fontFamily:"Helvetica, Arial, sans-serif"}}>{projects.title}</h5></Pulse> 
                    <a id="github-proj" href={projects.github} target="_blank"> <p  style={{fontFamily:"Helvetica, Arial, sans-serif",fontSize:18 }}>Githup Repo</p></a>
                  </div>
                </div>
              </a>
              <p style={{fontFamily:"Helvetica, Arial, sans-serif",fontSize:18 }}>Technologies: {projects.technologies}</p>
              <p style={{fontSize:18 ,textAlign: 'justify',textJustify: 'inter-word', fontFamily:"Helvetica, Arial, sans-serif"}}>{projects.description}</p>
               {projects.title === "Kiddo"?<label id="submit-div" style={{borderRadius:6, border: "1px solid white", width:'30%', paddingTop:'1%', paddingBottom:'1%'}}><a href="https://www.youtube.com/watch?v=Vg748ApTsuI&feature=youtu.be&ab_channel=RazanAbusamra" target="_blank">Demo Video</a></label>:
              <></> }
            </div> 
            </div>
            <br></br>
            <br></br>
          <div className="link-icon"><a href={projects.url}  target="_blank"><i className="fa fa-link" ></i></a></div>
        </div>
  </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1 style={{fontSize:26, fontFamily:"Helvetica, Arial, sans-serif"}}>Check Out My Work</h1> 
            <p style={styleRed} style={{fontSize:18, color:'white',  padding:'7%', alignContent:'center',fontFamily:"Helvetica, Arial, sans-serif", margin:0, paddingTop:0,paddingBottom:0}} >          Through <b> ReBootKamp </b>experience, as team we developed these projects:                  </p>
            <br></br>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{color:'white', fontSize:16}}>
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
