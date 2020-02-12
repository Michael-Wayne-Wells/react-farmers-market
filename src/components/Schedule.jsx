import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'

function Schedule(props){
  return(
    <div>
          <Table className="tableDate" striped bordered hover variant="dark">
            <style jsx>{`

                Table {
                  font-family: 'Zilla Slab', serif;
                }

                .tableDate {
                  margin: 0 auto;
                  width:60%;
                }
                td {
                  width: 25%;
                }

                td:nth-child(1) {
                  background: #54575c;
                  width: 18%;
                  color: whitesmoke;
                  text-shadow: 1.5px 1.5x black;
                  font-size: 20px;
                  font-weight: bold;
                }

                th {
                  border-bottom: 2px solid black;
                }
                `}</style>

        <tr>
          <td>{props.day}</td>
          <td>{props.location}</td>
          <td>{props.hours}</td>
          <td> {props.booth}</td>
        </tr>
      </Table>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}

export default Schedule;
