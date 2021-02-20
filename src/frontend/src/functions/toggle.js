toggleLeadListClass(event){
    event.preventDefault()
    this.setState(prevState => {
        if (prevState.leadListClass === ""){
            return {leadListClass: "card my-2 p-3"}
        } else {
            return {leadListClass: ""}
        }
    })
}



const showContent = elClass.includes("card") ? "d-block": "d-none"
