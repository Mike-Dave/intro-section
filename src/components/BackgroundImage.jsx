import mobileBackgroundImg from "../images/image-hero-mobile.png";
import desktopBackgroundImg from "../images/image-hero-desktop.png";
function BackgroundImage() {
  return (
    <picture>
      <img
        className="md:hidden"
        src={mobileBackgroundImg}
        alt="a black man with dreads operating a laptop"
      />
      <img
        className="hidden md:block"
        src={desktopBackgroundImg}
        alt="a black man with dreads operating a laptop"
      />
    </picture>
  );
}

export default BackgroundImage;
