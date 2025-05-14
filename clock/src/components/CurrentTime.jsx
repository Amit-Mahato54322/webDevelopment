let CurrentTime = ()=>{
    let time = new Date;
    return  <>
    <p>Current Date and Time in USA is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </>
}

export default CurrentTime;