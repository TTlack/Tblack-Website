import LinkPoint from "./LinkPoint";

function NavBar() {
  return (
    <div>
      <>
        <LinkPoint to="/">Home</LinkPoint>
        <LinkPoint to="/project">Project</LinkPoint>
        <LinkPoint to="/blog">Blog</LinkPoint>
        <LinkPoint to="/contact">Contact</LinkPoint>
      </>
    </div>
  );
}

export default NavBar;
