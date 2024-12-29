import Footer from "../components/footer";
import NavBar from "../components/navBar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
