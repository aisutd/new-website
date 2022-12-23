import { useRef, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Subscribe() {
  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEmail = useRef(null);
  const inputFName = useRef(null);
  const inputLName = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEmail.current.value,
        first: inputFName.current.value,
        last: inputLName.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEmail.current.value = '';
    inputFName.current.value = '';
    inputLName.current.value = '';
    setOpenSubscribeModal(false);
    setOpenSuccessModal(true);
  };

  return (
    <div className="max-w-2xl mr-auto">

      <div className="pl-80 ml-40 items-center justify-center">
        <button  onClick={() => setOpenSubscribeModal(true)} className="shadow-md hover:shadow-2xl transition duration-400 ease-in-out bg-ais-indigo hover:bg-ais-hover-indigo rounded-lg text-white font-semibold w-48 h-11">
          <div className=" px-5 text-sm">Subscribe</div>
        </button>   
      </div>

      {openSubscribeModal &&
        <div className="rounded-lg px-4 fixed inset-0 h-128 w-128 m-auto flex items-center justify-center bg-[url('../../public/modalbg.png')] bg-cover bg-center">
          <button className="absolute right-2 top-2">
            <HighlightOffIcon fontSize="medium" onClick={() => setOpenSubscribeModal(false)}/>
          </button>
          <div className="relative">
            <form onSubmit={subscribe}>
              <div className="text-sm pt-8"> Sign up for </div>
              <div className="text-lg font-bold pb-8"> EMAIL SUBSCRIBTION </div>
              <div className="text-xs grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4 text-black px-7">
                <input
                  id="first-name-input"
                  name="first-name"
                  placeholder="FIRST NAME"
                  ref={inputFName}
                  required
                  type="fname"
                  className="bg-white bg-opacity-60 border-black border-2 h-9 w-44 py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-light-gray"
                />
                <input
                  id="last-name-input"
                  name="last-name"
                  placeholder="LAST NAME"
                  ref={inputLName}
                  required
                  type="lname"
                  className="bg-white bg-opacity-60 border-black border-2 h-9 w-44 py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-light-gray"
                />
                <input
                  id="email-input"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  ref={inputEmail}
                  required
                  type="email"
                  className="bg-white bg-opacity-60 border-black border-2 h-9 w-auto py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-light-gray sm:col-span-2"
                />
              </div>
              
              <div className="justify-center items-center mt-8">
                <button
                  type="submit"
                  className="w-40 transition duration-400 ease-in-out hover:bg-ais-dark-blue rounded-lg text-white font-semibold bg-[url('../../public/btnbg.png')] bg-cover"
                >
                  <div className="py-3 px-10 justify-center text-sm">SUBSCRIBE</div>
                </button>
                <div className="text-sm py-3 text-red-600">{message ? message : null}</div>
                <div className="text-xs pb-2">By entering your email address, you agree to recieve emails about our upcoming events.</div>
              </div>
            </form>
          </div>
        </div>
        }
        {openSuccessModal &&
        <div className="rounded-lg px-4 fixed inset-0 h-128 w-128 m-auto flex items-center justify-center bg-[url('../../public/modalbg.png')] bg-cover bg-center">
          <button className="absolute right-2 top-2">
            <HighlightOffIcon fontSize="medium" onClick={() => setOpenSuccessModal(false)}/>
          </button>
          <div className="relative">
            <div className="text-lg font-bold pt-8"> HELLO THERE, </div>
            <div className="text-md py-1"> Thanks for signing up to recieve our emails. </div>
            <img src="/ais_dark.svg" className="h-44 m-auto py-8" />
            <div className="text-sm font-bold"> want more? </div>
            <div className="text-xs py-1"> connect with us and get your daily does of AIS information </div>
            <div className="flex m-auto justify-center">
              <IconButton onClick={() => {window.open("/fb", "_blank")}}>
                <FacebookIcon className='h-5 text-ais-black'/>
              </IconButton>
              <IconButton onClick={() => {window.open("/insta", "_blank")}}>
                <InstagramIcon className='h-5 text-ais-black'/>
              </IconButton>
              <IconButton onClick={() => {window.open("/linkedin", "_blank")}}>
                <LinkedInIcon className='h-5 text-ais-black'/>
              </IconButton>
              <IconButton onClick={() => {window.open("/yt", "_blank")}}>
                <YouTubeIcon className='h-5 text-ais-black'/>
              </IconButton>
              <IconButton onClick={() => {window.open("/dc", "_blank")}}>
                <img src="/discord.svg" className="h-5 text-ais-dark-blue" />
              </IconButton>
            </div>
          </div>
        </div>
        }
    </div>
  );
}
