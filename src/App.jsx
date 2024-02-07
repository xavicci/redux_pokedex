import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Searcher } from "./components/Searcher";
import logo from "./static/logo.svg";
import { PokemonList } from "./components/PokemonList";
import "./App.css";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector(
    (state) => state.data.pokemons,
    shallowEqual
    // state.getIn(["data", "pokemons"], shallowEqual)
  );
  const loading = useSelector((state) => state.ui.loading);
  // .getIn(["ui", "loading"]));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

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
