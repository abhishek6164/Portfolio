export default function Mail() {
  return (
    <div className="flex text-textColor items-center fixed bottom-32 -right-56 rotate-90">
      <a
        href="mailto:abhishekpipriye2507@gmail.com"
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-1 transition-transform tracking-widest duration-300 ease-in-out"
      >
        abhishekpipriye2507@gmail.com
      </a>
      <hr className="border-[2px] bg-textColor rounded-full border-textColor w-40" />
    </div>
  );
}
