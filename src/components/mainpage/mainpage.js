import './mainpage.css'
import { useNavigate } from 'react-router-dom'
import img2 from '../../images/ipl-2022-schedule.jpg'

function Mainpage() {
    const navigate = useNavigate()
    return (
        <div className='maincontainer-1'>
            <div className='topcontainer-1'>
                <div className='image1'>
                    <img src='bccilogo.jpg' alt='bccilogo' />
                </div>
                <div className='middlepart-1'>

                    <h2>
                        IPL DASHBOARD
                    </h2>
                </div>


            </div>
            <div className='scrool'>
                <marquee >Welcome to your Favourite IPL Dashboard</marquee>
            </div>
            <div className='bottomcontainer-1'>
                <div className='left'>
                    <div className='lefttop'>
                        <h1 className='h1tag'>Choose Your Analysis!!!</h1>
                    </div>
                    <div className='leftbottom'>
                        <h2 className='h21tag' onClick={() => navigate('/teamvsteam')}>Team vs Team Analysis</h2>
                        <h2 className='h22tag' onClick={() => navigate('/team')}>Season Analysis</h2>

                    </div>

                </div>


            </div>

        </div>
    )
}
export default Mainpage