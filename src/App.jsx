import { CORE_GAMES } from './data.js';

function Header() {
  return (
    <header>
      <h1>Series</h1>
      <p>
        Mejores series de netflix que tienes que ver
      </p>
    </header>
  );
}

function CoreGames(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Empezemos!</h2>
        <section id="core-concepts">
          <h2>Mejores series</h2>
          <ul>
            {CORE_GAMES.map((game) => (
              <CoreGames 
                key={game.title}
                image={game.image}
                title={game.title}
                description={game.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
