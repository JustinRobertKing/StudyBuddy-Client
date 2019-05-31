// dependency imports
import React, { Component } from 'react';
import axios from 'axios';

// component imports
import When from './components/When';

// css import
import './Survey.css';


export default class Survey extends Component {
    state = {
        page: 1,
    }

    render() {
        return (
            <div id = 'Survey'>
                <h3>On a scale of 1 -5, with one being almost never and 5 being almost always, please answer the following statetments.</h3>
            <form className = 'SurveyForm'>
                <h4>I like to study for more than one hour</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I like to study in the morning</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I like to study in the afternoon</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I like to study in the evening</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I prefer to study on campus</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I prefer to study off campus</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I prefer to study at home</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I prefer to study at the library</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>I prefer to study in a quiet place</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I want to work on class material together</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I prefer to work on my own</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I like to talk through course problems</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I like to talk through course problems</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I like to talk through course problems</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I enjoy the company but don't need help with my work</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, enjoying work time is more important than productivity</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, being productive is more important than having fun</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I enjoy side conversations</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
                <h4>While studying with others, I want others to help me stay on topic</h4>
                <input type = 'radio' className = 'SurveyAnswer' /><label>1</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>2</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>3</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>4</label>
                <input type = 'radio' className = 'SurveyAnswer' /><label>5</label>
            </form>
            </div>
        )
    }
}