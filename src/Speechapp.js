import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';


const Speechapp = () => {

const [text, setText] = useState('');

const { speak } = useSpeechSynthesis();



const handleSubmit = (e) => {
    e.preventDefault();
    speak({ text: text})



}


    return (

            <form onSubmit={handleSubmit}  className="form__control">
                <textarea 
                cols="30" 
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}

                ></textarea>

                <input className="submit" type="submit" value="Voice"/>
            </form>
    )
}

export default Speechapp
