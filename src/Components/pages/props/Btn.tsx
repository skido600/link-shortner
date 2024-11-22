interface PropBtn {
  className?: string;
  text: string;
}
const Btn: React.FC<PropBtn> = ({ className, text }) => {
  return (
    <>
      <main>
        <button className={`${className}`}>{text}</button>
      </main>
    </>
  );
};

export default Btn;
