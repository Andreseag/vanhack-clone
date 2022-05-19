import logo from '@assets/img/vanhack-logo.svg'

const JobsPage = () => {
  return (
    <header className='top-bar py-3 w-full flex justify-center items-center border-b'>
        <div className="top-bar__container w-9/12 flex items-center justify-between ">
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
                <button className='uppercase text-sm text-gray-600 font-bold py-3 px-5' type='button'>For candidates</button>
                <button className='uppercase text-sm text-blue-700 py-3 px-7' type='button'>Log In</button>
                <button className='uppercase rounded border border-blue-700 text-sm font-medium text-blue-700 py-3 px-7' type='button'>Sign Up</button>
            </div>
        </div>
    </header>
  )
}

export default JobsPage