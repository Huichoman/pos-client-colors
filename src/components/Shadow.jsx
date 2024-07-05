import PropTypes from "prop-types"

export const Shadow = ({ shadow }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-lg w-24 h-24 ${shadow}`}
    >
      {shadow.substring(7)}
    </div>
  )
}

Shadow.propTypes = {
  shadow: PropTypes.string.isRequired,
}
