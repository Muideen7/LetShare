import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>LET'S FIGHT FOOD WASTE TOGETHER</h2>
        <div className={styles.slogan}>
          <p>Food waste is a big problem, and we can be a solution.</p>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://plus.unsplash.com/premium_photo-1683134125287-3d7cc246bdc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80ttps://images.unsplash.com/photo-1505377059067-e285a7bac49b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
          alt="children smiling"
        />
      </div>
    </div>
  );
};
export default Hero;
