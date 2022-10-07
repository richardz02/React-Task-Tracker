/*  props are arguments passed into React components. 
    Props are passed to components via HTML attributes.
    Props stands for properties
*/
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in js
/* const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
} */

export default Header
