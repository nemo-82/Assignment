import React from 'react'
import './home.css'
export default function Home(){
    return(
        <>
        {/* from 7 till 62 its the first half of the website */}
        <div className='patient-details'> 
            <div className='patient-pic'></div>
            <h1 className='patient-name'>Diane cooper</h1>
            <h5  className='patient-contact'>diane.cooper@example.com</h5>
            <div className='appointment-history'>
                <div className='data1'>15</div>
                <div className='data2'>past</div>
                <div className='data3'>|</div>
                <div className='data4'>02</div>
                <div className='data5'>Upcoming</div>
            </div>
            <div className='send-message'>Send Message</div>
            <div className='data p-data1'> 
            <h4 className='dt title'>Gender</h4>
            <h4 className='dt info'>Female</h4>
            <div className='vector'></div>
            </div>
            <div className='data p-data-2'> 
            <h4 className='dt title'>Birthday</h4>
            <h4 className='dt info'>24th Feb 1997</h4>
            <div className='vector'></div>
            </div>
            <div className='data p-data-3'> 
            <h4 className='dt title'>Phone number</h4>
            <h4 className='dt info'>(239)-555-0318</h4>
            <div className='vector'></div>
            </div>
            <div className='data p-data-4'> 
            <h4 className='dt title'>Registered Date</h4>
            <h4 className='dt info'>24th Feb 1997</h4>
            <div className='vector'></div>
            </div>
            <div className='data p-data-5'> 
            <h4 className='dt title'>Street Address</h4>
            <h4 className='dt info'>JL. Diponogero 21</h4>
            <div className='vector'></div>
            </div>
            <div className='data p-data-6'> 
            <h4 className='dt title'>city</h4>
            <h4 className='dt info'>cilacep</h4>
            <div className='vector'></div>
            </div>
            <div className='data p-data-7'> 
            <h1 className='dt title'>Zip Code</h1>
            <h4 className='dt info'>655849</h4>
            <div className='vector'></div>
            </div>
            <div className='data p-data-8'> 
            <h1 className='dt title'>Member Status</h1>
            <h4 className='dt info'>Active</h4>
            <div className='vector'></div>
            </div>
             <div className='patient-nav'>
                <div className='btn btn1'> <h4>Upcoming Appointments</h4></div>
                <div className='btn btn2'>Past Appointments</div>
                <div className='btn btn3'>Medical Record</div>
            </div>
        </div>
{/* first part ends here */}
{/* from here 2nd part of website starts */}
        <div className='appointment'>
            <div className='appointment-files'>
                <h1 className='files-title'>Files/Documents</h1>
                <div className='files-button1'> <p>📃CheckUpResults.pdf</p></div>
                <div className='files-button2'> <p>📃CheckupResults.PDF</p></div>
                <div className='files-button3'> <p>📃Medical Prescription.PDF</p></div>
                <div className='files-button4'> <p>📃Dental X-rays Results .PDF</p></div>
            </div>
        </div>
            <div className='appointment-details'>
                <div className='particular'>Root Canal Treatment</div>
                <div className='prev-particular'> <p>Show pervious Treatment</p></div>
                <div className='vector'></div>
                <div className='appointment-date1'>
                    <div className='ad-1'>26 Nov'19</div>
                    <div className='ad-2'>09:00-10:00</div>
                    <div className='ad-3'></div>
                    <div className='ad-4'>Treatment</div>
                    <div className='ad-5'>Open Access</div>
                    <div className='ad-6'></div>
                    <div className='ad-7'>Dentist</div>
                    <div className='ad-8'>Drg.Adam H</div>
                    <div className='ad-9'>Nurse</div>
                    <div className='ad-10'>Jessicamila</div>
                    <div className='ad-11'>Note</div>
                </div>
                <div className='appointment-date2'>
                    <div className='ad-1'>12 Nov'19</div>
                    <div className='ad-2'>09:00-10:00</div>
                    <div className='ad-3'></div>
                    <div className='ad-4'>Treatment</div>
                    <div className='ad-5'>Root Canal</div>
                    <div className='ad-6'></div>
                    <div className='ad-7'>Dentist</div>
                    <div className='ad-8'>Drg.Adam H</div>
                    <div className='ad-9'>Nurse</div>
                    <div className='ad-10'>Jessicamila</div>
                    <div className='ad-11'>Note</div>
                </div>
            </div>
        </>
    )
}