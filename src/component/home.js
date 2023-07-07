function home(props) {
    return(
        <div style={{textAlign: 'center'}}>
            <div>
                <h1>Welcome</h1>
                <button onClick={props.onLogOut}>Log out</button>
            </div>
        </div>
    )
}
export default home