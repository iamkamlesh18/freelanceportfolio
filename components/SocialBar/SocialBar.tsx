import styles from "./SocialBar.module.css";

export default function SocialBar() {
  return (
    <div className={styles.bar}>
      <a href="https://github.com/iamkamlesh18" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/iamkamlesh18" target="_blank">LinkedIn</a>
      <a href="mailto:patilkamlesh1811@gmail.com">Email</a>
    </div>
  );
}