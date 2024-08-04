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
            Mar Athanasius College of Engineering pioneered engineering
            education in central Kerala in 1961. Managed by the Mar Athanasius
            College Association, Aided by the Government of Kerala, the college
            was the first in Asia under Christian Management. The college is
            affiliated to APJ Abdul Kalam Technological University. MACE, as it
            is popularly known, has grown by leaps and bounds since. It now has
            six full-fledged departments apart from the two auxiliary
            departments of Mathematics, Science, and Humanities.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-y-4 lg:grid-cols-3 lg:items-center lg:mt-0">
        <img
          src="/images/About/IEEE_MACE_SB.jpg"
          alt="img2"
          className="relative h-full rounded-[35px] shadow-[-10px_1px_8px_0px_rgba(0,0,0,0.2)] sm:w-1/2 sm:mx-auto lg:w-full lg:h-[19rem] lg:order-last"
        />
        <div className="h-full p-5 bg-[#D9D9D9] rounded-[35px] lg:h-[13rem] sm:w-1/2 sm:mx-auto lg:w-auto  lg:p-3 lg:col-span-2 lg:rounded-l-[35px] lg:rounded-r-none">
          <h4 className="mb-1 text-xl font-bold text-black text-center">
            IEEE MACE SB
          </h4>
          <p className="text-sm text-black font-semibold text-justify">
            Here's a condensed version of the text with a slight reduction in
            word count: --- The IEEE Student Branch MACE (Student Branch Code:
            32041), established on November 17th, 1988, is one of the largest
            student branches globally, with over 300 student members. For over
            35 years, IEEE MACE SB has conducted numerous events to enhance
            students' skills and prepare them for the rapidly changing industry.
            The branch offers a Hardware Laboratory for technical project
            development and regularly conducts training programs, talks,
            professional awareness sessions, hackathons, industrial visits,
            debates, quizzes, and workshops. We are committed to meeting
            students' interests and guiding them to become responsible
            professionals for a better tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
