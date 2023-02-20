import React from 'react';

function Card() {
  return (
    <div  className="post-module" style={{ border:'2px solid',margin:'4px' , height: '471px',borderRadius: '2px',
    boxShadow: '5px 2px 5px 1px gray',width:'300px'}} >
      <div className="thumbnail"><img height="200px" width = "300px"  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" /></div>
      <div className="post-content">
        <div className="category">CATEGORY</div>
        <h3 className="title">Title Goes Here</h3>
        <h4 className="sub_title">And Subtitle Goes Here.</h4>
        <p className="description" style={{ padding:'4px', height: '100px', opacity: 1 }}>New York, the largest city in the U.S., is an architectural marvel with plenty, magnificent buildings and countless dazzling skyscrapers.  <br/><br/> <span style={{ padding:'4px', border:'1px solid', opacity: 0.8, margin:'2px' }} > <b> Updated 6 mins ago </b> </span>  </p>
         
      </div>
    </div>
  );
}

export default Card;