import React, { Component } from 'react';
import kiddo from './portfolio/kiddo.png';
import hotelcom from './portfolio/hotelcom.PNG'
import explorepalestine from './portfolio/explorepalestine.PNG'

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
          
           <div className="item-wrap">
           
           

               <div class="proj" style={{display:'inline-flex'}}>
                <div  class="img test" style={{flex:1, paddingRight:20,justifyContent:'center'}}>
                  <div style={{ display:"flex",justifyContent:'center'}}>
                  <a href={projects.url} title={projects.title}>

                    {projects.title === "kiddo"?<img alt={projects.title} src={images[projects.image]} style={{width:250}}/>  : <img alt={projects.title} src={images[projects.image]} style={{borderRadius:12}}/> }
                   </a>
                  </div>
                </div>
                <div class="parag" style={{flex:1}}>
                <a href={projects.url} title={projects.title}>
              <div className="overlay">
                  <div className="portfolio-item-meta">
                
                 <h5 >{projects.title}</h5>
                 <a href={projects.github} target="_blank"> <p>{projects.category} : github repositary</p></a>
                  </div>
                </div>
                </a>
               <p><b>Technologies:</b> {projects.technologies}</p>
                  <p style={{fontSize:16 ,textAlign: 'justify',textJustify: 'inter-word'}}>{projects.description}</p>
                  {projects.title === "kiddo"?<label id="submit-div" style={{borderRadius:6, border: "1px solid white", width:'30%'}}><a href="https://www.youtube.com/watch?v=Vg748ApTsuI&feature=youtu.be&ab_channel=RazanAbusamra" target="_blank">Demo Video</a></label>:
                   <></> }
                  
                </div> 
               </div>
               <br></br>
               <br></br>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1 style={{fontSize:24}}>Check Out My Work</h1> 
            <pre style={styleRed} style={{fontSize:18, color:'white', margin:6}} >          Through <b> ReBootKamp </b>experience, as team we worked on these projects:                  </pre>
            <br></br>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" style={{color:'white', fontSize:16, padding:10}}>
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
