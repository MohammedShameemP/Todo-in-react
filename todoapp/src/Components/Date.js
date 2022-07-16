import React from 'react'
import moment from "moment";
function Date() {

  const   date_create= moment().format("DD-MM-YYYY")
//     var current_date = today.getDate();
// var current_month = today.getMonth()+1;
// var current_year = today.getFullYear();
//  const current = current_date+"/"+current_month+"/"+current_year
  return (
    <div>
        
        <h5 style={{marginBottom : '5vh'}}>{date_create}</h5>

    </div>
  )
}

export default Date