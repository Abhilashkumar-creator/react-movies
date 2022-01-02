export function ColorBox({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: "50px",
    width: "200px",
    margin: "10px 0px",
  };
  return <div style={styles}></div>;
}
