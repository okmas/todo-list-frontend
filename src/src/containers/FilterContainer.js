import { connect } from 'react-redux'
import { setFilter } from '../app/actions'
import Filter from '../components/Filter'

const mapStateToProps = (state) => ({
  filter: state.filter
})

const FilterContainer = connect(mapStateToProps, {setFilter})(Filter);

export default FilterContainer;