import css from './App.module.css';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
// import EventsClass from './components/EventsClass';
import NavBarForm from './components/NavBarForm';
// import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';


function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      <ContentHooks />
      
    </div>
  );
}



export default App;