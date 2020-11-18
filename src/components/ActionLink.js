function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log("This link was click");
    }
    return(
        <a href="#" onClick={handleClick}>Click me</a>
    );
}

export default ActionLink;