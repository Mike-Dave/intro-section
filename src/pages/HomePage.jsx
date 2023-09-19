import BackgroundImage from "../components/BackgroundImage";
import PageNav from "../components/PageNav";
import MakeRemoteWork from "../components/MakeRemoteWork";
import CompanyLogos from "../components/CompanyLogos";
import AppLayout from "../components/AppLayout";
import MakeRemoteLayout from "../components/MakeRemoteLayout";
import MainApp from "../components/MainApp";
function HomePage() {
  return (
    <MainApp>
      <PageNav />
      <AppLayout>
        <BackgroundImage />
        <MakeRemoteLayout>
          <MakeRemoteWork />
          <CompanyLogos />
        </MakeRemoteLayout>
      </AppLayout>
    </MainApp>
  );
}

export default HomePage;
