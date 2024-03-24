import React from "react";
import {motion} from "framer-motion"

const fadeIn = {
  hidden: {
    opacity: 0,
    y:500
  },
  show:{
    opacity: 1, y:0,
    transition:{
      duration: 2
    }
  },
};

function About() {
  return (
    <div>
      <h2  className="flex justify-center text-4xl mt-8 mb-8">What is TechUtsav</h2>
      
      <div className="flex justify-around items-center  ">
        <div className="">
          <img  src="https://devfestnagpur.in/static/media/devfest-intro.4e3ac48494d5f8fdbb73.png" alt="" />
        </div>
        <div className="md:w-1/3  text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          perspiciatis dicta sunt repellendus repellat? Itaque quae voluptate
          consequatur voluptatem blanditiis. Delectus optio incidunt doloremque
          corporis, vel dicta eum nostrum asperiores aperiam itaque commodi
          aspernatur dolorum beatae illo atque mollitia sapiente illum
          exercitationem harum totam. Sed, excepturi ipsam autem reprehenderit
          <br />
          unde rem dolores, doloremque modi minus repellat deleniti illum omnis
          quae fuga officiis culpa aliquid sapiente velit dicta ut consequuntur
          voluptates, praesentium odio? Quibusdam, iure inventore. Suscipit
          fugit fugiat, ex labore praesentium explicabo deleniti cumque nostrum
          hic veritatis adipisci placeat exercitationem atque minus unde eos
          corrupti sint porro! Eius, voluptatem non!
        </div>
      </div>
    </div>
  );
}

export default About;
