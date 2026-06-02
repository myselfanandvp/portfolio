import { useSelector } from "react-redux"

const Clipshape = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const color = darkMode ? "gray" : "amber"
  return (
    <div
      className={`w-60 h-8 bg-${color}-300 mb-8 `}
      style={{
        clipPath:
          "polygon(58% 44%, 100% 41%, 100% 57%, 72% 58%, 17% 60%, 99% 50%, 0% 49%)",
      }
      }
    ></div >
  )
}

export default Clipshape
