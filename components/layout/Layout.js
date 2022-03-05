import Menu from "../nav/Menu";
import MenuButton from "../nav/MenuButton";

export default function Layout({ children }) {
  return (
    <>
      <MenuButton />
      <Menu />
      <div style={{ marginTop: `20vh` }}>{children}</div>
    </>
  );
}
