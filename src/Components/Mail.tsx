const Mail = () => {
  return (
    <div className="flex bs-mx:hidden text-textColor items-center  fixed bottom-32 -right-56 rotate-90">
      <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a
          href="mailto:abhishekpipriye2507@gmail.com"
          className="font-mono text-lg tracking-widest hover:text-primaryColor hover:-translate-x-1 transition-transform duration-300 ease-in-out"
        >
          abhishekpipriye2507@gmail.com
        </a>
      </div>
      <hr className="border-2 w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Mail;
