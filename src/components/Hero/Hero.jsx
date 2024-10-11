import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <h1>
      Hi, I am Kevin <br />
      <span>
        <Typewriter
          words={['UI Designer', 'UX Designer']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={40}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default Hero;
