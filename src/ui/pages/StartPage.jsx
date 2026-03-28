import { useNavigate } from "react-router";
import CustomButton from "../components/shared/CustomButton";
import CustomIconButton from "../components/shared/CustomIconButton";
import { customIcons, getIcon } from "../../helpers/iconHelper";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col justify-center gap-25 p-10">
      <div className=" flex flex-col items-center gap-5 font-[Cairo]">
        <img className="w-100" src={getIcon(customIcons.cashlogLogo)} />
        <p className="text-xl">اكتب تقريرك بطريقة أسهل</p>
        <CustomButton
          title={"البدء بتقرير جديد"}
          className=" bg-transparent border-black text-black
                hover:bg-black hover:text-white hover:-translate-y-1"
          onClick={() => navigate("/form")}
        />
      </div>
      <div className="flex flex-col items-center gap-2 font-[Cairo]">
        <p>By: Mohammad Bayer Al-Ali</p>
        <div className="flex flex-row gap-4">
          <CustomIconButton
            className={"w-12"}
            icon={getIcon(customIcons.telegram)}
            onClick={() =>
              window.open("https://t.me/Mohammad_Bayer_AlAli", "_blank")
            }
          />
          <CustomIconButton
            className={"w-12"}
            icon={getIcon(customIcons.github)}
            onClick={() =>
              window.open("https://github.com/M-Bayer-A", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
}
