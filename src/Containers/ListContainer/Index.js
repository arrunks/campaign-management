import React from 'react';
import {Table} from 'react-bootstrap';
import ListItem from './ListItem';

import MyContext from '../../components/MyContext';

function ListContainer({type}) {
  return (
   <Table responsive className="border mt-5 shadow p-3 mb-5 bg-white rounded">
    <thead className="thead-light">
      <tr>
        <th>DATE</th>
        <th>CAMPAIGN</th>
        <th>VIEW</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      <MyContext.Consumer>
        {context => (
              <React.Fragment>
                  {context.data && Object.keys(context.data).map((item,index) => (
                      <ListItem
                          key={index}
                          name={context.data[item].name}
                          date={context.data[item].createdOn}
                          image_url={context.data[item].image_url}
                          updateDate={context.updateDate}
                          index={item}
                          type={type}
                      />
                  ))}
                  
              </React.Fragment>
          )}
      </MyContext.Consumer>
    </tbody>
  </Table>
  )
}

export default ListContainer;