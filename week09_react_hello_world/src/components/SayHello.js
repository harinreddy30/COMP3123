function SayHello(props){
const mystyle = {
    color: 'red',
    backgroundcoler: 'yeelow'
}

    return <h1 style={mystyle}>Hello {props.fname} {props.lname}</h1>
}
// function SayHello(fname, lname){
//     // const name = "Harin"
//      return <h1>Hello {fname} {lname}</h1>
//  }
export default SayHello;