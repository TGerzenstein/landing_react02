import React from 'react';
//import Users from '/components/Users';

function ProfilesPage() {
  return (
      <div>
        <h1 className='title-page'>Profiles</h1>
        <div className='content-page'>
            <div>
                <h2>George Bluth</h2>
                <strong>Frontend developer</strong>
                <p>is a seasoned frontend developer with over a decade of experience in crafting 
                    immersive and user-friendly web experiences. Born and raised in a small town 
                    in the Midwest, George developed a passion for technology at a young age,
                    spending countless hours tinkering with computers and programming languages.</p>
            </div>
            <div>
                <h2>Janet Weaver</h2>
                <strong>UX UI Designer</strong>
                <p>Is a passionate UX UI designer with a flair for creativity and innovation. 
                    Growing up in a bustling city, Janet was always fascinated by the intersection 
                    of art and technology. This fascination led her to pursue a degree in Graphic 
                    Design with a focus on User Experience and Interface Design.</p>
            </div>
            <div>
                <h2>Emma Wong</h2>
                <strong>Project Manager</strong>
                <p>is a dynamic project manager with a knack for strategic planning and
                     effective team leadership. Born and raised in a bustling metropolis, Emma's 
                     upbringing instilled in her a strong work ethic and a passion for organization.</p>
            </div>
        </div>
      </div>
  )
}

export default ProfilesPage