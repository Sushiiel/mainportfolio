import AboutImg from '../assets/—Pngtree—the machine learning_14567917.png';

export default function About() {
  return (
    <section id="About" className='flex flex-col lg:flex-row bg-primary px-2 py-20'>
      <div className='w-full lg:w-1/2 py-2 flex justify-center'>
        <img src={AboutImg} alt="About" className="max-w-full h-auto lg:max-w-lg" />
      </div>
      <div className='w-full lg:w-1/2 text-white py-8 lg:py-0 px-4 lg:px-12'>
        <h1 className='border-b-4 border-[#0077cc] text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 text-center lg:text-left'>About Me</h1>
        <p className='text-xl lg:text-2xl leading-relaxed lg:leading-loose'>
          As an avid machine learning enthusiast, I'm deeply fascinated by
          the convergence of data and algorithms. With a strong foundation
          in mathematics and computer science, I'm dedicated to exploring
          intricate realms of neural networks, natural language processing
          and computer vision. Committed to leveraging these techniques,
          I strive to drive innovation and create impactful solutions that
          propel businesses and society forward.
        </p>
      </div>
    </section>
  );
}
