import PropTypes from 'prop-types'

const Header = ({ title }) => {

  return (
    <header className='header'>
      <h2 data-testid='h2HeaderTag'>{title}</h2>
      <img style={{ width: '100px', cursor: 'pointer' }} alt="Auto1 Logo" src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png"></img>
    </header>
  )
}

Header.defaultProps = {
  title: 'Car Management',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
