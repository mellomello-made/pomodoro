import Maintime from "../components/Maintime";
import Tasks from "../components/Tasks";

const Main = ({ mode }) => {
  return (
    <main>
      <Maintime mode={mode} />
      <Tasks />
    </main>
  );
};

export default Main;
