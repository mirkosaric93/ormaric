import './App.css';
import logoicon from './img/ormaric.png';
import noimg from './img/noimg.jpeg';
import { useState } from 'react';

const adminData = {
  username: 'duda',
  password: 'rebelde1'
}

function App() {
  const [login, setLogin] = useState(false);
  const [addNewAd, setAddNewAd] = useState(false);
  const [enableBtn, setEnableBtn] = useState(false);

  return(
    <div className='centralConsole'>
      {login && <LogInForm setLogin={setLogin} setEnableBtn={setEnableBtn}/>}
      {addNewAd && <AddNewAd setAddNewAd={setAddNewAd} />}
      <LogoBar setLogin={setLogin} setAddNewAd={setAddNewAd} enableBtn={enableBtn}/>
      <Fillters />
      <SellingConsole />
      <ContactFooter />
    </div>
  )
}

function LogoBar({setLogin, setAddNewAd, enableBtn}){
  return(
    <div className='mainCentralCon'>
      <div className='headTitle'>
        <p><b>ORMARIĆ</b></p>
        <p className='borderBot'></p>
      </div>

      <div className='homeNav'>
        <div className='logoImg'>
          <img src={logoicon} alt='Main Logo'/>
        </div>
        <div className='aboutUs'>
          <p>U našem širokom asortimanu polovne garderobe pronaći ćeš pažljivo birane komade koji se ističu svojim stilom i kvalitetom. Svaki komad prolazi kroz detaljan proces pregleda kako bi se garantovala njegova autentičnost, očuvanost i čistoća. Sa <b>ORMARIĆ-em</b>, možeš uživati u luksuzu bez kompromisa. Najčešće se kod nas nalaze original komadi garderobe. Mogu se naći i stvari koje su potpuno nove.</p>
        </div>
      </div>

      <div className='contactNav'>
        <LogIn setLogin={setLogin}/>
        <NewAd setAddNewAd={setAddNewAd} enableBtn={enableBtn} />
      </div>
    </div>
  )
}

function NewAd({setAddNewAd, enableBtn}){
  return(
    <div>
      <button className='btnStyle defaultBtn' onClick={()=> setAddNewAd(true)} disabled={enableBtn ? false : true}>Dodaj oglas &#43;</button>
    </div>
  )
}

function LogIn({setLogin}){
  return(
    <div>
      <button className='btnStyle defaultBtn' onClick={()=> setLogin(true)}>Uloguj Se</button>
    </div>
  )
}

function Fillters(){
  function selectedCategory(){
    const buttons = document.querySelectorAll('.fillterBtn');
    buttons.forEach((button)=>{
      button.addEventListener('click', function(){
        buttons.forEach((btn)=>btn.classList.remove('activeData'))
        button.classList.add('activeData');
      })
    })
  }
  return(
    <div className='fillters'>
      <p className='fillterBtn activeData' data-category='sve' onClick={()=>selectedCategory()}>Sve</p>
      <p className='fillterBtn' data-category='duksevi' onClick={()=>selectedCategory()}>Duksevi</p>
      <p className='fillterBtn' data-category='majice' onClick={()=>selectedCategory()}>Majice</p>
      <p className='fillterBtn' data-category='farmerice/pantalone' onClick={()=>selectedCategory()}>Farmerice/Pantalone</p>
      <p className='fillterBtn' data-category='jakne' onClick={()=>selectedCategory()}>Jakne</p>
      <p className='fillterBtn' data-category='obuca' onClick={()=>selectedCategory()}>Obuća</p>
      <p className='fillterBtn' data-category='aksesoari' onClick={()=>selectedCategory()}>Aksesoari</p>
    </div>
  )
}

function SellingConsole(){
  return(
    <div className='adConsole'>
      <AdSingleComponent name='Diesel Majica' />
      <AdSingleComponent name= 'Replay Majica' />
      <AdSingleComponent name= 'Nike Majica' />
      <AdSingleComponent name= 'Tommy Majica' />
      <AdSingleComponent name= 'Guess Majica' />
      <AdSingleComponent name= 'Mark Polo Majica' />
    </div>
  )
}

