import React, {useState} from 'react'
// import logo from './question_mark.png';
import logo from '../Assets/question_mark.png';
// import jsonData from './FAQ.json';
import jsonData from '../JSON-Files/FAQ.json';

function FAQ() {
    const [questions] = useState(jsonData);

  return (
        <div>
            <section>
                <div className='container1'>
                    <div className='circles'>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                    <div className='FAQ'>
                        FREQUENTLY ASKED QUESTIONS
                    </div>
                    <div className='line'></div>
                    <div className='cards'>
                        {questions && questions.map((question, i) => (
                            <div kay={i} className='card1'>
                                <div className='card_que'>
                                    <img className="img_que" src={logo} alt="" srcset="" />
                                </div>
                                <div className='card_body'>
                                    <h3>{question.Question}</h3>
                                    <h4 className='sym1'>{question.Answer}</h4>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
  )
}

export default FAQ