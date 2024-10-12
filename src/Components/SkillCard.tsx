interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border p-4 mt-11 rounded-lg bg-gray-800 text-white w-[30%] my-4 border border-primaryColor hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_#64FFDA80] transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="mt-2">
        {skills.map((skill, index) => (
          <li key={index} className="list-disc list-inside">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
