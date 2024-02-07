import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Searcher } from "./components/Searcher";
import logo from "./static/logo.svg";
import { PokemonList } from "./components/PokemonList";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsResult = await getPokemon();
      dispatch(setLoading(false));

      dispatch(getPokemonsWithDetails(pokemonsResult));
    };

    fetchPokemons();
  }, [dispatch]);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
