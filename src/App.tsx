import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';

function App() {

  return (
    <div>

      {/* header section */}
        <Header title={"Minimal Todo List "}
        name={" Suparida Silpasith "} id={ 630610765} ></Header>
     
      {/* todo section */}
      <Todo></Todo>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
