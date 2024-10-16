import bgIdCard01 from "../assets/idcard_01.jpg"
import bgIdCard02 from "../assets/idcard_02.jpg"
import picture from "../assets/vite.svg"
import { useQRCode } from "next-qrcode"

export default function IdCard() {
  const { Canvas } = useQRCode()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/** ID Card Depan **/}
      <div
        className="w-[105mm] h-[167mm] bg-cover bg-center rounded-lg shadow-xl relative"
        style={{ backgroundImage: `url(${bgIdCard01})` }}
      >
        {" "}
        <div className="relative z-10 p-6 text-white flex flex-col items-center justify-center h-full">
          <div className="w-28 h-28 overflow-hidden mb-4">
            <img
              src={picture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-black text-2xl font-bold">Nama Lengkap</h2>
          <p className="text-black text-lg font-light">Calon Kepala Daerah</p>
          <div className="text-black mt-4 text-center">
            <p>No. ID: 1234567890</p>
            <p>Masa Jabatan: 2024 - 2029</p>
          </div>
        </div>
      </div>

      {/** ID Card Belakang **/}
      <div
        className="w-[105mm] h-[167mm] bg-cover bg-center rounded-lg shadow-xl relative"
        style={{ backgroundImage: `url(${bgIdCard02})` }}
      >
        {""}
        <div className="relative z-10 p-6 text-white flex flex-col items-center justify-center h-full">
          <div className="mb-4 border-4 border-solid border-red-500">
            <Canvas
              text={"https://github.com/rflihmmm/idcard"}
              options={{
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 160,
                color: {
                  dark: "#000",
                  light: "#FFF",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
