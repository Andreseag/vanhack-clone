import logo from '@assets/img/vanhack-logo.svg'

const JobsPage = () => {
  return (
    <>
        <header className='top-bar py-3 w-full flex justify-center items-center border-b'>
            <div className="top-bar__container w-full lg:w-9/12 mx-8 lg:mx-0 flex items-center justify-between ">
                <div className="top-bar__navegation flex items-center">
                    <div className="top-bar__logo mr-3">
                        <img src={logo} alt="vanhack-logo" />
                    </div>
                    <div className="top-bar__navegation-items">
                        <ul className='flex'>
                            <li className='mx-3 text-sm text-gray-600'><a href="#">Talent Pool</a></li>
                            <li className='mx-3 text-sm text-gray-600'><a href="#">Virtual Hiring Fair</a></li>
                            <li className='mx-3 text-sm text-gray-600'><a href="#">Case Studies</a></li>
                            <li className='mx-3 text-sm text-gray-600'><a href="#">Bog</a></li>
                            <li className='mx-3 text-sm text-gray-600'><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="top-bar__more-options">
                    <button className='uppercase text-sm text-gray-600 font-bold py-3 px-3' type='button'>For candidates</button>
                    <button className='uppercase text-sm text-blue-700 py-3 px-7' type='button'>Log In</button>
                    <button className='uppercase rounded border border-blue-700 text-sm font-medium text-blue-700 py-3 px-7' type='button'>Sign Up</button>
                </div>
            </div>
        </header>
        <div className="container m-auto w-full lg:w-9/12 mt-10">
            <h1 className="text-gray-700 text-3xl font-bold">Find your dream job abroad or remote</h1>
            <form className="filters flex justify-between bg-white shadow-sm border rounded-lg py-6 px-7 mt-10">
                <div className="filers__group flex flex-col">
                    <label className='text-sm font-bold text-gray-500 mb-2' htmlFor="">What</label>
                    <input className='text-sm text-gray-500' type="text" placeholder='Job title or tech skill'/>
                </div>
                <div className="filers__group flex flex-col">
                    <label className='text-sm font-bold text-gray-500 mb-2' htmlFor="">Where</label>
                    <input className='text-sm text-gray-500' type="text" placeholder='Job title or tech skill'/>
                </div>
                <div className="filers__group flex flex-col">
                    <label className='text-sm font-bold text-gray-500 mb-2' htmlFor="">Remote or Relocate</label>
                    <input className='text-sm text-gray-500' type="text" placeholder='Job title or tech skill'/>
                </div>
            </form>
            <div className="jobs mt-12 text-gray-700">
                <h2 className='text-2xl font-bold'>Newst Jobs</h2>
                <div className="jobs__list">
                    <div className="job border py-6 px-7 rounded-md">
                        
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default JobsPage