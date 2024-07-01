import "./About.css";

const About = () => {
  return (
    <section id="About" className="my-16 max-w-7xl mx-auto">
      <h1 className="section-heading ">About Us</h1>

      <div className="mt-10 grid gap-y-4 lg:grid-cols-3 lg:items-center lg:mt-0">
        <img
          src="/images/About/MACE.jpg"
          alt="img1"
          className=" object-cover relative h-full rounded-[35px] shadow-[10px_1px_8px_0px_rgba(0,0,0,0.2)] sm:w-1/2 sm:mx-auto lg:w-full lg:h-[19rem]"
        />
        <div className="h-full p-5 lg:p-3 bg-[#D9D9D9] rounded-[35px] sm:w-1/2 sm:mx-auto lg:w-auto lg:h-[13rem]  lg:col-span-2 lg:rounded-r-[35px] lg:rounded-l-none">
          <h4 className="mb-1 text-xl font-bold text-black text-center">
            MACE
          </h4>
          <p className="text-sm text-black font-semibold text-justify">
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. IEEE
            Student Branch MACE (Student Branch Code: 32041) was established on
            November 17th, 1988 and is one of the largest student branches
            across the globe with over 500 student members. Every year numerous
            events are conducted by IEEE MACE SB to enhance the skills of our
            students and to equip them with the rapidly changing industry. IEEE
            MACE SB offers a Hardware Laboratory to the members to develop
            technical projects. IEEE conducts Training programmes, talks,
            professional awareness sessions, hackathons, industrial visits,
            debates, quizzes and workshops regularly.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-y-4 lg:grid-cols-3 lg:items-center lg:mt-0">
        <img
          src="/images/about2.jpg"
          alt="img2"
          className="relative h-full rounded-[35px] shadow-[-10px_1px_8px_0px_rgba(0,0,0,0.2)] sm:w-1/2 sm:mx-auto lg:w-full lg:h-[19rem] lg:order-last"
        />
        <div className="h-full p-5 bg-[#D9D9D9] rounded-[35px] lg:h-[13rem] sm:w-1/2 sm:mx-auto lg:w-auto  lg:p-3 lg:col-span-2 lg:rounded-l-[35px] lg:rounded-r-none">
          <h4 className="mb-1 text-xl font-bold text-black text-center">
            IEEE MACE SB
          </h4>
          <p className="text-sm text-black font-semibold text-justify">
            IEEE is the world’s largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. IEEE
            Student Branch MACE (Student Branch Code: 32041) was established on
            November 17th, 1988 and is one of the largest student branches
            across the globe with over 500 student members. Every year numerous
            events are conducted by IEEE MACE SB to enhance the skills of our
            students and to equip them with the rapidly changing industry. IEEE
            MACE SB offers a Hardware Laboratory to the members to develop
            technical projects. IEEE conducts Training programmes, talks,
            professional awareness sessions, hackathons, industrial visits,
            debates, quizzes and workshops regularly.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
