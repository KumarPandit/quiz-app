import { LightningElement } from 'lwc';

export default class QuizAppLwc extends LightningElement {

    myQuestions=[
        {
            id:"Question1",
            question:"which one of the following is not a template loop?",
            answers:{
                a:"for-each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:'c'
        },
        {
            id:"Question2",
            question:"which one of the file is invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"which one of the following is not a directive?",
            answers:{
                a:"for-each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    changeHandler(event){
        console.log("name", event.target.name);
        console.log("value", event.target.value);
    }
}