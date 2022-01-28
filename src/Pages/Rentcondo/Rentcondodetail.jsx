import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import RentCondoDetailpage from '../../Components/rentcondo/RentCondoDetailpage'
import { detailroomstart } from '../../Redux/Rentcondo/rentcondo.action'
import { selectdetailitem } from '../../Redux/Rentcondo/rentcondo.selector'
import SEO from '../../staticFiles/SeoTag'


const Rentcondodetail = (props) => {
  const { room, startodatapath } = props;
  const {id} = props.match.params
  useEffect(() => {
    startodatapath(id);
  }, [id, startodatapath]);

  
  return (
    <>
      <Helmet>
        <title>{SEO.title} | Room detail page</title>
        <meta name="description" content={`${SEO.description}`} />
        <meta name="keywords" content={SEO.keyword} />
      </Helmet>
      <RentCondoDetailpage {...room} />
    </>
  );
}

const maptoprops = createStructuredSelector({
  room: selectdetailitem
})

const dispatchtoprops = dispatch =>({
  startodatapath: (query) => dispatch(detailroomstart(query))
})

export default connect(maptoprops, dispatchtoprops)(Rentcondodetail); 
