const Journeys = () => (
  <section className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {['Cultural Tour', 'Eco Adventure', 'Science Camp'].map((trip, i) => (
      <div key={i} className="bg-white shadow rounded p-4 hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">{trip}</h3>
        <p>Exciting and educational experience for school students.</p>
      </div>
    ))}
  </section>
);

export default Journeys;