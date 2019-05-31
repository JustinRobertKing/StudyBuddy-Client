// dependency imports
import React from 'react';

export default function When() {
    return (
        <div className = 'When'>
            <h3>On a scale of 1 -5, with one being almost never and 5 being almost always, please answer the following statetments.</h3>
            <form className = 'SurveyForm'>
                <h4>I like to study for more than one hour</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
            </form>
            <form className = 'SurveyForm'>
                <h4>I like to study in the morning</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
            </form>
            <form className = 'SurveyForm'>
                <h4>I like to study in the afternoon</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
            </form>
            <form className = 'SurveyForm'>
                <h4>I like to study in the evening</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
            </form>
        </div>
    )
}