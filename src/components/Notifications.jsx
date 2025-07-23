import {Header1} from './WelcomeHomePage';
import GoBackIcon from '../assets/icons/gback-icon.svg';
import ReadAllIcon from '../assets/icons-notifications-tab/readAll-icon.svg';
import SearchIcon from '../assets/icons-notifications-tab/search-icon.svg';
import ShowerBoy from '../assets/pp-images/shower-pp.jpg';
import UglyMan from '../assets/pp-images/ugly-pp.jpg';
import ManPic from '../assets/pp-images/man-profilepicture.jpeg';
import {Link} from 'react-router-dom';

function NotificationsHeader() {
    return (
        <div id='notificationContainer' style={{display:'flex', marginBottom:'10px', justifyContent:'space-between' , padding:'2% 3%', alignItems:'center'}}>
            <div style={{display:'flex', width:'75%',  alignItems:'center'}}>
                <Link style={{height:'30px'}} to='/homePage'><img height='30px' src={GoBackIcon} alt="goBack" /></Link>
                <h2>Notifications</h2>
            </div>
            <div style={{display:'flex' , width:'23%' ,  alignItems:'center' , justifyContent:'space-between'}}>
                <div id='Checked-icon' style={{display:'flex' , justifyContent:'flex-start', alignItems:'center' ,backgroundColor:"#ddd7d7", borderRadius:'50%' , padding:'6%'}}><img width='27px' height='auto' src={ReadAllIcon} alt="read-all_icon" /></div>
                <div id='Search-icon' style={{display:'flex' , justifyContent:'flex-start', alignItems:'center' ,backgroundColor:"#ddd7d7", borderRadius:'50%' , padding:'6%'}}><img width='25px' height='auto' src={SearchIcon} alt="search-icon" /></div>
            </div>
        </div>
    )
}


function News() {
    function errorHandling() {
        alert("Sorry , no previous notifications yet!");
    }


    return (
        <>
        <div id='newContainer' style={{padding:'0 2%'}}>
            <h3 style={{height:'34px' , alignContent:'center'}}>Today</h3>
            {/*<p style={{textAlign:'center'}}>No notifcations yet</p>*/}
            <div id='notificationCard' style={{display:'grid' ,padding:'1%', width:'100%', gridTemplateColumns:'20% 70% 10%'}}>
                <div id='image'>
                    <img height="70px" width='70px' src={ShowerBoy} alt="shower-boy" style={{borderRadius:'50%'}} />
                </div>
                <div id='content' style={{display:'flex' ,padding:'0 3%'}}>
                    <p id='content' style={{fontSize:'large' , fontWeight:'500'}} ><span id='personName' style={{fontWeight:'700'}}>Ethan Gray:</span> mentioned you in a comment.</p>
                </div>
                <div id='Threedots-button'>
                    <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
                </div>
            </div>

            <div id='notificationCard' style={{display:'grid' ,padding:'1%', width:'100%', gridTemplateColumns:'20% 70% 10%'}}>
                <div id='image'>
                    <img height="70px" width='70px' src={UglyMan} alt="shower-boy" style={{borderRadius:'50%'}} />
                </div>
                <div id='content' style={{display:'flex' ,padding:'0 3%'}}>
                    <p id='content' style={{fontSize:'large' , fontWeight:'500'}} ><span id='personName' style={{fontWeight:'700'}}>Bright Banana:</span> mentioned you in a comment.</p>
                </div>
                <div id='Threedots-button'>
                    <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
                </div>
            </div>



        </div>

        <div id='earlierContainer' style={{padding:'0 2%' }}>
            <h3 style={{height:'34px' , alignContent:'center'}}>Earlier</h3>
            <div id='notificationCard' style={{display:'grid' ,padding:'1%', width:'100%', gridTemplateColumns:'20% 70% 10%'}}>
                <div id='image'>
                    <img height="70px" width='70px' src={ManPic} alt="shower-boy" style={{borderRadius:'50%'}} />
                </div>
                <div id='content' style={{display:'flex' ,padding:'0 3%'}}>
                    <p id='content' style={{fontSize:'large' , fontWeight:'500'}} ><span id='personName' style={{fontWeight:'700'}}>Noah Mitchell:</span> reacted to a reel you shared.</p>
                </div>
                <div id='Threedots-button'>
                    <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
                </div>
            </div>

            <div id='notificationCard' style={{display:'grid' ,padding:'1%', width:'100%', gridTemplateColumns:'20% 70% 10%'}}>
                <div id='image'>
                    <img height="70px" width='70px' src={UglyMan} alt="shower-boy" style={{borderRadius:'50%'}} />
                </div>
                <div id='content' style={{display:'flex' ,padding:'0 3%'}}>
                    <p id='content' style={{fontSize:'large' , fontWeight:'500'}} ><span id='personName' style={{fontWeight:'700'}}>Bright Banana, Sophia Carter </span> and 6 other people reacted to a post you shared.</p>
                </div>
                <div id='Threedots-button'>
                    <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
                </div>
            </div>

            <div id='lastButton' style={{display:'flex', justifyContent:'center', width:'95%', margin:'auto' , padding:'5% 0'}}>
                <button onClick={errorHandling} style={{width:'100%', border:'none', borderRadius:'5px' ,padding:'10px 0', backgroundColor:'#d9d9d9d9', fontWeight:'600'}}>See previous notifications</button>
            </div>

        </div>
        </>
    )
}


function Notifications() {
    return (
        <>
        <Header1 />
        <NotificationsHeader />
        <News />
        </>
    )
}

export default Notifications;