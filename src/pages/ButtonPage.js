import { GoBell, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Buttons</h1>
      <div>
        <Button primary>
          <GoBell />
          Cluck Me
        </Button>
      </div>
      <div>
        <Button primary>
          <GoCloudDownload />
          Cluck Me
        </Button>
      </div>
      <div>
        <Button secondary>Cluck Me</Button>
      </div>
      <div>
        <Button success>Cluck Me</Button>
      </div>
      <div>
        <Button warning>Cluck Me</Button>
      </div>
      <div>
        <Button danger>Cluck Me</Button>
      </div>
    </>
  );
}

export default ButtonPage;
