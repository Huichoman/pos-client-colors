import PropTypes from "prop-types"

export const Color = ({ color }) => {
  return (
    <div className="flex items-center gap-2 w-1/4">
      <div className={`${color} rounded-md shadow-shadow32 w-12 h-12`}></div>
      <p>{color.substring(3)}</p>
    </div>
  )
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
