import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div>
        <p>About <span>Us</span></p>
      </div>

      <div>
        <img src={assets.about_image} alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, magnam id. Provident voluptates atque, aliquid, eaque minus magnam optio ullam earum mollitia vitae, autem reprehenderit illum amet repellat est nemo!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi assumenda accusantium delectus possimus illum voluptatum labore recusandae, soluta adipisci natus et magnam aliquid, est quae fugiat mollitia ea reprehenderit?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus illum minus omnis sapiente placeat voluptatibus, reiciendis eius animi quibusdam expedita esse aliquam, molestias, doloremque praesentium tenetur distinctio sit error.</p>
        </div>
      </div>
    </div>
  )
}

export default About
