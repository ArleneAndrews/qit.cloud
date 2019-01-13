import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Episode = styled.li`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.playing ? '#7FbFb8' : '#fafafa'};
  cursor: pointer;
`

Episode.defaultProps = {
  playing: false
}

Episode.propTypes = {
  playing: PropTypes.bool.isRequired
}

export default Episode
