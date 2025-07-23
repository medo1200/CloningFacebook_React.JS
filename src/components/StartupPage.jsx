import FacebookFamilyLogo from "../assets/images/facebook-family-logo.png";
import MetaLogo from "../assets/images/meta-logo.png";
import {Link } from 'react-router-dom';



function StartupPage() {

  function handleError() {
    alert('Sorry Get Started is under maintenance');
  }

  return (
    <div
      style={{
        maxWidth: "480px",
        textAlign: "center",
        width: "90%",
        margin: "auto",
        display:'grid',
        gridTemplateRows:'10% 65% 25%',
        height:'98vh'
      }}
    >
      <div style={{ alignContent:'center'}} >
        <select style={{ border: "none" }} id="languages">
          <option value="English-UK">English (UK)</option>
          <option value="Mandarin Chinese">Mandarin Chinese</option>
          <option value="Spanish">Spanish</option>
          <option value="Hindi">Hindi</option>
          <option value="Arabic">Arabic</option>
          <option value="Bengali">Bengali</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Russian">Russian</option>
          <option value="Japanese">Japanese</option>
          <option value="Punjabi">Punjabi</option>
          <option value="German">German</option>
          <option value="Javanese">Javanese</option>
          <option value="Wu Chinese">Wu Chinese</option>
          <option value="Malay">Malay</option>
          <option value="Telugu">Telugu</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Korean">Korean</option>
          <option value="French">French</option>
          <option value="Marathi">Marathi</option>
          <option value="Tamil">Tamil</option>
          <option value="Urdu">Urdu</option>
          <option value="Turkish">Turkish</option>
          <option value="Italian">Italian</option>
          <option value="Cantonese">Cantonese</option>
          <option value="Thai">Thai</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Jin Chinese">Jin Chinese</option>
          <option value="Southern Min">Southern Min</option>
          <option value="Persian">Persian</option>
          <option value="Bhojpuri">Bhojpuri</option>
          <option value="Hakka Chinese">Hakka Chinese</option>
        </select>
      </div>


      <div style={{ paddingTop:'20%' }}>
        <img width="100%" src={FacebookFamilyLogo} alt="family-logo" />
        <h2 style={{padding: '3% 0'}}>Join Facebook</h2>
        <p>
          Connect with friends, family and communities of people who are your
          interests.
        </p>
      </div>

      <footer style={{ display:'grid',
        gridTemplateRows:'33% 33% 30%',
        gap:'5%' ,
        justifyItems:'center',
        alignItems:'center'
       }}>
        <Link style={{
            backgroundColor: "rgb(0, 100, 224)",
            width: "100%",
            padding: '10px 0',
            borderRadius:'50px',
          }} to='#' onClick={handleError}> <button 
          style={{
            backgroundColor: "rgb(0, 100, 224)",
            border: "none",
            width: "100%",
            color:'white'
          }}>
          Get started
        </button></Link>
        
        <Link style={{width:'100%'}} to='/loginPage' >
        <button style={{ backgroundColor: "#ffffff00", border:'1px solid #80808080' , borderRadius:'50px' ,padding:'10px 0' , fontWeight:'bold', width: "100%" }}>
          I already have an account
        </button></Link>
        
        <img style={{paddingBottom:'2%'}} width="17%" src={MetaLogo} alt="meta-logo" />
      </footer>
    </div>
  );
}

export default StartupPage;
