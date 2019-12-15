import React from 'react';
import MyContext from './MyContext';

class MyProvider extends React.Component {
    state = {
      data:[{}]
    };


    componentDidMount(){
      fetch('http://demo5019816.mockable.io/').then( response => response.json())
      .then( data => {
        this.setState({data:data.data})
      });

    }


    render() {
        return (
            <MyContext.Provider
                value={{
                    data: this.state.data,
                    updateDate: (index,newDate) => {
                        const data = Object.assign({}, this.state.data);
                        data[index].createdOn = newDate;
                        this.setState({
                            data
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;