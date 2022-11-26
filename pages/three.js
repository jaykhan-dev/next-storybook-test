import { Canvas } from "@react-three/fiber";
import PhysicsScene from "../components/physics";
import Squares from "../components/squares";
import styles from "../components/three.module.css";

function Three() {
  return (
    <div className={styles.threeCanvas}>
      <PhysicsScene />
      <Squares />
    </div>
  );
}

export default Three;
