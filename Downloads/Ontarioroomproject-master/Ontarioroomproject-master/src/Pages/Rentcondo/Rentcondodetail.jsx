import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import RentCondoDetailpage from '../../Components/rentcondo/RentCondoDetailpage'
import { detailroomstart } from '../../Redux/Rentcondo/rentcondo.action'
import { selectdetailitem } from '../../Redux/Rentcondo/rentcondo.selector'


const Rentcondodetail = (props) => {
  const { room, startodatapath } = props;
  const {id} = props.match.params
  useEffect(() => {
    startodatapath(id);
  }, [id, startodatapath]);

  
  return (
    <RentCondoDetailpage {...room}/>
  )
}

const maptoprops = createStructuredSelector({
  room: selectdetailitem
})

const dispatchtoprops = dispatch =>({
  startodatapath: (query) => dispatch(detailroomstart(query))
})

export default connect(maptoprops, dispatchtoprops)(Rentcondodetail); 
