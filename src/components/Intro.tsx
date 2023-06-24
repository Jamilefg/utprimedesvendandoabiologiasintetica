interface IntroProps {
  visible: boolean;
}

export const Intro = ({ visible }: IntroProps) => {
  return (
    <div
      className="text-white flex items-center flex-col"
      style={!visible ? { display: "none" } : {}}
    >
      <h2 className="font-droid text-[70pt] mb-[-1.5rem] text-shadow">
        UTPRIMERS
      </h2>

      <div className="py-4 px-8 font-droid text-[33pt] desktop:text-[39pt] rounded-full bg-green-700">
        Desvendando a biologia sintética
      </div>
    </div>
  );
};
