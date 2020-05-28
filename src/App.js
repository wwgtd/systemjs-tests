import React from 'react';

const {sys} = window


//const OtherComponent = React.lazy(() => sys.import('http://euro-ins.local:5555/qwe.js'));
class App extends React.PureComponent {
    state = {Component: null}

    onButton1 = () => {
        sys.import(`https://temporary-hosting123.000webhostapp.com/bundle.js`).then(module => this.setState({Component: module.default}))
    }

    onButton2 = () => {
        sys.import(`https://temporary-hosting123.000webhostapp.com/bundle2.js`).then(module => this.setState({Component: module.default}))
    }

    


  render() {
        const {Component} = this.state;

      return (<div>
          <button onClick={this.onButton1}>component 1</button>
          <button onClick={this.onButton2}>component 2</button>
          {Component ? <Component text={'privet'}/> : <p children={'select component'} />}
      </div>)
  }
}


export default App;
