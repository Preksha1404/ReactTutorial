import React, { useCallback, useEffect } from 'react';
// import Card from './components/Card.jsx';

function App() {
  // let prices = [0.01, 0.02, 0.03, 0.04, 0.05];

  // const [counter, setCounter] = React.useState(0);
  // const addValue = () => {
  //   // console.log("Counter value before update:", counter);
  //   setCounter((prevCounter) => prevCounter + 1);
  //   setCounter(prevCounter => prevCounter + 1);
  // }
  // const subtractValue = () => {
  //   setCounter(counter - 1);
  // }

  // const [color, setColor] = React.useState("blue");

  const [length, setLength] = React.useState(8);
  const [numberAllowed, setNumberAllowed] = React.useState(false);
  const [charAllowed, setCharAllowed] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const passwordRef = React.useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";

    if (numberAllowed) {
      chars += "0123456789";
    }
    if (charAllowed) {
      chars += "!@#$%^&*?";
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length+1);
      password += chars[randomIndex];
    }
    setPassword(password);
  }, [length, numberAllowed, charAllowed,setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99); // For mobile devices
    window.navigator.clipboard.writeText(password)
  },[password]);
  
  useEffect(() => {
    generatePassword();
  }
  , [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <>
    {/* <h1 className="bg-blue-400 text-2xl text-white mb-4 mt-4 border-2 w-max">Hello World</h1>

    <div className='text-xl mb-4 p-2'>Counter value:{counter}
    <button className='w-max mb-4 p-2 border-2 rounded-xl' onClick={addValue}>Add Value</button>
    <button className='w-max mb-4 p-2 border-2 rounded-xl' onClick={subtractValue}>Subtract Value</button>
    </div> */}

    {/* <Card name="Preksha" price={prices[0]}/>
    <Card/> */}

    {/* <div className='w-full h-screen flex items-center justify-center'
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 rounded-4xl bg-white p-4 shadow-lg'>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('red')}style={{backgroundColor:"red"}}>Red</button>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('pink')} style={{backgroundColor:"pink"}}>Pink</button>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('green')} style={{backgroundColor:"green"}}>Green</button>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('yellow')} style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('lavender')} style={{backgroundColor:"lavender"}}>Lavender</button>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('white')} style={{backgroundColor:"white"}}>White</button>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('black')} style={{backgroundColor:"black"}}>Black</button>
          <button className='px-4 outline-none rounded-full py-2' onClick={()=>setColor('blue')} style={{backgroundColor:"blue"}}>Blue</button>
        </div>
      </div>
    </div>   */}

    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl mb-4'>Password Generator</h1>
      <div className='flex flex-col items-center'>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border p-2 mb-2'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyToClipboard}>Copy</button>
        <div className='flex items-center mb-2'>
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className='mr-2'
          />
          <label>Length: {length}</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => setNumberAllowed((prev)=>!prev)}
            className='mr-2'
          />
          <label htmlFor='numberInput'>Include Numbers</label>
        </div>
        <div className='flex items-center mb-4'>
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={charAllowed}
            onChange={(e) => setCharAllowed((prev)=>!prev)}
            className='mr-2'
          />
          <label htmlFor='characterInput'>Include Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}
export default App
