const ByeGreeting = (props) => {
    const fname=props.fname;
    //console.log(props,fname);
    return (
        <div className='byeGreeting'>
            <h1>Good Bye {props.name} !! </h1>
            <button className="button button2" onClick={props.changeName}> Name Change </button>
        </div>
    );
}

export default ByeGreeting;