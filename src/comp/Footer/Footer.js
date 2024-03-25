import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-black h-full'>
      <div>
        <div style={{ marginLeft: '170px' }} className='text-8xl  text-white py-60'>
          <h1>Lets Work Together</h1>
        </div>
        <div>
          <div style={{ borderTop: '2px solid grey' }}>
            <button style={{ marginLeft: '1200px', borderRadius: '300px', padding: '100px', width: '220px', whiteSpace: 'nowrap', textAlign: 'center', backgroundColor: 'rgb(51, 75, 211)', marginTop:'-180px'}} className=' text-white p-8 text-0.5xl hover:bg-red-900'>
              <div className='flex justify-center font-semibold'>Get in Touch</div>
            </button>
          </div>
        </div>

        <div style={{ marginLeft: '190px', marginTop: '50px' }} className='flex gap-12'>
          <button style={{ border: '1px solid grey', borderRadius: '30px', padding: '15px',transition:'background-color 0.3s ease-in-out' }} className='text-white text-0.5xl hover:transition  ease-in-out '><a href="mailto:admin@axis.vnit.in">admin@axis.vnit.in</a></button>
          <button style={{ border: '1px solid grey', borderRadius: '30px', padding: '15px' }} className='text-white text-0.5xl '>Student Activity Centre, Near Auditorium, VNIT, Nagpur-440010</button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '950px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '150px', gap: '20px', marginLeft: '70px', fontSize: '20px' }}>
          <p className='text-white'>Follow us on</p>
          <ul className='flex flex-row gap-10'>
            <li className='text-white'><a href="https://www.instagram.com/axis_vnit?igshid=MTg0MDRjcmphZmVmZg==">Instagram</a></li>
            <li className='text-white'><a href="https://youtube.com/@AXISVNIT?si=7s08iKfbI65In2Xl">Youtube</a></li>
            <li className='text-white'><a href="https://www.linkedin.com/company/axis-vnit-nagpur/">Linkedin</a></li>
            <li className='text-white'><a href="https://x.com/axisvnit?t=grPC8q7slHdcM0E2vQ6hug&s=09">X</a></li>
            <li className='text-white'><a href="https://www.facebook.com/axisvnit?sfnsn=wiwspwa&mibextid=2JQ9oc">Facebook</a></li>
          </ul>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '150px', gap: '20px', marginLeft: '70px', fontSize: '20px', marginBottom:'70px' }}>
          <p className='text-white'>
            Version
          </p>
          <p className='text-white'>
            Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