function AdSingleComponent({name='nema opis', imgAd=noimg, opis='nema opis', velicina='/', cena='/', data, value='din' }){
  return(
    <div className='singleAd' data-category={data}>
      <h3>{name}</h3>
      <div className='imgContainer'>
        <img src={imgAd} alt={`Image of ad ${name}`}/>
      </div>
      <button className='delBtn'>&#128465;</button>
      <div className='ad'>
          <p>Veličina:<b className='vel'>{velicina}</b></p>
          <p>Cena:<b className='red'>{cena}{value}</b></p>
      </div>
      <p className='opis'>Opis:{opis}</p>
    </div>
  )
}

function ContactFooter(){
  return(
    <div className='contact'>
      <p>Mail:<a href='mailto:mirko@gmail.com'><b>mirko@gmail.com</b></a></p>
      <p>Telefon:<a href='tel:069123456'><b>069123456</b></a></p>
      <p>Instagram:<a target='_blank' href='https://www.instagram.com/ormaric1121/'><b>ORMARIĆ</b></a></p>
      <p>&copy; 2024 <b>Mirko Šarić.</b></p>
      <p>Ovaj sajt je trenutno omogucen samo za Admina da postavlja oglase.</p>
    </div>
  )
}

function LogInForm({setLogin, setEnableBtn}){
  function handleLogIn(){
    const usernameAdmin = document.querySelector('#usernameAdmin');
    const passwordAdmin = document.querySelector('#passwordAdmin');
    if(String(usernameAdmin.value) === adminData.username && String(passwordAdmin.value) === adminData.password){
      setEnableBtn(true);
      setLogin(false);
    }
  }

  return(
    <div className='logInMain'>
      <div className='loginForm'>
        <div className='username'>
          <label>Korisničko ime:</label>
          <input type='text' id='usernameAdmin' />
        </div>
        <div className='username'>
          <label>Šifra:</label>
          <input type='password' id='passwordAdmin' />
        </div>
        <button className='closeBtn' onClick={()=>setLogin(false)}>X</button>
        <button className='submitBtn' onClick={handleLogIn}>Potvrdi!</button>
      </div>

      <div className='overlay' onClick={()=> setLogin(false)}></div>
    </div>
  )
}

function AddNewAd({setAddNewAd}){
  return(
    <div className='addNewAd'>
      <div className='addNewForm'>
        <div className='singleAdd'>
          <label>Naziv ili marka gaderobe:</label>
          <input type='text' placeholder='Dodaj naziv...' />
        </div>
        <div className='singleAdd'>
          <label>Opis stanja i više o predmetu:</label>
          <textarea type='text' placeholder='Dodaj stanje...' />
        </div>
        <div className='singleAdd'>
          <label>Veličina:</label>
          <select id='pickSize'>
            <option value='xs'>XS</option>
            <option value='s'>S</option>
            <option value='m'>M</option>
            <option value='l'>L</option>
            <option value='xl'>XL</option>
          </select>
        </div>
        <div className='singleAdd'>
          <label>Cena:</label>
          <input type='text' placeholder='Dodaj cenu...' />
        </div>
        <div className='singleAdd'>
          <label>Valuta:</label>
          <select id='valueOfAd'>
            <option value='din'>DIN</option>
            <option value='eur'>EUR</option>
          </select>
        </div>
        <div className='singleAdd'>
          <label>Kategorija:</label>
          <select id='dataCategoryAd'>
            <option value='duksevi'>Duksevi</option>
            <option value='majice'>Majice</option>
            <option value='farmerice/pantalone'>Farmerice/pantalone</option>
            <option value='jakne'>Jakne</option>
            <option value='obuca'>Obuća</option>
            <option value='aksesoari'>Aksesoari</option>
            <option value='neodredjeno'>Neodredjeno</option>
          </select>
        </div>
        <div className='singleAddFile'>
          <label>Ubaci slike:</label>
          <input type='file' />
        </div>

        <button className='submitBtn'>Postavi Oglas!</button>
        <button className='discardBtn' onClick={()=>setAddNewAd(false)}>Odbaci Postavljanje Oglasa!</button>
      </div>
    </div>
  )
}

export default App;