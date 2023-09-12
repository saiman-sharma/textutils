import React, {useState, useEffect} from 'react' //rfc is es7 short for react function based compopnent

export default function TextForm(props) {

    //how to set state and event
    const handleOnClick = () =>{ //whenever the button is clicked that is a state, function fires
        // console.log("Uppercase was cicked" + text) //text will return the current state of text
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnClick2 =()=>{
        let newText2 = text.toLowerCase();
        setText(newText2)
        props.showAlert("Converted to lowercase!", "success");
    }

    const clearText =()=>{
        let newText3 = ""
        setText(newText3)
        props.showAlert("Cleared!", "success");
    }
    
    //setting state and handle event
    const handleOnChange = (event) =>{ //whenever we change the state of textform, this function fires
        // console.log('On change')
        setText(event.target.value) //This changes the state of the state variable value. Value inside a textform basically sets the value of the textform with whatever value we provide so it has become fixed. This syntax allows us to set whatever text we want inside it
        //What it basically does it is setText(current state + whatever I type with it)
        
    };



    // let wordCountFunc = () =>{
    //     let input = text.split(' ');
    //     let wordCount = 0;
    //     input.forEach((word)=>{
    //         if(word.trim() !== ''){
    //             wordCount++;
    //         }
    //     });
    //     setWordCount(wordCount);
    //     return [text]
    // };

    const [text, setText] = useState(''); //useState is one of the hooks
    // text = "hggjhj" //wrong way
    // setText('') //correct way

     // word count
    const [wordCount, setWordCount] = useState(0);

  // character count
    const [charCount, setCharCount] = useState(0);

    const [charCountNoSpace, setCharCountNoSpace] = useState(0);

    const [timeToRead, setTimeToRead] = useState(0);

    const [sentenceCount, setSentenceCount] = useState(0);

    const [syllablesCount, setSyllablesCount] = useState(0);

    useEffect(() => {
        // array of words
        const words = text.split(' ');
        // update word count
        let wordCount = 0;
        words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
        });
        setWordCount(wordCount, []);
    
        // update char count (including whitespaces)
        setCharCount(text.length);
        setCharCountNoSpace(text.replace(/ /g, '').length)
        setTimeToRead(0.008 * wordCount)
      },[text]);

      useEffect(() => {
        const sentences = text.split('.');
        let sentenceCount = 0;
        sentences.forEach((word) => {
          if (word.trim() !== '') {
            sentenceCount++;
          }
        });
        setSentenceCount(sentenceCount);
    }, [text]);

    useEffect(() => {
    //   const words = text.split(' ')
      const vowels = text.split('')
    //   let wordCount = 0;
        let vowelCount = 0;
        // words.forEach((word)=>{
        //     if (word.trim() !== ''){
        //         wordCount++;
        //     }
        // });
        vowels.forEach((vowel)=>{
            if(vowel ==='a' || vowel==='e' || vowel ==='i' || vowel ==='o' || vowel ==='u'){
            vowelCount++;
            }
            });
        setSyllablesCount(vowelCount);
    }, [text]);
    

  return (
    <>
    <h1>Enter the text below</h1>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Enter Your Text</label> */}
        <textarea className="form-control" placeholder='Enter your text' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#424141', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
          <div className='col text-center'><button className={`btn btn-${props.buttonColor} my-3`} onClick={handleOnClick}>Convert to Uppercase</button></div>  
          <div className='col text-center'><button className={`btn btn-${props.buttonColor}`} onClick={handleOnClick2}>Convert to Lowercase</button></div>
          <div className='col text-center'><button className={`btn btn-${props.buttonColor} my-3`} onClick={clearText}>Clear</button></div>
    </div>
    <h2 className='text-center my-3'>Your text Summary</h2>
    <div className="container border border-dark w-100">
        <p>Number of Characters (including spaces): {charCount}</p>
        <p>Number of Characters (without spaces): {charCountNoSpace}</p> 
        {/* here / /g is a global search that searches for all the space occurence, if we type poo inside like /poo/g, it will search for poo in the element */}
        <p>Number of words: {wordCount}</p>
        <p>Number of sentences: {sentenceCount}</p>
        <p>Number of vowels: {syllablesCount}</p>
        <p>Minutes taken to read: {timeToRead} min</p>
        </div>
        <h3 className='my-3'>Preview</h3>
        <div className="container my-3 border border-light">
        <p>{text.length>0?text:`Enter something to preview your text`}</p>
        </div>
    </>
  )
}


