import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Head from "next/head";

const About = () => {
  return (
    <div className="h-screen lg:pl-20 lg:pr-32">
      <Head>
        <title>About | Alia Jonathan</title>
      </Head>
      <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 px-10 mt-10">
          <div className="flex flex-col md:flex-row">
              <div className=" md:px-8 ">
                  <motion.div className="md:w-96"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.4,
                        },
                      },
                    }}
                  >
                    <h1 className="text-3xl font-bold sm:text-4xl mb-8">
                      Hello, I&#39;m <span className="text-blue-500">Alia</span>
                    </h1>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 1,
                        },
                      },
                    }}
                  >
                    <h2 className="font-bold text-3xl text-left mb-5">
                      I&#39;m a
                      <span className="text-blue-500"> FullStack Developer</span> with a
                      passion for
                      <span className="text-blue-500"> Artificial Inteligence, Maths and IoT</span>.
                    </h2>
                  </motion.div>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.6,
                    },
                  },
                }}
              >
                <p className="text-left font-normal mb-5 flex-wrap">
                I have been messing with computers for the better part of my life, perks of being a genZ I guess, in the last year I sacrificed many nights and  learnt how to build software and also work with teams to build software. So this days all I do is sit down and   <a
                    href="https://github.com/ajayjona"
                    className="underline text-blue-500"
                  >
              
                    CODE
                  </a> away on my laptop , you could call it a nerds dream.

                
                </p>
                <p className="text-left font-normal mb-5 flex-wrap"></p>
                <p className="text-left font-normal mb-5 flex-wrap">
                When not geeking, I love to listen to music, take long walks and hit the gym. If you are already on this section of my corner of the web , I would like to share one of my spotify playlists with you.

                  <a
                    href="https://open.spotify.com/playlist/0Xs8Q9hQX2ut6OfuG9IGmN?si=7PpVd1kjQZW30aT4rOXyWg&pi=e-9tC9S-VxRCOL"
                    className="underline text-blue-500"
                  >
              
                    peaceful Nostalgia  
                  </a>
                  &nbsp;: this is a smooth blend of 2010s and 2020s RnB and HipHop with a twist to it ,enjoy.
                </p>
                
              </motion.div>
          </div>
          <div className="text-bold text-3xl mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
