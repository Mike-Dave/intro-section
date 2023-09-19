import dataBiz from "../images/client-databiz.svg";
import audioPhile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

export default function CompanyLogos() {
  return (
    <>
      {" "}
      <div className="flex gap-5 justify-around p-4 mt-3 md:mt-64d  items-center absolute md:top-[32rem] ">
        <div>
          <img src={dataBiz} alt="data" />
        </div>
        <div>
          {" "}
          <img src={audioPhile} alt="audio" />
        </div>
        <div>
          {" "}
          <img src={meet} alt="audio" />
        </div>
        <div>
          {" "}
          <img src={maker} alt="audio" />
        </div>
      </div>
    </>
  );
}
