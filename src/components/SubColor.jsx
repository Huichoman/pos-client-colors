import PropTypes from "prop-types"

export const SubColor = ({ color, name }) => {
  return (
    <div className="flex items-center gap-2 w-1/4">
      <div
        className={`${color} rounded-md shadow-shadow32 min-w-10 min-h-10`}
      ></div>
      <p>{name}</p>
    </div>
  )
}

SubColor.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
