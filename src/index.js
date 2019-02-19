import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './seasonDisplay';
import Loader from './loader';
import useLocation from './useLocation'

const App = () => {
    const [lat, errorMessage] = useLocation()

    let content
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />
    } else {
        content = <Loader message='Please accept location request' />
    }

    return <div className='border red'>{content}</div>
}

//
// The app has been refactored with hooks system
//

// class App extends Component {
//     state = { lat: null, errorMessage: ''}
    
//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 this.setState({lat: position.coords.latitude})
//             },
//             (err) => this.setState({errorMessage: err.message})
//         );
//     }

//     renderContent() {
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div> Error: {this.state.errorMessage} </div>
//         }
    
//         if (!this.state.errorMessage && this.state.lat) {
//             return <SeasonDisplay lat={this.state.lat} />
//         }
    
//         return <Loader message='Please accept location request' />
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderContent()}
//             </div>
//         )
//     }
// }

ReactDOM.render(<App />, document.querySelector('#root'))