import React from 'react';
import user from "../data/user";

export default function Links() {

   const linkedin = user.links.linkedin;
   const github = user.links.github;
  return(
    <div>
        <h3>Links</h3>  
        {/* <a href={linkedin}/>
        <a href={github} />     */}
    </div>
  );
}
