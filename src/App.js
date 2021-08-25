
import Header from "./Pages/Header";

import cls from './App.module.scss';
import Main from "./Pages/Main";
import Footer from "./Pages/Footer";
function App() {
  return (
    
    <div className={cls.root}>
      <Header/>
      <Main/>
      <Footer/>
   </div>
  );
}

export default App;
