import React , { Component,useState, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false,
     }

     toggleAuth = () => {
         this.setState({ isAuthenticated: !this.state.isAuthenticated });
     }
    render() { 
        return ( 
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;

// const AuthContextProvider = () => {
//     const [isAuthenticated, setAuthonicated] = useState(false);

//     const  toggleAuth = () => {
//         setAuthonicated({ isAuthenticated: !isAuthenticated });
//     }

//     return ( 
//         <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
//                 {children}
//         </AuthContext.Provider>
//      );
// }
 
// export default AuthContextProvider;