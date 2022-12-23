import { useRef, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
      <button
            className="transition duration-400 ease-in-out bg-ais-indigo hover:bg-ais-dark-blue rounded-lg text-white font-semibold items-center justify-center w-48"
          >
            <div className="py-4 px-8" onClick={() => setOpenSubscribeModal(true)}>Subscribe</div>
          </button>

      {openSubscribeModal &&
        <div className="px-4 fixed inset-0 h-128 w-128 m-auto flex items-center justify-center bg-[url('../../public/modalbg.png')] bg-cover bg-center">
          <div className="relative">
            <button className="absolute right-0 sm:-mr-0 -mt-10">
              <HighlightOffIcon fontSize="large"  onClick={() => setOpenSubscribeModal(false)}/>
            </button>
            <form onSubmit={subscribe}>
              <div className="text-sm"> Sign up for </div>
              <div className="text-xl"> EMAIL SUBSCRIBTION </div>
              <div className="text-xs grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4 text-black">
                <input
                  id="first-name-input"
                  name="first-name"
                  placeholder="FIRST NAME"
                  ref={inputFName}
                  required
                  type="fname"
                  className="font-xs h-10 w-52 py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-blue-gray"
                />
                <input
                  id="last-name-input"
                  name="last-name"
                  placeholder="LAST NAME"
                  ref={inputLName}
                  required
                  type="lname"
                  className="h-10 w-52 py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-blue-gray"
                />
                <input
                  id="email-input"
                  name="email"
                  placeholder="EMAIL"
                  ref={inputEmail}
                  required
                  type="email"
                  className="h-10 w-auto py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-blue-gray sm:col-span-2"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 items-center mt-4 justify-between">
                <button
                  type="submit"
                  className="w-48 transition duration-400 ease-in-out hover:bg-ais-dark-blue rounded-lg text-white font-semibold bg-[url('../../public/btnbg.png')] bg-cover"
                >
                  <div className="py-4 px-8" >Subscribe</div>
                </button>
                <div className="text-md py-4 text-red-600">{message ? message : null}</div>
                <div className="text-xs py-4">By entering your email address , you agree to recieve emails about our upcoming events.</div>
              </div>
            </form>
          </div>
        </div>
        }
        {openSuccessModal &&
        <div className="px-4 fixed inset-0 h-128 w-128 m-auto flex items-center justify-center bg-[url('../../public/modalbg.png')] bg-cover bg-center">
          <div className="relative">
            <button className="absolute right-0 sm:-mr-0 -mt-10">
              <HighlightOffIcon fontSize="large"  onClick={() => setOpenSuccessModal(false)}/>
            </button>
            <div className="text-xl font-bold"> HELLO THERE, </div>
            <div className="text-md"> Thanks for signing up to recieve our emails. </div>
            <img src="/ais_dark.svg" className="h-28 mr-2" />
            <div className="text-sm font-bold"> Want more? </div>
            <div className="text-xs"> Connect with us and get your daily does of AIS information. </div>
          </div>
        </div>
        }
    </div>
  );
}
