import FacebookLogo from "../assets/icons/fb-icon-loginpage.png";
import { Link} from "react-router-dom";
import MetaIcon from '../assets/images/meta-logo.png'


function LoginPage() {
    function handleError(){
        alert("Sorry , Creating account still in progress..")
    }

    if (window.innerHeight < '420') {
      alert("Note: Your device screen tall(Height) is not enough to use the application with best performance");
    }

  return (
    <div style={{ width:'90%', margin:'auto' , height: "98vh" , display:'grid' , gridTemplateRows:'10% 25% 50% 15%'}}>
      <Link style={{ width:'10%'}} to='/'>  <svg style={{ padding:'50% 0'}} height='20px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg></Link>

      <img style={{alignSelf:'center' , justifySelf:'center'}} height='60px' src={FacebookLogo} alt="facebook-logo" />

      <form style={{display:'flex' , flexDirection:'column', gap:'3%' , textAlign:'center' }}  action="" >
        <input style={{padding: '20px 15px', border:'1px solid rgba(174, 179, 163, 0.6)' , borderRadius:'10px'}} type="text" autoComplete="false" placeholder="Mobile number or email address" />
        <input style={{padding: '20px 15px', border:'1px solid rgba(174, 179, 163, 0.6)' ,  borderRadius:'10px'}} type="password" autoComplete="false" placeholder="Password" />
        <Link to='/homePage'><button style={{ backgroundColor:'rgb(0, 100, 224)', color:'white', fontWeight:'bold', border:'none', borderRadius:'50px' ,padding:'15px 10px', width:'100%'}} >Log in</button></Link>
        <Link style={{color: 'black', textDecoration: "none" }} to="#">
          Forgotten password?
        </Link>
      </form>


        <footer style={{display:'flex' , flexDirection:'column', gap:'15%'}}>
            <button onClick={handleError} style={{backgroundColor:'#ffffff00', fontWeight:'bold',color:'blue',border:'1px solid blue' ,borderRadius:'30px' ,padding: '13px 0'}}>Create new account</button>
            <img style={{alignSelf:'center'}} width='20%' src={MetaIcon} alt="meta-icon" />
        </footer>

    </div>
  );
}

export default LoginPage;
