import React from 'react'
import Navigation from '../../../../partials/Navigation';
import Header from '../../../../partials/Header';
import { CiSearch } from 'react-icons/ci';
import TeacherTable from './TeacherTable';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import DatabaseInformation from '../DatabaseInformation';
import ModalValidate from '../../../../partials/modals/ModalValidate';


const Teacher = () => {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <>
      <section className='flex'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className='flex relative'>
              <div className={`main-wrapper transition-all px-4 py-3 ${showInfo ? "w-3/4" : "w-full"}`}>
                <div className='flex justify-between items-center'>
                  <h1>Database</h1>
                  <form action="" className='relative'>
                    <input type="text" placeholder='Search Student' className='p-1 px-3 pl-10 outline-none bg-secondary border border-stone-800 rounded-md placeholder:text-content placeholder:opacity-20'/>
                    <CiSearch className='absolute top-1 left-1 text-content opacity-20 text-2xl'/>
                  </form>
                </div>

                <div className='tab flex items-center justify-between mt-8 border-b border-line mb-8'>
                  <ul className='flex space-x-10'>
                    <li className='tab-link'><Link to="/database/student">Student</Link></li>
                    <li className='tab-link active'><Link to="/database/teacher">Teacher</Link></li>
                    <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                  </ul>
                  <button className='btn btn--accent'>
                    <FiPlus/>New
                  </button>
                </div>
                <TeacherTable setShowInfo={setShowInfo} showInfo={showInfo}/>
              </div>
              <DatabaseInformation showInfo={showInfo}/>
            </div>
        </main>
        {/* <ModalValidate/> */}
      </section>
    </>
  )
}

export default Teacher
