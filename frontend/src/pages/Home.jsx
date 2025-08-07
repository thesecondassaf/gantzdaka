import kidsImg from '../assets/kids.svg';

export default function Home() {
  return (
    <div className="p-4 space-y-4 text-center">
      <h1 className="text-4xl font-bold text-orange-800">Gan Tzedaka</h1>
      <img src={kidsImg} alt="Happy children" className="mx-auto w-48" />
      <section>
        <h2 className="text-xl font-semibold flex justify-center items-center space-x-2">
          <span role="img" aria-label="vision">🌟</span>
          <span>Vision</span>
        </h2>
        <p>Connecting young children with the joy of giving.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold flex justify-center items-center space-x-2">
          <span role="img" aria-label="process">🛠️</span>
          <span>Process</span>
        </h2>
        <p>Classes learn about charities and choose where to donate.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold flex justify-center items-center space-x-2">
          <span role="img" aria-label="impact">🌍</span>
          <span>Impact</span>
        </h2>
        <p>Empowering communities through early philanthropy.</p>
      </section>
    </div>
  );
}
