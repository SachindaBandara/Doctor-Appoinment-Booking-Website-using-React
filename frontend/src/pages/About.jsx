import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            magnam id. Provident voluptates atque, aliquid, eaque minus magnam
            optio ullam earum mollitia vitae, autem reprehenderit illum amet
            repellat est nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            excepturi assumenda accusantium delectus possimus illum voluptatum
            labore recusandae, soluta adipisci natus et magnam aliquid, est quae
            fugiat mollitia ea reprehenderit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit possimus illum minus omnis sapiente placeat
            voluptatibus, reiciendis eius animi quibusdam expedita esse aliquam,
            molestias, doloremque praesentium tenetur distinctio sit error.
          </p>
        </div>
      </div>

      <div className="text-xl text-center my-10 pt-20">
        <p>
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficient</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, praesentium alias tenetur totam tempora cumque cupiditate nihil dicta voluptates blanditiis, dolores aut inventore fugit nobis debitis facilis delectus molestiae accusamus?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, soluta doloremque quo vitae impedit culpa? Commodi quas minus ipsum magnam ad corrupti laudantium molestiae sunt fuga natus non, corporis odit?</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit esse similique, voluptas labore beatae ducimus dolorem. Quaerat illo eveniet quibusdam totam iste, consectetur molestiae similique illum molestias, sunt magni distinctio!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
