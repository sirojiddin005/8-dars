import React, { Component } from 'react'
import './Main.css'
import circle from './Avatar.png'
import ThemaContext from '../Contexts/ThemaContext'

export class RightSide extends Component {
  static contextType = ThemaContext;

  render() {
    return (
      <main>
      <div className={`main ${this.context.theme}`}>
        <img className='circle' src={circle} alt="" />
          <h1>Hello. <br />My name is Kevin.</h1>
          <hr />
          <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. <br />
          Right now, I'm <a href=""> Design </a> Lead at <a href=""> Holiday Extras, </a> covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. <br />
          I've got some <a href=""> work on Dribbble, </a> some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
        </div>
        </main>
    )
  }
}

export default RightSide