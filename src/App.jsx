// import { darken, lighten } from "@mui/system"
import { Color } from "./components/Color"
import { Shadow } from "./components/Shadow"
import { SubColor } from "./components/SubColor"

// const lighter = `"${lighten("#33C2FF", 0.85)}"`
// const light = `"${lighten("#33C2FF", 0.3)}"`
// const dark = `"${darken("#33C2FF", 0.2)}"`
function App() {
  return (
    <>
      <div className="flex flex-col items-start bg-white w-full min-h-screen  p-8 font-poppins">
        <p className="text-xl w-44 text-slate-50 bg-gradient-to-r from-slate-600 from-10% to-slate-800 to-90% font-semibold mb-10 rounded-r-full pl-10 pr-6 py-3">
          Shadows
        </p>
        <div className="flex flex-wrap w-4/5 gap-12 mb-20">
          <Shadow shadow="shadow-success" />
          <Shadow shadow="shadow-error" />
          <Shadow shadow="shadow-info" />
          <Shadow shadow="shadow-primary" />
          <Shadow shadow="shadow-warning" />
          <Shadow shadow="shadow-card" />
          <Shadow shadow="shadow-cardSm" />
          <Shadow shadow="shadow-cardLg" />
        </div>
        <p className="text-xl w-44 text-slate-50 bg-gradient-to-r from-slate-600 from-10% to-slate-800 to-90% font-semibold mb-10 rounded-r-full pl-10 pr-6 py-3">
          AuxPalete
        </p>
        <div className="flex flex-wrap w-4/5 mb-6">
          <Color color="bg-primary" />
          <SubColor color="bg-primaryLighter" name="primary.lighter" />
          <SubColor color="bg-primaryLight" name="primary.light" />
          <SubColor color="bg-primaryDark" name="primary.dark" />
        </div>
        <div className="flex flex-wrap w-4/5 mb-6">
          <Color color="bg-secondary" />
          <SubColor color="bg-secondaryLighter" name="secondary.lighter" />
          <SubColor color="bg-secondaryLight" name="secondary.light" />
          <SubColor color="bg-secondaryDark" name="secondary.dark" />
        </div>
        <div className="flex flex-wrap w-4/5 mb-6">
          <Color color="bg-success" />
          <SubColor color="bg-successLighter" name="success.lighter" />
          <SubColor color="bg-successLight" name="success.light" />
          <SubColor color="bg-successDark" name="success.dark" />
        </div>
        <div className="flex flex-wrap w-4/5 mb-6">
          <Color color="bg-warning" />
          <SubColor color="bg-warningLighter" name="warning.lighter" />
          <SubColor color="bg-warningLight" name="warning.light" />
          <SubColor color="bg-warningDark" name="warning.dark" />
        </div>
        <div className="flex flex-wrap w-4/5 mb-6">
          <Color color="bg-error" />
          <SubColor color="bg-errorLighter" name="error.lighter" />
          <SubColor color="bg-errorLight" name="error.light" />
          <SubColor color="bg-errorDark" name="error.dark" />
        </div>
        <div className="flex flex-wrap w-4/5 mb-6">
          <Color color="bg-info" />
          <SubColor color="bg-infoLighter" name="info.lighter" />
          <SubColor color="bg-infoLight" name="info.light" />
          <SubColor color="bg-infoDark" name="info.dark" />
        </div>
        <div className="mb-6">
          <Color color="bg-black" />
        </div>
        <div className="mb-6">
          <Color color="bg-white" />
        </div>
        <div className="mb-6">
          <Color color="bg-primaryAlt" />
        </div>

        <p className="text-xl w-44 text-slate-50 bg-gradient-to-r from-slate-600 from-10% to-slate-800 to-90% font-semibold mb-10 rounded-r-full pl-10 pr-6 py-3 mt-16">
          gradients
        </p>
        <div className="flex flex-wrap w-3/5 gap-10 ">
          <Color color="bg-blue1" />
          <Color color="bg-blue2" />
          <Color color="bg-blue3" />
          <Color color="bg-blue4" />
          <Color color="bg-blue5" />
          <Color color="bg-orange1" />
          <Color color="bg-orange2" />
          <Color color="bg-orange3" />
          <Color color="bg-purple1" />
          <Color color="bg-purple3" />
          <Color color="bg-pink1" />
          <Color color="bg-pink2" />
          <Color color="bg-green1" />
          <Color color="bg-green2" />
          <Color color="bg-black1" />
          <Color color="bg-black2" />
        </div>
      </div>
    </>
  )
}

export default App
