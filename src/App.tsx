import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
function App() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Container/>

      {/* <div className={styles.container}>
        <div className={styles.navbar}>
          <h1>box</h1>
        </div>
        <div className={styles.content}>
          <h1>content</h1>
        </div>

      </div> */}
    </div>
  );
}

export default App;
