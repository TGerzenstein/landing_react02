import React from 'react'

function ServicePage() {
  return (
    <div>
      <h1 className='title-page'>Services to Grow Your Brand</h1>
      <div>
        <p className='subtitle-services'>
          Custom Software Development
        </p>
        <p className='content-text'>
          Tailored solutions to meet specific business needs and requirements.
          Full-cycle development from concept and design to implementation, 
          testing, and maintenance.
          Expertise in various technologies and programming languages to develop 
          robust and scalable software applications.
          Examples: Enterprise resource planning (ERP) systems, customer 
          relationship management (CRM) software, inventory management systems, 
          custom web and mobile applications.
        </p>
      </div>  
      <div>
        <p className='subtitle-services'>
          Web Development and Design
        </p>
        <p className='content-text'>
          Creation and optimization of websites and web applications for optimal user experience and functionality.
          Frontend development including HTML, CSS, JavaScript, and responsive design for cross-platform compatibility.
          Backend development with languages like PHP, Python, Ruby, or Node.js, and database integration.
          Services may include website redesign, e-commerce development, content management system (CMS) 
          implementation, and website maintenance.
        </p>
      </div>
      <div>
        <p className='subtitle-services'>
          Mobile App Development
        </p>
        <p className='content-text'>
          Development of native, hybrid, or cross-platform mobile applications for iOS and Android platforms.
          User interface (UI) and user experience (UX) design tailored for mobile devices to enhance usability and engagement.
          Integration of features such as geolocation, push notifications, in-app purchases, and social media sharing.
          Services may include mobile strategy consulting, app prototyping, development, testing, deployment, and ongoing support and updates.
        </p> 
      </div>
    </div>
  )
}

export default ServicePage