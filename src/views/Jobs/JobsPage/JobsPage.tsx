import logo from '@assets/img/vanhack-logo.svg'
import canadaFlag from '@assets/img/canada.svg'
import signalIcon from '@assets/img/signal.svg'
import priceSimbol from '@assets/img/money-simbol.svg'
import { SearchIcon } from '@heroicons/react/solid'

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
                    <input className='text-sm text-gray-500 focus:outline-0' type="text" placeholder='Job title or tech skill'/>
                </div>
                <div className="filers__group flex flex-col border-l px-2">
                    <label className='text-sm font-bold text-gray-500 mb-2' htmlFor="">Where</label>
                    <input className='text-sm text-gray-500 focus:outline-0' type="text" placeholder='Country or city name'/>
                </div>
                <div className="filers__group flex flex-col border-l px-2">
                    <label className='text-sm font-bold text-gray-500 mb-2' htmlFor="">Remote or Relocate</label>
                    <input className='text-sm text-gray-500 focus:outline-0' type="text" placeholder='Choose an option'/>
                </div>
                <div className="filers__group flex items-center">
                    <button>
                        <SearchIcon className="h-7 w-7 text-gray-600" />
                    </button>
                </div>
            </form>
            <section className="jobs mt-12 text-gray-700">
                <h2 className='text-2xl font-bold mb-5'>Newst Jobs</h2>
                <div className="jobs__list">
                    {".".repeat(6).split('').map(() => (
                        <article className="job border mb-6 py-8 px-8 rounded-lg cursor-pointer transition ease-in-out duration-300 hover:shadow-lg">
                            <div className="job__time-positions flex items-center">
                                <span className="time-to-publication bg-blue-500 rounded-xl text-white text-xs px-3 py-1">New - 6 hours ago</span>
                                <p className="postions text-xs ml-3">1 position</p>
                            </div>
                            <h3 className="job__title text-xl font-bold text-blue-500 mt-5">Intermediate Developer (FULLY REMOTE)</h3>
                            <div className="job__information flex mt-7">
                                <div className="job__information-country flex items-center mr-4">
                                    <img src={canadaFlag} alt="canada" className='w-6'  />
                                    <p className='ml-2 text-sm text-gray-600'>Montreal - Canada</p>
                                </div>
                                <div className="job__information-modality flex items-center mr-4">
                                    <img src={signalIcon} alt="remote"  />
                                    <p className='ml-2 text-sm text-gray-600'>Fully remote</p>
                                </div>
                                <div className="job__information-salary flex items-center mr-4">
                                    <img src={priceSimbol} alt="price"  />
                                    <p className='ml-2 text-sm text-gray-600'>$80,000 up to $100,000 CAD/Annual</p>
                                </div>
                            </div>
                            <div className="job__description mt-5">
                                <p className='text-sm text-gray-600'>
                                Tech company in Canada is looking to hire Intermediate PHP/React developers! IMPORTANT: Job is fully remote 
                                The Intermediate Developer is responsible for:
                                </p>
                            </div>
                            <ul className="job__skills mt-8">
                                <li className="skill inline-flex rounded-xl border px-2 py-1 mr-3">
                                    <p className='text-gray-400 text-sm font-bold mr-3'>Php</p>
                                    <span className='text-gray-400 text-sm'> 3years</span>
                                </li>
                                <li className="skill inline-flex rounded-xl border px-2 py-1 mr-3">
                                    <p className='text-gray-400 text-sm font-bold mr-3'>React</p>
                                    <span className='text-gray-400 text-sm'> 3years</span>
                                </li>
                            </ul>
                        </article>
                    ))}
                    
                </div>
            </section>
        </div>
        
    </>
  )
}

export default JobsPage