import { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import AlbumFeature from "./features/Album/index";
import TodoFeature from "./features/Todo/index";
import categoriesApi from "./api/catagoriesApi";

function App() {
  const Home = () => {
    return (
      <p>HomePage</p>
    )
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await categoriesApi.getAll()
      // console.log(productList)
    }
    fetchProduct()

  })
  return (
    <div className="App">
      <p>
        <Link to='/todo'> todo</Link>
      </p>
      <p>
        <Link to='/album'>Album</Link>
      </p>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
      </Switch>
    </div>
  );
}

export default App;
